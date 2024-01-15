// TODO: Create a function that returns a license badge based on which license is passed in



// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Return the License section of markdown
  if (license) {
  return`
  Licensed under the https://choosealicense.com/licenses/${license}/license.
  `;
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return`## License

${renderLicenseBadge(license)}
${renderLicenseLink(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Content

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

You can reach me at my email; ${data.email}
Or you can find me at github; https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
