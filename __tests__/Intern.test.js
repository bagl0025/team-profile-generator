const Intern = require('../lib/Intern.js');

// set school using constructor
test('gets intern github value', () => {
    const intern = new Intern('Brian', 1, 'bagley@umn.edu', 'UMN');
    expect(intern.school).toBe('UMN');
});

// set school using getSchool()
test('gets intern github value', () => {
    const intern = new Intern('Brian', 1, 'bagley@umn.edu', 'UMN');
    expect(intern.getSchool()).toBe('UMN');
});

// gets role from getRole() 
test('employee role', () => {
    const intern = new Intern('Brian', 1, 'bagley@umn.edu', 'UMN');
    expect(intern.getRole()).toBe("Intern");
});
