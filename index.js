const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      message: "List your table of contents",
      name: "tableofcontents",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project",
    },
    {
      type: "input",
      message: "What are the requirements to run your application?",
      name: "installation",
    },
    {
      type: "input",
      message:
        "Who would you like to acknowledge in helping with your project?",
      name: "acknowledgments",
    },
    {
      type: "input",
      message: "What is your contact information?",
      name: "contact",
    },
    {
      type: "list",
      name: "license",
      message: "Which license did you use for your project",
      choices: ["MIT", "Mozilla", "Apache"],
    },
  ]);
};

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync("README.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

init();
