const employQuestions = [
    {
        type: "list",
        name: "role",
        message: "Select a role?",
        choices: ["Engineer", "Intern"]
    },
    {
        when: (answers) => answers.role === 'Engineer',
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
        when: (answers) => answers.role === 'Engineer',
        type: "input",
        name: "id",
        message: "What is their employee ID?",
        validate: (input) => {if (isNaN(input)) {return 'Please enter a valid ID'} else {return true}}
    },         
    {
        when: (answers) => answers.role === 'Engineer',
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
        when: (answers) => answers.role === 'Engineer',
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
        when: (answers) => answers.role === 'Intern',
        type: "input",
        name: "enName",
        message: "What is your team's intern's name?",
        validate: (input) => {
            if (input === "") {
                return "Please enter a name";
            }
            return true;
        }
    },
    {
        when: (answers) => answers.role === 'Intern',
        type: "input",
        name: "id",
        message: "What is their employee ID?",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a valid ID";
            } else {
                return true;
            }
        }
    },
    {
        when: (answers) => answers.role === 'Intern',
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
        when: (answers) => answers.role === 'Intern',
        type: "input",
        name: "school",
        message: "What is their school?",
        validate: (input) => {
            if (input === "") {
                return "Please enter a school";
            }
            return true;
        }
    },
];

module.exports = employQuestions;

