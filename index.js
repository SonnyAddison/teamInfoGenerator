//Import mode packages and files
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHTML = require("./assets/utils/generateHTML");
const questions = require('./assets/utils/questions');

const writeFileAsync = util.promisify(fs.writeFile);

//fucntiont to inintat the app
const init = async() => {
    try {
        const reply = await inquirer.prompt(questions);
        let readMeInfo = generateHTML(reply);
        await writeFileAsync("index.html", readMeInfo);
        console.log("Successfully wrote to index.html");   
        } catch (err) {
    console.log(err);
    }
}


//function to start the app
init();
