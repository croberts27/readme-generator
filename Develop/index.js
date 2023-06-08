// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        name:"title",
        type:"input",
        message:"What is your READEME title?", 
    },
    {
        name:"description",
        type:"input",
        message:"Provide a short description explaining the what, why, and how of your project.",
    },
    {
        name:"tableOfContents",
        type:"input",
        message:"If your README is long, consider adding a table of contents"
    },
    {
        name:"install",
        type:"input",
        message:"What are the steps required to install your project?"
    },
    {
        name:"usage",
        type:"input",
        message:"Provide instructions and examples for use."
    },
    {
        name:"credits",
        type:"input",
        message:"List your collaborators, if any, and links to any third-party assets, tutorials, or documentation"
    },
    {
        name:"license",
        type:"input",
        message:"Please include the license you are using for your README"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data,) {
}

inquirer
    .prompt(questions)
    .then(writeToFile)

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
