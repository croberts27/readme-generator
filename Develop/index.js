// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
function writeToFile(answers) {
    const template = fs.readFileSync('readme-template.md', 'utf8');
    const { title, description, install, usage, tableOfContents, credits, license } = answers;
    const readmeContent = template
      .replace('{title}', title)
      .replace('{description}', description)
      .replace('{install}', install)
      .replace('{usage}', usage)
      .replace('{tableOfContents}', tableOfContents)
      .replace('{credits}', credits)
      .replace('{license}', license)
      .replace('{licenseBadge}', renderLicenseBadge(license)); // Added this line for badge to show up
  
    return readmeContent;
  }
  

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = writeToFile(answers);
      fs.writeFileSync('README.md', readmeContent);
      console.log('README.md generated successfully!');
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
