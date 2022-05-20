const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = "", id = null, email = "", officeNumber = null) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;