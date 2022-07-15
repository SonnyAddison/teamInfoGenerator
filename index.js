//Import mode packages and files
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const questions = require('./assets/qusetionsAsked');
const generateHTML = require('./assets/generateHTML');

const writeFileAsync = util.promisify(fs.writeFile);

//fucntiont to inintat the app
const init = async () => {
    try {
        const relpy = await inquirer.prompt(questions);
        let readMeInfo = generateHTML(relpy);
        await writeFileAsync('./index.html', readMeInfo);
    } catch (err) {
        console.log(err);
    }
}

//function to start the app
init();
