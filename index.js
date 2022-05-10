const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

function runApp () {
    // save employees as object
    var employees = [];
    // complete set of questions
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
                name: 'office',
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
                type: 'list',
                name: 'employeeRole',
                message: "Select an employee role from the list.",
                choices: ['Engineer', 'Intern', 'Finish Roster']  
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
        ]
        // create subsets of questions for each role
        const managerQuestions = [...questions];
        managerQuestions.splice(5,2);
        const internQuestions = [...questions];
        internQuestions.splice(3,4,questions[6],questions[4]);
        const engineerQuestions = [...questions];
        engineerQuestions.splice(3,4,questions[5],questions[4]);

        console.log(managerQuestions);
        console.log(managerQuestions.length);
        console.log(internQuestions);
        console.log(internQuestions.length);
        console.log(engineerQuestions);
        console.log(engineerQuestions.length);

        if (employees.length === 0) {
            inquirer.prompt (managerQuestions);
        }
        // write to array
        // .then check role call next set of prompts
        
        // need genereate html
        // css styling
} // end runApp
runApp();
