const Manager = require("../lib/Manager");

test("Create a manager object", () => {
    const manager = new Manager("Will", 122345, "email@gmail.com", 123);

    expect(manager.name).toBe("Will");
    expect(manager.id).toBe(122345);
    expect(manager.email).toBe("email@gmail.com");
    expect(manager.officeNumber).toBe(123);
});

test("Gets manager's name", () => {
    const manager = new Manager("Will", 122345, "email@gmail.com", 123);

    expect(manager.getName()).toBe("Will");
});

test("Gets manager's ID", () => {
    const manager = new Manager("Will", 122345, "email@gmail.com", 123);

    expect(manager.getId()).toBe(122345);
});

test("Gets manager's email", () => {
    const manager = new Manager("Will", 122345, "email@gmail.com", 123);

    expect(manager.getEmail()).toBe("email@gmail.com");
});

test("Gets manager's office number", () => {
    const manager = new Manager("Will", 122345, "email@gmail.com", 123);

    expect(manager.getOfficeNumber()).toBe(123);
})

test("Gets manager's role", () => {
    const manager = new Manager("Will", 122345, "email@gmail.com", 123);

    expect(manager.getRole()).toBe("Manager");
});