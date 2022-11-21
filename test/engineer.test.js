
const Engineer = require('../lib/engineer');

test('make a egninerrr',()=>{
    const engineer = new Engineer('Diablos',666,'diablosMHFU@yahoo.com','diablosHMFU343')
    expect(engineer.github).toEqual('diablosHMFU343');
});

test('GET GITHUB',()=>{
    const engineer = new Engineer('Diablos',666,'diablosMHFU@yahoo.com','diablosHMFU343')
    expect(engineer.getGithub()).toEqual('diablosHMFU343');
});

test('GET ROLE',()=>{
    const engineer = new Engineer('Diablos',666,'diablosMHFU@yahoo.com','diablosHMFU343')
    expect(engineer.getRole()).toEqual('Engineer');
});