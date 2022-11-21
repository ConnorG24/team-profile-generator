const Employee = require('./employee');

class Manger extends Employee{
    constructor(name, id , email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    }
    getOfficeNum(){
        return this.officeNum;
    }
    getRole(){
        return 'Manager';
    }
}
module.exports = Manger;