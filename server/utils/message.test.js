var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should genereate correct message object', () => {
    var from = 'Arya';
    var text = 'This is a message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
