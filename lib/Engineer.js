const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name = "", id = null, email = "", github = "") {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;