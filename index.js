// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
      choices: ["MIT", "BSD", "GNU"],
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
      message: "What are the uses of this project?", // maybe put these into a list?
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
      message: "Now list the features this project has!", //another list for this?
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
  ])
  .then((data) => {
    console.log(data);
    const myREADME = generateMarkdown(data);
    fs.writeFileSync("./output/README.md", myREADME);
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
