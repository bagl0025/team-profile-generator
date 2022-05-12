const fs = require('fs');

function generateRoster(employees) {
    for (let i = 0; i <= employees.length; i++) {
        // first element in array is manager
        // create html head and create manager card
        if (i === 0) {
            makeHead();
            makeCard(employees,i);
        }
        // the rest of the array is emplyees
        else if (i < employees.length) {
            makeCard(employees,i);
        }
        // no more employees, create html end
        else {
            makeBottom();
        }
    }
} //end generateRoster

function makeHead() {
    const head = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Staatliches&display=swap" rel="stylesheet">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-info text-white mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    
    fs.writeFile("./dist/index.html", head, (err) => {
        if (err) {
            console.log(err);
            return;
        };
    });
}

function makeBottom() {
    const bottom = `  
    </body>
    </html>`;
    
    fs.appendFile("./dist/index.html", bottom, (err) => {
        if (err) {
            console.log(err);
            return;
        };
    });
}
// no css needed, all styling done with bootstrap classes
function makeCard(employees,i) {
    var uniqueInfo = "";
    if (employees[i].role === "Manager") {
        const {name, id, email, officeNumber, role} = employees[i];
        uniqueInfo = "Office Number:";
        genCard(name,id,email,officeNumber,role,uniqueInfo);
    }
    else if (employees[i].role === "Engineer") {
        const {name, id, email, github, role} = employees[i];
        uniqueInfo = 'GitHub: <a href="http://github.com/' + github + '">' + github + '</a>';
        const dummyVar = "";
        genCard(name,id,email,dummyVar,role,uniqueInfo);
    }
    else {
        const {name, id, email, school, role} = employees[i];
        uniqueInfo = "School:";
        genCard(name,id,email,school,role,uniqueInfo);
    }
    function genCard(name,id,email,other,role,uniqueInfo) {
        let card = `  
        <div class="col-12 col-md-6 col-xl-3 mb-3">
            <div class="card">
                <h4 class="card-header bg-warning text-dark">${name}
                <p>${role}</p>
                </h4>
                <div class="p-3 bg-light">
                    <p>ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>${uniqueInfo} ${other}</p>
                </div>
            </div>        
        </div>`;
        
        fs.appendFile("./dist/index.html", card, (err) => {
            if (err) {
                console.log(err);
                return;
            };
        });
    }
}

module.exports = generateRoster;