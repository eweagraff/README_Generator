const generateMarkdown = (answers) =>
  `
# Title of Project: ${answers.name}
## Table of Contents: ${answers.tableofcontents}
## Description : ${answers.description}
## Installation: ${answers.installation}
## Acknowledgements: ${answers.acknowledgments}
## Contact: ${answers.contact}
## License: ${answers.license}
`;

module.exports = generateMarkdown;

//include all the licenses in an if/else statement
//function renderLicenseBadge
