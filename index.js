const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Hello, Please enter your project name!",
  },
  {
    type: "input",
    name: "description",
    message: "Please give me a description about your project!",
  },
  {
    type: "list",
    name: "license",
    message:
      "If your READ.me is large enough please give me some items I can arrange into a table of contents!",
    choices: ["MIT", "BSD", "GNU", "None"],
  },
  {
    type: "input",
    name: "installation",
    message:
      "What installations or tools required to are used in this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the uses of this project?",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Please list other collaborators that helped you in this project with links to there github profile! Also any third-party assets that require attribution. Finally any tutorials please include the link to them as well.",
  },
  {
    type: "input",
    name: "features",
    message: "Now list the features this project has!",
  },
  {
    type: "input",
    name: "contribution",
    message: "How can a user contribute to this project?",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Finally, how can we test this application to make sure everything runs smoothly?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const myREADME = generateMarkdown(data);
    fs.writeFileSync("./output/README.md", myREADME);
  });
}

init();



//get the table of contents working 
//video 