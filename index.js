const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this application?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Please describe your application',
        name: 'description'
    },

    {
        type: 'input',
        message: 'How can you install this applicaton',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'How can I use this application',
        name: 'usage'
    },

    {
        type: 'input',
        message: 'Did anyone contribute to this application',
        name: 'contribution'
    },

    {
        tyep: 'input',
        message: 'How do you run test',
        name: 'test'
    },

    {
        
    }







];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) return console.log(err);

        console.log('READme create sucessully!');
    });
}



// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((answersObj) => {
        console.log(answersObj);
        const md = generateMarkdown(answersObj);

        // Create the Readme file
        writeToFile('README.md', md);
    });

}

// Function call to initialize app
init();
