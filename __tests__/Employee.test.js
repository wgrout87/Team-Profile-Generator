const Employee = require("../lib/Employee");

test("Create an employee object", () => {
    const employee = new Employee("Will", 122345, "email@gmail.com");

    expect(employee.name).toBe("Will");
    expect(employee.id).toBe(122345);
    expect(employee.email).toBe("email@gmail.com");
});

test("Gets employee's name", () => {
    const employee = new Employee("Will", 122345, "email@gmail.com");

    expect(employee.getName()).toBe("Will");
});

test("Gets employee's ID", () => {
    const employee = new Employee("Will", 122345, "email@gmail.com");

    expect(employee.getId()).toBe(122345);
});

test("Gets employee's email", () => {
    const employee = new Employee("Will", 122345, "email@gmail.com");

    expect(employee.getEmail()).toBe("email@gmail.com");
});

test("Gets employee's email", () => {
    const employee = new Employee("Will", 122345, "email@gmail.com");

    expect(employee.getRole()).toBe("Employee");
});