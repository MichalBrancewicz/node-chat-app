const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Jen';
    let text = 'Some message';
    let message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    let from = 'Michal';
    let latitude = 1;
    let longitude = 2;
    let url = 'https://www.google.com/maps?q=1,2';
    let locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(typeof locationMessage.createdAt).toBe('number');
    expect(locationMessage).toMatchObject({from, url})
  })
})