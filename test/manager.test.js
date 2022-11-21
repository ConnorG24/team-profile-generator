const Manager = require('../lib/manager');


test('make a Manager',()=>{
    const manager = new Manager('Fatalis',99,'elderdaragongod@gmail.com',1)
    expect(manager.officeNum).toEqual(1);
});

test('GET OFFICE NUMBER',()=>{
    const manager = new Manager('Fatalis',99,'elderdaragongod@gmail.com',1)
    expect(manager.getOfficeNum()).toEqual(1);
});

test('GET ROLE',()=>{
    const manager = new Manager('Fatalis',99,'elderdaragongod@gmail.com',1)
    expect(manager.getRole()).toEqual('Manager');
});