const Engineer = require("../lib/Engineer");

test("Create a engineer object", () => {
    const engineer = new Engineer("Will", 122345, "email@gmail.com", "wGit");

    expect(engineer.name).toBe("Will");
    expect(engineer.id).toBe(122345);
    expect(engineer.email).toBe("email@gmail.com");
    expect(engineer.github).toBe("wGit");
});

test("Gets engineer's name", () => {
    const engineer = new Engineer("Will", 122345, "email@gmail.com", "wGit");

    expect(engineer.getName()).toBe("Will");
});

test("Gets engineer's ID", () => {
    const engineer = new Engineer("Will", 122345, "email@gmail.com", "wGit");

    expect(engineer.getId()).toBe(122345);
});

test("Gets engineer's email", () => {
    const engineer = new Engineer("Will", 122345, "email@gmail.com", "wGit");

    expect(engineer.getEmail()).toBe("email@gmail.com");
});

test("Gets engineer's office number", () => {
    const engineer = new Engineer("Will", 122345, "email@gmail.com", "wGit");

    expect(engineer.getGithub()).toBe("wGit");
})

test("Gets engineer's role", () => {
    const engineer = new Engineer("Will", 122345, "email@gmail.com", "wGit");

    expect(engineer.getRole()).toBe("Engineer");
});