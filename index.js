const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Please describe your project',
        name: 'description'
    },

    {
        type: 'input',
        message: 'How can users install this applicaton',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'What is the primary usage of this application',
        name: 'usage'
    },

    {   
        type: 'list',
        message: 'What type of license do you want to use',
        name: 'license',
        choices: ['mit', 'gpl-3.0', 'n/a']
    },
   
    {
        type: 'input',
        message: 'How should other developers contribute to this application',
        name: 'contribution'
    },

    {
        tyep: 'input',
        message: 'Any test instructions',
        name: 'tests'
    },
    
    {  
        type: 'input',
        message: 'Enter your email',
        name: "email"
    },

    {
        type: 'input',
        message: 'Enter github user name',
        name: "github"
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
        if(answersObj.license === 'n/a'){
            answersObj.license = null;
        }
        const md = generateMarkdown(answersObj);

        // Create the Readme file
        writeToFile('README.md', md);
    });

}

// Function call to initialize app
init();
