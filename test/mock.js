const mdLinksFalse = [{
    text: 'motor de JavaScript V8 de Chrome',
    href: 'https://developers.google.com/v8/',
    file: 'PruebaFile/PruebaLinks.md'
},
{
    text: 'md-links',
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    file: 'PruebaFile/PruebaLinks.md'
},
];

const mdLinksTrue = [{
    text: 'motor de JavaScript V8 de Chrome ',
    href: 'https://developers.google.com/v8/',
    file: 'PruebaFile/PruebaLinks.md',
    statusOk: 'OK',
    status: 200
},
{
    text: 'Node.js',
    href: 'https://nodejs.org/ap37rnxeu3829?i/path.html',
    file: 'PruebaFile/PruebaLinks.md',
    statusOk: 'FAIL',
    status: 404

},
]

module.exports = {
mdLinksFalse,
mdLinksTrue
};