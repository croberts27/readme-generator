// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is your README title?",
  },
  {
    name: "description",
    type: "input",
    message: "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    name: "tableOfContents",
    type: "input",
    message: "If your README is long, consider adding a table of contents",
  },
  {
    name: "install",
    type: "input",
    message: "What are the steps required to install your project?",
  },
  {
    name: "usage",
    type: "input",
    message: "Provide instructions and examples for use.",
  },
  {
    name: "credits",
    type: "input",
    message: "List your collaborators, if any, and links to any third-party assets, tutorials, or documentation",
  },
  {
    name: "tests",
    type: "input",
    message: "Test Instructions:"
  },
  {
    name: "gitUsername",
    type: "input",
    message: "Github Username:"
  },
  {
    name: "email",
    type: "input",
    message: "Email Address:"
  },
  {
    name: "contribution",
    type: "input",
    message: "Contribution Guidelines:"
  },
  {
    name: "license",
    type: "list",
    message: "Please include the license you are using for your README",
    choices: [
        "Apache",
        "GNU",
        "MIT",
        "Creative Commons",
        "Boost"
    ]
  },
  
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 

}

const userInput = (answers) => {
  console.log(answers);
  writeToFile('README.md', generateMarkdown(answers));
}

function init() {
  inquirer
.prompt(questions).then(userInput);
}


// Function call to initialize app
init();
