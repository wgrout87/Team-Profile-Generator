const inquirer = require("inquirer");
const { writeFile } = require("./utils/write-file");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");



const questions = {
    manager: {
        name: "Please enter the manager's name.",
        officeNumber: "What is the manager's office number?"
    },
    engineer: {
        name: "Please enter the engineer's name.",
        github: "What is the engineer's GitHub username?"
    },
    intern: {
        name: "Please enter the intern's name.",
        school: "What is the intern's school?"
    },
    email: "What is this employee's email address?",
    id: "What is this employee's ID?",
    staff: "Would you like to add additional staff?",
    answerValidate: "Please provide a valid answer."
};

function init() {
    return inquirer.prompt([
        {
            // Prompt to retrieve the manager's name
            type: "input",
            name: "name",
            message: questions.manager.name,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        },
        {
            // Prompt to retrieve the employee's ID
            type: "input",
            name: "id",
            message: questions.id,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        },
        {
            // Prompt to retrieve the employee's email
            type: "input",
            name: "email",
            message: questions.email,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        },
        {
            // Prompt to retrieve the manager's office number
            type: "input",
            name: "officeNumber",
            message: questions.manager.officeNumber,
            validate: oNInput => {
                if (oNInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        }
    ])
};

function generateManager (name, id, email, officeNumber) {
    let manager = new Manager(name, id, email, officeNumber);
    return {
        addStaff: null,
        staffArray: [manager]
    };
};

function generateEngineer (name, id, email, github, dataObj) {
    let engineer = new Engineer(name, id, email, github);
    dataObj.staffArray.push(engineer);
    return dataObj;
};

function generateIntern (name, id, email, school, dataObj) {
    let intern = new Intern(name, id, email, school);
    dataObj.staffArray.push(intern);
    return dataObj;
};

function addStaff(dataObj) {
    return inquirer.prompt([
        {
            // Prompt to determine if more staff should be added
            type: "list",
            name: "addStaff",
            message: questions.staff,
            choices: ["Engineer", "Intern", "No"]
        }
    ])
    .then(answerObj => {
        if(answerObj.addStaff === "Engineer") {
            return addEngineer(dataObj);
        }

        else if (answerObj.addStaff === "Intern") {
            return addIntern(dataObj);
        }
        else {
            return dataObj;
        }
    })
};

function addEngineer(dataObj) {
    return inquirer.prompt([
        {
            // Prompt to retrieve the engineer's name
            type: "input",
            name: "name",
            message: questions.engineer.name,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        },
        {
            // Prompt to retrieve the employee's ID
            type: "input",
            name: "id",
            message: questions.id,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        },
        {
            // Prompt to retrieve the employee's email
            type: "input",
            name: "email",
            message: questions.email,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        },
        {
            // Prompt to retrieve the engineer's GitHub username
            type: "input",
            name: "github",
            message: questions.engineer.github,
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        }
    ])
    .then(data => {
        return generateEngineer(data.name, data.id, data.email, data.github, dataObj)
    })
    .then(data => {
        return addStaff(data);
    })
};

function addIntern(dataObj) {
    return inquirer.prompt([
        {
            // Prompt to retrieve the intern's name
            type: "input",
            name: "name",
            message: questions.intern.name,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        },
        {
            // Prompt to retrieve the employee's ID
            type: "input",
            name: "id",
            message: questions.id,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        },
        {
            // Prompt to retrieve the employee's email
            type: "input",
            name: "email",
            message: questions.email,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        },
        {
            // Prompt to retrieve the intern's school
            type: "input",
            name: "school",
            message: questions.intern.school,
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log(questions.answerValidate);
                    return false;
                }
            }
        }
    ])
    .then(data => {
        return generateIntern(data.name, data.id, data.email, data.school, dataObj)
    })
    .then(data => {
        return addStaff(data);
    })
};

// Function call to initialize app
init()
    .then(answersObj => generateManager(answersObj.name, answersObj.id, answersObj.email, answersObj.officeNumber))
    .then(addStaff)
    .then(data => generatePage(data))
    .then(md => writeFile(md))
    .then(response => {
        console.log(response.message)
    })
    .catch(err => {
        console.log(err);
    });