const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const generateRoster = require('./src/generateRoster');

// create employee array
var employees = [];

function runApp () {
    // complete set of questions. I will create subsets later.
    // this has basic validation to prevent skipping question, but
    // it won't verify email etc.
    const questions = [
        {
            type: 'text',
            name: 'name',
            message: "Enter the employee's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter employee's name.");
                    return false; 
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: "Enter the employee's id.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ("Enter an id.");
                    return false; 
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "Enter the employee's email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ("Enter an email adress.");
                    return false; 
                }
            }
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: "Enter employee's office number.",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log ("Enter an office number.");
                    return false; 
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: "Enter the engineer's GitHub user name.",
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } 
                else {
                    console.log ("Enter a GitHub user name.");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: "Enter the intern's school name.",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } 
                else {
                    console.log ("Enter an school name.");
                    return false;
                }
            }
        }
    ] // end of question block

    // create subsets of questions for each role
    const managerQuestions = [...questions];
    managerQuestions.splice(4,2);
    const internQuestions = [...questions];
    internQuestions.splice(3,4,questions[5]);
    const engineerQuestions = [...questions];
    engineerQuestions.splice(3,4,questions[4]);

    // if the array is empty it's the first run, so it's manager
    if (employees.length === 0) {
        addManager();
    }
    else {
        pickRole();
    }

    function pickRole () {
        return inquirer.prompt ([
            {
                type: 'list',
                name: 'employeeRole',
                message: "Select an employee role from the list.",
                choices: ['Engineer', 'Intern', 'Finish Roster']  
            }
        ])
        .then(answers => {
            if (answers.employeeRole === "Engineer") {
                addEngineer();
            } 
            else if (answers.employeeRole === "Intern") {
                addIntern();
            }
            else {
                generateRoster(employees);
                return false;
            }
        });    
    }

    // these 3 functions are very similar. If I have time, try to combine into 1.
    function addManager () {
        return inquirer.prompt (managerQuestions)
        .then(answers => {
            // objectify
            const  { name, id, email, officeNumber} = answers; 
            const manager = new Manager (name, id, email, officeNumber);
            manager.role = manager.getRole();
            employees.push(manager);
            pickRole();
        }); 
    }

    function addEngineer () {
        return inquirer.prompt (engineerQuestions)
        .then(answers => {
            // objectify
            const  { name, id, email, github} = answers; 
            const engineer = new Engineer (name, id, email, github);
            engineer.role = engineer.getRole();
            employees.push(engineer);
            pickRole();
        }); 
    }

    function addIntern () {
    return inquirer.prompt (internQuestions)
        .then(answers => {
        // objectify
        const  { name, id, email, school} = answers; 
        const intern = new Intern (name, id, email, school);
        intern.role = intern.getRole();
        employees.push(intern);
        pickRole();
        });
    }
} // end runApp
runApp();

module.exports = employees;
