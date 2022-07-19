const questions = [   
        {
            type: "input",
            name: "name",
            message: "Who is your team's manager?",
            validate: (input) => {
                if (input === "") {
                    return "Please enter a name";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is their employee ID?",
            validate: (input) => {if (isNaN(input)) {return 'Please enter a valid ID'} else {return true}}
        },
        {
            type: "input",
            name: "email",
            message: "What their email?",
            validate: (input) => {
                if (input.includes('@')) {
                    return true;
                } else {
                    return "Please enter a valid email";
                }
            }   
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Please enter a valid office number";
                } else {
                    return true;
                }
            }
        },
        {
            type: "list",
            name: "role",
            message: "Select a role?",
            choices: ["engineer", "intern", "exit",]
        },
        {
            when: (answers) => answers.role === 'engineer',
            type: "input",
            name: "enName",
            message: "What is your team's engieer's name?",
            validate: (input) => {
                if (input === "") {
                    return "Please enter a name";
                }
                return true;
            }
        },
        {
            when: (answers) => answers.role === 'engineer',
            type: "input",
            name: "id",
            message: "What is their employee ID?",
            validate: (input) => {if (isNaN(input)) {return 'Please enter a valid ID'} else {return true}}
        },         
        {
            when: (answers) => answers.role === 'engineer',
            type: 'input',
            name: 'github',
            message: 'What is their Github username?',
            validate: (input) => {
                if (input.length > 0) {
                    return true;
                } else {
                    return 'Please enter a valid Github username';
                }
            }        
        },
        {
            when: (answers) => answers.role === 'engineer',
            type: 'input',
            name: 'enEmail',
            message: 'What is their email?',
            validate: (input) => {
                if (input.includes('@')) {
                    return true;
                } else {
                    return 'Please enter a valid email';
                }
            }
        },
        {
            when: (answers) => answers.role === 'intern',
            type: "input",
            name: "id",
            message: "What is their employee ID?",
            validate: (input) => {if (isNaN(input)) {return 'Please enter a valid ID'} else {return true}}
        },
        {
            when: (answers) => answers.role === 'intern',
            type: "input",
            name: "inName",
            message: "What is your team's intern's name?",
            validate: (input) => {
                if (input === "") {
                    return "Please enter a name";
                }
                return true;
            }
        },
        {
            when: (answers) => answers.role === 'intern',
            type: 'input',
            name: 'inEmail',
            message: 'What is their email?',
            validate: (input) => {
                if (input.includes('@')) {
                    return true;
                } else {
                    return 'Please enter a valid email';
                }
            }
        },
        {
            when: (answers) => answers.role === 'intern',
            type: 'input',
            name: 'school',
            message: 'What is your school?',
            validate: (input) => {
                if (input.length > 0) {
                    return true;
                } else {
                    return 'Please enter a valid school';
                }
            }
        }
 
    ]
    module.exports = questions;

