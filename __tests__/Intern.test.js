const Intern = require("../lib/Intern");

test("Create a engineer object", () => {
    const intern = new Intern("Will", 122345, "email@gmail.com", "UoU");

    expect(intern.name).toBe("Will");
    expect(intern.id).toBe(122345);
    expect(intern.email).toBe("email@gmail.com");
    expect(intern.school).toBe("UoU");
});

test("Gets intern's name", () => {
    const intern = new Intern("Will", 122345, "email@gmail.com", "UoU");

    expect(intern.getName()).toBe("Will");
});

test("Gets intern's ID", () => {
    const intern = new Intern("Will", 122345, "email@gmail.com", "UoU");

    expect(intern.getId()).toBe(122345);
});

test("Gets intern's email", () => {
    const intern = new Intern("Will", 122345, "email@gmail.com", "UoU");

    expect(intern.getEmail()).toBe("email@gmail.com");
});

test("Gets intern's office number", () => {
    const intern = new Intern("Will", 122345, "email@gmail.com", "UoU");

    expect(intern.getSchool()).toBe("UoU");
})

test("Gets intern's role", () => {
    const intern = new Intern("Will", 122345, "email@gmail.com", "UoU");

    expect(intern.getRole()).toBe("Intern");
});