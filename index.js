// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a Description for your Project',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Enter Installation Instructions',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter Usage details',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose License type from following (PICK ONE ONLY)',
        choices: ['Apache', 'MIT', 'BSD 3', 'Unlicense', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter Contributors',
        name: 'cont',
    },
    {
        type: 'input',
        message: 'Enter Test instructions',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter E-mail plus additional contact instructions',
        name: 'email',
    },
]
// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile(README, data, (err) =>
    err ? console.error(err) : console.log('README sucessfully generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const markdownText = generateMarkdown(answers);
        writeToFile('README-gen.md', markdownText);
    });
}

// Function call to initialize app
init();
