let fns = require('./utils/utilityfunctions');

test('sethadamson should return true', () => {
    //arrange
    let result = fns.usernameCheck('sethadamson');
    expect(result).toBeTruthy();
})