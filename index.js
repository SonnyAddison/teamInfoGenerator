//Import mode packages and files
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("util");
const generateHTML = require("./assets/utils/generateHTML");
const managerQuestions = require("./assets/utils/managerQuestions");
const employQuestions = require("./assets/utils/employeeQuestions");

const writeFileAsync = utils.promisify(fs.writeFile);

class Employee {
    constructor() {
        this.manager = {
            name: "",
            id: "",
            email: "",
            officeNumber: ""
        }
        this.engineer = {
            name: "",
            id: "",
            email: "",
            github: ""
        }
        this.intern = {
            name: "",
            id: "",
            email: "",
            school: ""
        }
    }
    start() {  
        inquirer.prompt(managerQuestions).then(answers => {
            this.manager.name = answers.name;
            this.manager.id = answers.id;
            this.manager.email = answers.email;
            this.manager.officeNumber = answers.officeNumber;
        }).then(() => {
            inquirer.prompt([   
                {
                    type: "confirm",
                    name: "confirm",
                    message: "Do you want to add another employee?",
                    default: true
                }
            ]).then(val => {
                if (val.confirm) {
                    this.enter();
                } else {
                    this.quit();
                }
            });
        }).catch(err => {
            console.log(err);
        });
    }
    enter() {
        inquirer.prompt (employQuestions).then((answers) => {
            if (answers.role === 'engineer') {  
                this.engineer.name = answers.enName;
                this.engineer.id = answers.id;
                this.engineer.github = answers.github;
                this.engineer.email = answers.enEmail;
            } else {
                this.intern.name = answers.inName;
                this.intern.id = answers.id;
                this.intern.email = answers.inEmail;
                this.intern.school = answers.school;
            }
        }).then(() => {
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "confirm",
                    message: "Do you want to add another employee?",
                    default: true,
                }
            ]).then(val => {
                if (val.confirm) {
                    this.enter();
                } else {
                    this.quit();
                }
            });
        }).catch(err => {
            console.log(err);
        });
    }        
    quit() {
        console.log("Goodbye!");
        console.log("Generating your team successfully!");
        process.exit();
    }
}

const init = async() => {
    try {
        const employee = new Employee();
        employee.start();       
        await writeFileAsync("index.html", generateHTML(employee));
    } catch (err) {console.log(err);}
}

init ();
