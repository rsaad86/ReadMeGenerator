const generateReadme = readmeData => {
  return `
# This is a readme test 
Project Name: ${readmeData.project}  
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  `;
};

module.exports = generateReadme;
