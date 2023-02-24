const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const companyEmployees = [];

const managerQuestions = [
    {
        type:"input",
        message: "What is the managers name?",
        name: "managerName",
    },
    {
        type:"input",
        message: "What is the managers ID?",
        name: "managerID",
    },
    {
        type:"input",
        message: "What is the managers email?",
        name: "managerEmail",
    },
    {
        type:"input",
        message: "What is the managers office number?",
        name: "managerOfficeNumber",
    },
];

const staffOptions = {
    type: "list",
    message: "What type of team member would you like to add next?",
    name: "option",
    choices: [
        "Engineer",
        "Intern",
        "Finished building the team",
    ],
};

const engineerQuestions = [
    {
        type:"input",
        message: "What is the Engineers name?",
        name: "engineerName",
    },
    {
        type:"input",
        message: "What is the Engineers ID?",
        name: "engineerID",
    },
    {
        type:"input",
        message: "What is the Engineers email?",
        name: "engineerEmail",
    },
    {
        type:"input",
        message: "What is the Engineers GitHub name?",
        name: "engineerGithub",
    },
]

const internQuestions = [
    {
        type:"input",
        message: "What is the Intern's name?",
        name: "internName",
    },
    {
        type:"input",
        message: "What is the Intern's ID?",
        name: "internID",
    },
    {
        type:"input",
        message: "What is the Intern's email?",
        name: "internEmail",
    },
    {
        type:"input",
        message: "Which school does the Intern attend?",
        name: "internSchool",
    },
];


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([{
    managerQuestions
}]).then(response => {
    // populate manager info
    // promptForNexEMployee ()
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        staffOptions
    }]).then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        engineerQuestions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        internQuestions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
    // need to do fs.writefile after cheking if the file exists or not
    // file location >> ("./src/page-template.js")
};
