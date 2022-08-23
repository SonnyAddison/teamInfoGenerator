const managerQuestions = [
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
        validate: (input) => {
            if (isNaN(input)) {
                return 'Please enter a valid ID';
            } else {
                return true}}
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
]

module.exports = managerQuestions;
