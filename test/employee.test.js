
const Employee = require('../lib/employee');

test('make a employee', () =>{
    const employee = new Employee('Ratholos', 579, 'MHFU@gmail.com');
    expect(employee.name).toEqual('Ratholos');
    expect(employee.id).toEqual(579);
    expect(employee.email).toEqual('MHFU@gmail.com');
});

test('GEtID',() =>{
    const employee = new Employee('Ratholos', 579, 'MHFU@gmail.com');
    expect(employee.getId()).toEqual(579);
});

test('GET EMAIL',() =>{
    const employee = new Employee('Ratholos', 579, 'MHFU@gmail.com');
    expect(employee.getEmail()).toEqual('MHFU@gmail.com');
});

test('GET ROle',() =>{
    const employee = new Employee('Ratholos', 579, 'MHFU@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});
