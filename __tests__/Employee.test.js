const Employee = require('../lib/Employee.js');

// creates an employee as an object 
test('creates an employee object', () => {
    const employee = new Employee('Brian', 1, 'bagley@umn.edu');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// test getId() 
test("gets employee's ID", () => {
    const employee = new Employee('Brian', 1, 'bagley@umn.edu');
    expect(employee.getId()).toEqual(1);
});

// test getEmail()
test("gets employee's email address", () => {
    const employee = new Employee('Brian', 1, 'bagley@umn.edu');
    expect(employee.getEmail()).toEqual('bagley@umn.edu');
});

// test getRole()
test('gets role of employee', () => {
    const employee = new Employee('Brian', 1, 'bagley@umn.edu');
    expect(employee.getRole()).toEqual("Employee");
}); 