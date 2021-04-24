const generateReadme = readmeData => {
  console.log("I am inside the generate readme!!!!!!!!!!!!!!");
  console.log(readmeData);
  console.log(readmeData.email);
  console.log(readmeData.license[1]);
  return `
# This is a readme test 

## Table of Contents:

### Another Test

>Project Name: ${readmeData.project}, 

>Project Description: ${readmeData.description},

>>Installation Guide: ${readmeData.installation},

>Usage: ${readmeData.usage},

>Contribution Guidelines: ${readmeData.contribution},

>Test Methods: ${readmeData.test},

>License: ${readmeData.license},

>Github Username: ${readmeData.github},

>Email: ${readmeData.email}

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  `;
};

module.exports = generateReadme;
