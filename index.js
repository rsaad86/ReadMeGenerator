const inquirer = require("inquirer");
// const generatePage = require("./README.md");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "project",
      message: "What is the name of your project? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide instructions on how to use this generator",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please provide contribution guidelines",
    },
    {
      type: "input",
      name: "test",
      message: "Please provide instructions on how to test this generator",
    },
  ]);
};

promptUser();
