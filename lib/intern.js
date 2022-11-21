const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, shcool){
        super(name,id,email);
        this.shcool = shcool;
    }
    getSchool(){
        return this.shcool;

    }
    getRole(){
        return "Intern"
    }
}
module.exports = Intern;