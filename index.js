const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      message: "Title of Project:",
      name: "title",
    },
    {
      type: "input",
      message: "Description:",
      name: "description",
    },
    {
      type: "input",
      message: "Installation instructions:",
      name: "install",
    },
    {
      type: "input",
      message: "Usage:",
      name: "usage",
    },
    {
      type: "input",
      message: "Credits:",
      name: "credits",
    },
    {
      type: "list",
      message: "License:",
      name: "license",
      choices: ["MIT", "Mozilla", "Apache", "Eclipse", "None"],
    },
    {
      type: "input",
      message: "Tests:",
      name: "tests",
    },
    {
      type: "input",
      message: "Contact for Questions:",
      name: "questions",
    },
    {
      type: "input",
      message: "GitHub User Name:",
      name: "gitHub",
    },
  ])
  .then((response) => {
    console.log(response);
    const README = generateMarkdown(response);

    fs.writeFile("README.md", README, (err) => {
      err ? console.error(err) : console.log("Success");
    });
  });
