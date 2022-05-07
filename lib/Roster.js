const inquirer = require('inquirer');
const Employee = require('./Employee');

function Roster() {
    this.manager = [];
}

Roster.prototype.officeManager = function() {
    inquirer.prompt([
    {
        type: 'text',
        name: 'manager',
        message: "Enter the team manager's name."
    },
    {
        type: 'number',
        name: 'id',
        message: "Enter the team manager's id."
    },
    {
        type: 'text',
        name: 'email',
        message: "Enter the team manager's email."
    },
    {
        type: 'text',
        name: 'office',
        message: "Enter the team manager's office number."
    }])
    .then(({answers}) => {
        //     // deconstruct name from the prompt object
//     .then(({ name }) => {
//         this.emplyee = new Employee(name);
//     });
// };
        this.employee = new Employee(answers);
        console.log(this.manager);
        new Roster().employeeType();
    });
};

Roster.prototype.engineer = function() {
    inquirer.prompt([
    {
        type: 'text',
        name: 'name',
        message: "Enter the engineer's name."
    },
    {
        type: 'number',
        name: 'id',
        message: "Enter the engineer's id."
    },
    {
        type: 'text',
        name: 'email',
        message: "Enter the engineer's email."
    },
    {
        type: 'text',
        name: 'github',
        message: "Enter the engineer's GitHub user name."
    }])
    .then(() => {
        this.employeeType();
    });
};

Roster.prototype.intern = function() {
    inquirer.prompt([
    {
        type: 'text',
        name: 'name',
        message: "Enter the intern's name."
    },
    {
        type: 'number',
        name: 'id',
        message: "Enter the intern's id."
    },
    {
        type: 'text',
        name: 'email',
        message: "Enter the intern's email."
    },
    {
        type: 'text',
        name: 'school',
        message: "Enter the intern's school name."
    }])
    .then(() => {
        this.employeeType();
    });
};

Roster.prototype.employeeType = function() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'employeeType',
        message: "Select an employee type from the list.",
        choices: ['Engineer', 'Intern', 'Finish Roster']  
    }])
    .then((answer) => {
        if (answer.employeeType === "Engineer") {
            new Roster().engineer();
            }
        else if (answer.employeeType === "Intern") {
            // console.log(answer.employeeType);
            new Roster().intern();
        }
        else if (answer.employeeType === "Finish Roster") {
            return false;
        }
    });
};

//     // deconstruct name from the prompt object
//     .then(({ name }) => {
//         this.emplyee = new Employee(name);
//     });
// };

module.exports = Roster;