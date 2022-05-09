const Engineer = require('../lib/Engineer.js');

// set github using constructor
test('gets engineer github value', () => {
    const engineer = new Engineer('Brian', 1, 'bagley@umn.edu', 'bagl0025');
    expect(engineer.github).toBe('bagl0025');
});

// set github using getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Brian', 1, 'bagley@umn.edu', 'bagl0025');
    expect(engineer.getGithub()).toBe('bagl0025');
});

// gets role from getRole() 
test('employee role', () => {
    const engineer = new Engineer('Brian', 1, 'bagley@umn.edu', 'bagl0025');
    expect(engineer.getRole()).toBe("Engineer");
});
