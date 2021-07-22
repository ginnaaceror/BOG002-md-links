const got = require ('got'); //Biblioteca para hacer peticiones http
const fs = require('fs');
const refLink = /\[(.+?)\]\((https:.+?)\)/g;

//var readdirp = require('readdirp');

// Search links in the file and VALIDATE: FALSE.
const searchLinks = (route) => {
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf8',(err, data) => {
      const content = data.match(refLink);
      // console.log(content)
      const arrayContent = [];
      content.forEach((item) => {
        if (!Array.isArray(refLink.exec(item))) {
          let [, text, href] = refLink.exec(item); // Destructuración de la expresión regular
          const linksObject = {text: text, href: href, file: route}
          arrayContent.push(linksObject)
        }
      }) 
    !err ? resolve(arrayContent) : reject('No es archivo .md', err)
    })   
  })
}
//searchLinks('PruebaFile/prueba1.md')
//.then(console.log)

// Validate links and VALIDATE: TRUE.
const validateLinks = (links) => {
  const newArray = links.map(link => {
    let text = link.text;
    let file = link.file;
    let url = link.href;
      return got(url).then((response) => {
        let status = response.statusCode;
        return {text: text, href: url, file: file, ok: 'OK', status: status}
      })
      .catch((err) => {
        let status = err.response.statusCode;
        return {text: text, href: url, file: file, ok: 'FAIL', status: status}
      })
  })
  return Promise.all(newArray)
}

module.exports = {
  searchLinks,
  validateLinks
};