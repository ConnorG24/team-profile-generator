const genHTML = require('./src/genHTML');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const workerArray = [];
const fs = require('fs');
const inquirer = require('inquirer');




const addManager = function(){
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Please enter manager name'
        },{
            type:'input',
            name:'id',
            message:'Please enter manager id'
        },{
            type:'input',
            name:'email',
            message:'Please enter manager email'
        },{
            type:'input',
            name:'officeNum',
            message:'Please enter manager office number'
        }

    ])
    .then( managerInput =>{
        const {name, id, email, officeNum} = managerInput;
        const manager = new Manager(name,id,email,officeNum);
        workerArray.push(manager);

    })
};

const addWorker = function(){
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Pick a role, any role',
            choices: ['Intern','Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter name of employee'

        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter id of employee'

        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email of employee'

        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter github username of employee',
            when:(input) => input.role === 'Engineer'

        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter school of employee',
            when:(input) => input.role === 'Intern'

        },{
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'add another employee?',
            default: false
        }
        

    ]).then(workerData =>{
        let {name, id, email, role, school, github, confirmAddEmployee} = workerData;
        let employee;
        if (role ==='Intern'){
            employee = new Intern (name, id, email, school);
        } else if (role ==='Engineer'){
            employee = new Engineer (name, id, email, github);
        }
       workerArray.push(employee);
        
    })
};

const writeFile = data =>{
    fs.writeFile('./dist/index.html', data, err =>{
        if(err){
            console.log(err);
            return;
        } else{
            console.log('HTML has been generated');
        }
    })
};
// could not figure this out ----- .then wont keeps thinking my array is a newly declared var down here
addManager()
  .then(addEmployee)
  .then(workerArray => {
    return generateHTML(workerArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });