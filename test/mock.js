const mdLinksFalse = [
    {
      text: 'Node.js',
      href: 'https://nodejs.org/ap37rnxeu3829?i/path.html',
      file: '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md'
    },
    {
      text: 'md-links',
      href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
      file: '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md'
    },
    {
      text: 'Node.js',
      href: 'https://nodejs.org/es/',
      file: '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md'
    },
    {
      text: 'motor de JavaScript V8 de Chrome',
      href: 'https://developers.google.com/v8/',
      file: '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md'
    },
    {
      text: ' ] Uso de condicionales [(if-else | switch | operador ternario)',
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals',
      file: '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md'
    }
  ]

const mdLinksTrue = [
    {
      text: 'Node.js',
      href: 'https://nodejs.org/ap37rnxeu3829?i/path.html',
      file: '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md',
      ok: 'FAIL',
      status: 404
    },
    {
      text: 'md-links',
      href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
      file: '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md',
      ok: 'OK',
      status: 200
    },
    {
      text: 'Node.js',
      href: 'https://nodejs.org/es/',
      file: '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md',
      ok: 'OK',
      status: 200
    },
    {
      text: 'motor de JavaScript V8 de Chrome',
      href: 'https://developers.google.com/v8/',
      file: '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md',
      ok: 'OK',
      status: 200
    },
    {
      text: ' ] Uso de condicionales [(if-else | switch | operador ternario)',
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals',
      file: '/Users/ginnapaolaacerorussi/Desktop/BOG002-md-links/test/prueba1.md',
      ok: 'OK',
      status: 200
    }
  ]

module.exports = {
mdLinksFalse,
mdLinksTrue
};