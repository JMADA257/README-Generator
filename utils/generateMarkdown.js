

//will call these inside of the generate markdown. 

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![Static Badge](https://img.shields.io/badge/MIT_License-blue)"
  } else if (license === "BSD") {
    return "![Static Badge](https://img.shields.io/badge/BSD_License-green)"
  } else if (license === "GNU") {
    return "![Static Badge](https://img.shields.io/badge/GNU_License-grey)"
    
  } else {
    return "![Static Badge](https://img.shields.io/badge/No_License_Chosen-red)"
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === "MIT") {
  return "[MIT LINK](https://opensource.org/license/mit/)"
  
} else if (license === "BSD") {
  
} else {

}



}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT" ) {
    return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  projectTitle,
  description,
  installation,
  usage,
  credits,
  badges,
  features,
  contribution,
  tests,
}) {
  return `
      # ${projectTitle}
      ## ${description}
      ## ${renderLicenseBadge(license)}
      ## ${installation}
      ## ${usage}
      ## ${credits}
      ## ${badges}
      ## ${features}
      ## ${contribution}
      ## ${tests}
  `;
}



module.exports = generateMarkdown;
