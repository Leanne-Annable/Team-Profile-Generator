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
        type: "input",
        message: "What is the managers name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the managers ID?",
        name: "managerID",
    },
    {
        type: "input",
        message: "What is the managers email?",
        name: "managerEmail",
    },
    {
        type: "input",
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
        type: "input",
        message: "What is the Engineers name?",
        name: "engineerName",
    },
    {
        type: "input",
        message: "What is the Engineers ID?",
        name: "engineerID",
    },
    {
        type: "input",
        message: "What is the Engineers email?",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is the Engineers GitHub name?",
        name: "engineerGithub",
    },
]

const internQuestions = [
    {
        type: "input",
        message: "What is the Intern's name?",
        name: "internName",
    },
    {
        type: "input",
        message: "What is the Intern's ID?",
        name: "internID",
    },
    {
        type: "input",
        message: "What is the Intern's email?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "Which school does the Intern attend?",
        name: "internSchool",
    },
];


// TODO: Write Code to gather information about the development team members, and render the HTML file.
function startManager() {
    // populate manager info
    inquirer.prompt(managerQuestions).then((response) => {
        companyEmployees.push(
            new Manager(
                response.managerName,
                response.managerID,
                response.managerEmail,
                response.managerOfficeNumber,
            )
        );
        // prompt for next employee
        promptForNextEmployee();       
    });
};

// use if statements to check which option is selected, then activate the relevant function
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
function promptForNextEmployee() {
    inquirer.prompt(staffOptions).then((response) => {
        if (response.option === "Engineer"){
            promptForEngineer();
        } else if (response.option === "Intern"){
            promptForIntern();
        } else {
            console.log("Building your team page now.")
            // buildPage();
            if (!fs.existsSync(OUTPUT_DIR)){
                fs.mkdirSync(OUTPUT_DIR);
            };
            // checks for error codes and notifies user
            fs.writeFile(outputPath, render(companyEmployees), (err) =>
            err ? console.log(err) : console.log("Employees Added")
            );
        };

    });
};

function promptForEngineer() {
    inquirer.prompt(engineerQuestions).then((response) => {
        // add new engineer to employees array
        companyEmployees.push(
            new Engineer(
                response.engineerName,
                response.engineerID,
                response.engineerEmail,
                response.engineerGithub,
            )
        );
        // console.log("Engineer created!")
        promptForNextEmployee();        
    });
};

function promptForIntern() {
    inquirer.prompt(internQuestions).then((response) => {
        // add new intern to employees array
        companyEmployees.push(
            new Intern(
                response.internName,
                response.internID,
                response.internEmail,
                response.internSchool,
            )
        );
        promptForNextEmployee();
    });
};

// function buildPage() {
//     // need to do fs.writefile after cheking if the file exists or not
//     // file location >> render = ("./src/page-template.js")
//     if (!fs.existsSync(OUTPUT_DIR)){
//         fs.mkdirSync(OUTPUT_DIR);
//     };
//     // checks for error codes and notifies user
//     fs.writeFile(outputPath, render(companyEmployees), (err) =>
//     err ? console.log(err) : console.log("Employees Added")
//     );
// };

// call the manager function to start the process
startManager();