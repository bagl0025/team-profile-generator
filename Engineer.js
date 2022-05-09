const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    getGithub () {
        return this.github;
    }

     // set role to engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 