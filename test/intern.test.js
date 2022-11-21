const Intern = require('../lib/intern');


test('make a intern',()=>{
    const intern = new Intern('Jagras',54,'greatjagras@hotmail.com','Monster University')
    expect(intern.shcool).toEqual('Monster University');
});

test('GET SCHOol',()=>{
    const intern = new Intern('Jagras',54,'greatjagras@hotmail.com','Monster University')
    expect(intern.getSchool()).toEqual('Monster University');
});

test('GET ROLE',()=>{
    const intern = new Intern('Jagras',54,'greatjagras@hotmail.com','Monster University')
    expect(intern.getRole()).toEqual('Intern');
});