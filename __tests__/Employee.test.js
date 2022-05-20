const Employee = require("../lib/Employee");

test("Create an employee object", () => {
    const employee = new Employee("Will", 122345, "email@gmail.com");

    expect(employee.name).toBe("Will");
    expect(employee.id).toBe(122345);
    expect(employee.email).toBe("email@gmail.com");
})