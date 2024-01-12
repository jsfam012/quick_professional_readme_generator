






const generateMarkdown = require('.utils/generateMarkdown.js');
// TODO: Include packages needed for this application
const questions = require('./lib/questions.js');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) return console.log(err);

        console.log('Readme create sucessully!');
    });
}

inquirer.prompt(questions)
    .then((answersObj) => {
        const md = generateMarkdown(answersObj);
        
        // Create the Readme file
        writeToFile('./READ.md', md);
    });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
