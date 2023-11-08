// TODO: Include packages needed for this application
var fs = require('fs');
var prompt = require('prompt-sync')();

// TODO: Create an array of questions for user input
const questions = ["Title?", "Description?", "Install Instructions?", "Usage Information?", "Contribution Guidelines?","Test Instructions?"];
const name = prompt("file Name?: ");
const licenses = ["Apache", " Boost", " ISC"," MIT"]  
var badgeName;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.appendFileSync(fileName +".md", data, function (err) {
    if (err) throw err;
    console.log('added!');
  });
}

// TODO: Create a function to initialize app
function init() {

    var badge = licenseBadge();
    writeToFile(name, badge +"\n");

    const title = prompt(questions[0]+": ");
    writeToFile(name, "# "+ title + "\n");//create title

    userQuestions(name);

    licenseSection();

    queestionsSection();
}

// Function call to initialize app
init();

function queestionsSection(){
    var githubUsername = prompt("Enter GitHub username:")
    writeToFile(name, "## Questions?: \n"+"https://github.com/"+ githubUsername+"\n");

    var email = prompt("Enter Email:");
    writeToFile(name, "\n Or contact me at: " + email +"\n");
}

function licenseSection(){
    writeToFile(name, "## License: \n"+"This project is licensed under the "+ badgeName+" License \n")

}

function licenseBadge(){
    console.log("Select a liscense: "+ licenses);
    var badgeSelection = prompt();
    var lcBadgeSelection = badgeSelection.toLocaleLowerCase();
    if (lcBadgeSelection == "apache"){
        badgeName = "Apache";
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    if (lcBadgeSelection == "boost"){
        badgeName = "Boost";
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
    if (lcBadgeSelection == "isc"){
        badgeName = "ISC";
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    }
    if (lcBadgeSelection == "mit"){
        badgeName = "MIT";
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else{
        console.log("invalid input, try again");
        licenseBadge();
    }
}

function userQuestions(){
    
    //add table of contents here
    writeToFile(name, "## Table of Contents: \n");
    writeToFile(name, "1. [Description](#description) \n");
    writeToFile(name, "2. [Install Instructions](#install-instructions) \n");
    writeToFile(name, "3. [Usage Information](#usage-information) \n");
    writeToFile(name, "4. [Contribution Guidelines](#contribution-guidelines) \n");
    writeToFile(name, "5. [Test Instructions](#test-instructions) \n");
    writeToFile(name, "6. [License](#license) \n");
    writeToFile(name, "7. [Questions](#questions) \n");


    const description = prompt(questions[1]+": ");
    writeToFile(name, "## Description: \n"+ description + "\n");

    const installInst = prompt(questions[2]+": ");
    writeToFile(name, "## Install Instructions: \n"+ installInst + "\n");

    const usageInfo = prompt(questions[3]+": ");
    writeToFile(name, "## Usage Information: \n"+ usageInfo + "\n");

    const contributionGuidelines = prompt(questions[4]+": ");
    writeToFile(name, "## Contribution Guidelines: \n"+ contributionGuidelines + "\n");

    const testInstructions = prompt(questions[5]+": ");
    writeToFile(name, "## Test Instructions: \n"+ testInstructions + "\n");
}