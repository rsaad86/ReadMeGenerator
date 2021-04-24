const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./src/readmeTemplate.js");
// const { writeFile, copyFile } = require("./utils/generate-readme");

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
    {
      type: "checkbox",
      name: "license",
      message: "Choose one of the following licenses",
      choices: [
        "ISC",
        "MIT",
        "BSD",
        "Apache 2.0",
        "GNU General Public License V3.0",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "Please provide your GitHub Username (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your Github Username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email",
    },
  ]);
};

const writeFile = readmePage => {
  console.log(readmePage);
  return fs.writeFileSync("Readme.md", readmePage);
};

promptUser()
  .then(readmeData => {
    console.log(readmeData);
    return generateReadme(readmeData);
  })
  .then(readmePage => {
    return writeFile(readmePage);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

// promptUser();
