const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    // set role to manager 
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;