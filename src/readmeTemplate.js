const generateReadme = readmeData => {
  var section1 = "";
  var section2 = "";
  var licenceInformation = "";
  var licenceLogo = "";
  var questions = "";
  var licenceKey = "";

  var licences = {
    Boost:
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    MIT:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0":
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU General Public License V3.0":
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    BSD:
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  };

  questions = `  

    ### Questions
    <a name="questions"></a>
    
    >Github Username: [${readmeData.github}](https://github.com/rsaad86) 
    
    >Email: ${readmeData.email} 
    
    `;

  licenceInformation = `  ### License
    <a name="license"></a>

    >License: 
    *            ${readmeData.license}
    `;

  licenceKey = readmeData.license;
  licenceLogo = licences[licenceKey];

  section1 = `
  
    # README Generator 
  
    ## Table of Contents:
    [Description](#description)
    
    [Installation](#installation)
    
    [Usage](#usage)
    
    [Contribution](#contribution)
    
    [Test](#test)
    
    [License](#license)
    
    [Questions](#questions)
        
    `;

  section2 = `  
    
    ### Description
    <a name="description"></a>
    
    >Project Name: ${readmeData.project}
    
    >Project Description: ${readmeData.description}
    
    ### Installation
    <a name="installation"></a>
    
    >Installation Guide: ${readmeData.installation}
    
    ### Usage Guide
    <a name="usage"></a>
    
    >Usage: ${readmeData.usage}
    
    ### Contribution Guidelines
    <a name="contribution"></a>
    
    >Contribution Guidelines: ${readmeData.contribution}
    
    ### Test Methods
    <a name="test"></a>
    
    >Test Methods: ${readmeData.test}
    `;

  return (
    " " + licenceLogo + section1 + section2 + licenceInformation + questions
  );
};

module.exports = generateReadme;
