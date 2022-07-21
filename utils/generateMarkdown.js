
// TODO: Create a function that returns a license badge based on which license is passed in

const Choice = require("inquirer/lib/objects/choice");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Eclipse") {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else {
    return `("Please enter a valid license")`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==="MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "Mozilla") {
    return `https://opensource.org/licenses/MPL-2.0`;
  } else if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "Eclipse") {
    return `https://opensource.org/licenses/EPL-2.0`;
  } else {
    return `("Please enter a valid license)`;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==="MIT") {
    return `This application is licensed by MIT`;
  } else if (license === "Mozilla") {
    return `This application is licensed by Mozilla`;
  } else if (license === "Apache") {
    return `This application is licensed by Apache`;
  } else if (license === "Eclipse") {
    return `This application is licensed by Apache`;
  } else {
    return `("Please enter a valid license)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(mystuff) {
  return `   # ${mystuff.title} ${renderLicenseBadge(mystuff.license)}
   ## Description
   ${mystuff.description}
   ## Table of Contents
-[Installation](#installation)\n
-[Usage](#usage)\n
-[License](#license)\n
-[Credits](#credits)\n
-[Tests](#tests)\n
-[Questions](#questions)
   ## Installation
   ${mystuff.install}
   ## Usage
   ${mystuff.usage}
   ## License 
   ${renderLicenseLink(mystuff.license)}
   ## Credits 
   ${mystuff.credits}
   ## Tests 
   ${mystuff.tests}
   ## Questions 
   Email: ${mystuff.questions}\n
   ## GitHub User 
   ${mystuff.gitHub}: https://github.com/${mystuff.gitHub}



`;
}

module.exports = generateMarkdown;
