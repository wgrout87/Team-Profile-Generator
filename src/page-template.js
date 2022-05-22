const generateCard = employee => {
    if (employee.getRole() === "Manager") {
        return `
        <div class="card col-12 col-md-6 col-lg-4 m-3 px-0 shadow-lg" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary">
                <p>${employee.name}</p>
                <p><i class="fa-solid fa-mug-hot"></i> ${employee.getRole()}</p>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                </ul>
            </div>
        </div>`
    }

    if (employee.getRole() === "Engineer") {
        return `
        <div class="card col-12 col-md-6 col-lg-4 m-3 px-0 shadow-lg" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary">
                <p>${employee.name}</p>
                <p><i class="fa-solid fa-glasses"></i> ${employee.getRole()}</p>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
                </ul>
            </div>
        </div>`
    }

    if (employee.getRole() === "Intern") {
        return `
        <div class="card col-12 col-md-6 col-lg-4 m-3 px-0 shadow-lg" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary">
                <p>${employee.name}</p>
                <p><i class="fa-solid fa-user-graduate"></i> ${employee.getRole()}</p>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
            </div>
        </div>`
    }
}

const generateTeamCards = teamArr => {
    let teamHtml = ``;
    teamArr.forEach(element => {
        teamHtml += generateCard(element);
    })
    return teamHtml;
} 

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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
    </head>
        
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-1 font-weight-bold">My Team</h1>
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