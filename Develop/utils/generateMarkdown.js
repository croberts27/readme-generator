// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  else if (license === 'Creative Commons') {
    return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
  }
  else if (license === 'GNU') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'Boost') {
    return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return '(https://opensource.org/licenses/MIT)';
  }
  else if (license === 'Creative Commons') {
    return '(http://creativecommons.org/publicdomain/zero/1.0/)';
  }
  else if (license === 'GNU') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license === 'Apache') {
    return '(https://www.apache.org/licenses/LICENSE-2.0)';
  }
  else if (license === 'Boost') {
    return '(https://www.boost.org/users/license.html)';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT License') {
    return 'MIT License';
  }
  else if (license === 'Creative Commons') {
    return 'Creative Commons';
  }
  else if (license === 'GNU') {
    return 'GNU';
  }
  else if (license === 'Apache') {
    return 'Apache';
  }
  else if (license === 'Boost') {
    return 'Boost';
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}
  
  ## How to Contribute
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  GitHub Username: ${data.gitUsername}

  https://github.com/${data.gitUsername}

  You can reach me via email at ${data.email}.

`;
}

module.exports = generateMarkdown;
