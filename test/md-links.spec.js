const mdLinks = require('../index.js');
const mock = require('./mock');


describe('mdLinks', () => {
    test('should be a function', () => {
      expect(typeof mdLinks.mdLinks).toBe('function');
    });

    test('should returns a promise', () => {
      const route = './dir';
        expect(mdLinks.mdLinks(route) instanceof Promise).toBeTruthy();
    });

      test('get a links without status', () => {
        const route = '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md'
        return mdLinks.mdLinks(route, {validate: false}).then((data) => {
          expect (data).toEqual(mock.mdLinksFalse)
        })
      });

      test('get a links with status', () => {
        const route = '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md'
        return mdLinks.mdLinks(route, {validate: true}).then((data) => {
          expect (data).toEqual(mock.mdLinksTrue)
        })
      });
    
});
