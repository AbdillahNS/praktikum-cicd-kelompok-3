const salam = require('./index');

test('Menguji fungsi salam', () => {
    expect(salam()).toBe('Halo Samid');
});