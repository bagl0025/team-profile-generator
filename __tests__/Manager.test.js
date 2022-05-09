const Manager = require('../lib/Manager.js');

// set office number using constructor
test('gets manager office number', () => {
    const manager = new Manager('Brian', 1, 'bagley@umn.edu', 323);
    expect(manager.officeNumber).toBe(323);
});

// gets role from getRole() 
test('employee role', () => {
    const manager = new Manager('Brian', 1, 'bagley@umn.edu', 323);
    expect(manager.getRole()).toBe("Manager");
});
