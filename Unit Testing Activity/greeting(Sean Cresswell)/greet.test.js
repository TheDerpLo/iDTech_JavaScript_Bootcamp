var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

let name = "Michael";

test('outputs the correct string', () => {
    expect(greet()).toBe("Hello, " + name);
});