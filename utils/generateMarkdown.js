//will call these inside of the generate markdown.

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![Static Badge](https://img.shields.io/badge/MIT_License-blue)";
  } else if (license === "BSD") {
    return "![Static Badge](https://img.shields.io/badge/BSD_License-green)";
  } else if (license === "GNU") {
    return "![Static Badge](https://img.shields.io/badge/GNU_License-grey)";
  } else {
    return "![Static Badge](https://img.shields.io/badge/No_License_Chosen-red)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT LINK](https://opensource.org/license/mit/)";
  } else if (license === "BSD") {
    return "[BSD LINK](https://opensource.org/license/bsd-3-clause/)";
  } else {
    return "[GNU LINK](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "The MIT license is a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
  } else if (license === "BSD") {
    return "BSD licenses are a low restriction type of license for open source software that does not put requirements on redistribution. As a low restriction and requirement license type, Berkeley Source Distribution (BSD) licenses are used for the distribution of many freeware, shareware and open source software";
  } else if (license === "GNU") {
    return "The GNU General Public License (GNU, GPL, or GPL) is a free software license originally written by Richard Stallman of the Free Software Foundation, which guarantees that users are free to use, share, and modify the software without paying anyone for it.";
  } else {
    return "You did not choose a license for this project!";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  projectTitle,
  description,
  license,
  installation,
  usage,
  credits,
  features,
  contribution,
  tests,
}) {
  return `
#  ${"1. Title"}
## ${projectTitle}
# ${"2. description"}
## ${description}
# ${"3. Badges Used"}
## ${renderLicenseBadge(license)}
# ${"4. installation"}
### ${installation}
# ${"5. usage"}
### ${usage}
# ${"6. credits"}
### ${credits}
# ${"7. License Info"}
### ${renderLicenseSection(license)}
### ${renderLicenseLink(license)}
# ${"8. features"}
### ${features}
# ${"9. contribution"}
### ${contribution}
# ${"10. tests"}
### ${tests}
  `;
}

module.exports = generateMarkdown;
