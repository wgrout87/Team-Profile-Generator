const inquirer = require("inquirer");
const { writeFile } = require("./utils/write-file");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");



// Object containing the questions that the user will be prompted to answer
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

// First function to be called - creates a manager object and the object that will be the primary piece of data used to generate the whole team
function generateManager(name, id, email, officeNumber) {
    // Creates a manager object
    let manager = new Manager(name, id, email, officeNumber);
    // Returns an object with an addStaff property, and a staffArray property for holding the whole team
    return {
        addStaff: null,
        staffArray: [manager]
    };
};

// Function for creating an engineer and adding that employee to the array in the staffArray property
function generateEngineer(name, id, email, github, dataObj) {
    let engineer = new Engineer(name, id, email, github);
    dataObj.staffArray.push(engineer);
    return dataObj;
};

// Function for creating an intern and adding that employee to the array in the staffArray property
function generateIntern(name, id, email, school, dataObj) {
    let intern = new Intern(name, id, email, school);
    dataObj.staffArray.push(intern);
    return dataObj;
};

// Prompts the user to choose whether to add additional staff and handles that choice
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
        // Will prompt the user for information about the specified position if adding staff was chosen
        .then(answerObj => {
            if (answerObj.addStaff === "Engineer") {
                return addEngineer(dataObj);
            }

            else if (answerObj.addStaff === "Intern") {
                return addIntern(dataObj);
            }

            // Returns the dataObj containing the whole team if no more employees are being added
            else {
                return dataObj;
            }
        })
};

// Prompts the user for information for an engineer position and adds that engineer to the team
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
        // Using the collected information, generates a new Engineer which is added to the dataObj containing the whole team in the staffArray
        .then(data => {
            return generateEngineer(data.name, data.id, data.email, data.github, dataObj)
        })
        // Prompts the user to choose whether to add any more staff
        .then(data => {
            return addStaff(data);
        })
};

// Prompts the user for information for an intern position and adds that intern to the team
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
        // Using the collected information, generates a new Intern which is added to the dataObj containing the whole team in the staffArray
        .then(data => {
            return generateIntern(data.name, data.id, data.email, data.school, dataObj)
        })
        // Prompts the user to choose whether to add any more staff
        .then(data => {
            return addStaff(data);
        })
};

// Function call to initialize app
init()
    // Uses the answers provided to create a manager obj as well as an object containing an array to hold that manager and any other employees
    .then(answersObj => generateManager(answersObj.name, answersObj.id, answersObj.email, answersObj.officeNumber))
    // Prompts the user to decide whether to add more staff. This will loop the user through adding more staff until they indicate they are done
    .then(addStaff)
    // Generates HTML based on the array of team members the user created
    .then(data => generatePage(data))
    // Writes an HTML file containing the previously generated HTML
    .then(md => writeFile(md))
    // Indicates to the user the result of the writeFille function
    .then(response => {
        console.log(response.message)
    })
    .catch(err => {
        console.log(err);
    });