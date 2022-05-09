class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // get name, id, and email from inquirer prompt
    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }   

    getEmail () {
        return this.email;
    }

    // returning employee type 
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 