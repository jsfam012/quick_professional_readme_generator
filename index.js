const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'Title'
    },

    {
        type: 'input',
        message: 'Please describe your project',
        name: 'Description'
    },

    {
        type: 'input',
        message: 'Do you want to create table of contents',
        name: 'Table of contents'
    },

    {
        type: 'input',
        message: 'How can users install this applicaton',
        name: 'Installation'
    },

    {
        type: 'input',
        message: 'What is the primary usage of this application',
        name: 'Usage'
    },

    {   
        type: 'input',
        message: 'What type of license do you want to use',
        name: 'License'
    },
   
    {
        type: 'input',
        message: 'Did anyone contribute to this application',
        name: 'Contribution'
    },

    {
        tyep: 'input',
        message: 'Any test instructions',
        name: 'Tests'
    },
    
    {  
        type: 'input',
        message: 'How can users ask any questions about this application',
        name: "Questions"
    },








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
