const generateCard = employee => {
    // Variable for Office Number, GitHub, or School information
    let roleSpecificInfo = ``;
    // Card HTML
    let cardOutput = `
    <div class="card col-12 col-md-6 col-lg-4 m-3 px-0 shadow-lg" style="max-width: 20rem;">
        <div class="card-header text-white bg-primary">
            <p class="fs-4">${employee.getName()}</p>`
    // HTML output specific to the Manager's card
    if (employee.getRole() === "Manager") {
        cardOutput += `
            <p class="fs-5"><i class="fa-solid fa-mug-hot"></i> ${employee.getRole()}</p>`;
        roleSpecificInfo = `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>`;
    };
    // HTML output specific to the Engineers's card
    if (employee.getRole() === "Engineer") {
        cardOutput += `
            <p class="fs-5"><i class="fa-solid fa-glasses"></i> ${employee.getRole()}</p>`;
        roleSpecificInfo = `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>`;
    };
    // HTML output specific to the Intern's card
    if (employee.getRole() === "Intern") {
        cardOutput += `
            <p class="fs-5"><i class="fa-solid fa-user-graduate"></i> ${employee.getRole()}</p>`;
        roleSpecificInfo = `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
    };
    // Adds the remaining HTML for the card
    cardOutput += `
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush border my-2">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                ` + roleSpecificInfo + `
                </ul>
            </div>
        </div>`;
    // Returns all of the HTML for a single card
    return cardOutput;
};

// Generates HTML to display the whole team
const generateTeamCards = teamArr => {
    let teamHtml = ``;
    // Generates individual cards each team member, adding them to the HTML that will be returned
    teamArr.forEach(element => {
        teamHtml += generateCard(element);
    })
    // Returns the HTML for all cards
    return teamHtml;
}

// Exports an anonymous function using an array as a parameter. The function will return the fully generated HTML with cards generated for each team member
module.exports = templateDataArr => {
    return `
    <!DOCTYPE html>

    <html lang="en">


    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
    </head>
        
    <body>
        <header>
            <div class="container-fluid bg-danger p-5">
                <div class="container">
                    <h1 class="display-1 font-weight-bold text-light">My Team</h1>
                </div>
            </div>
        </header>
        <main class="container my-5">
            <div class="row">
                ${generateTeamCards(templateDataArr.staffArray)}
            </div>
        </main>
    </body>
    </html>
    `;
};