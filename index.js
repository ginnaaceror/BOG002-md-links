const { searchLinks, validateLinks } = require('./functions.js')

const mdLinks = (path, options = { validate: false }) => {
  return searchLinks(path)
    .then((data) => {// Obtengo el retorno de la promesa de searchLinks
      if(options.validate){
        return validateLinks(data) 
      } else {
        return Promise.resolve(data)
      }
    })
    .catch(()=>{
      console.log('no funciona')
    })
}    
//var resultado = mdLinks('PruebaFile/prueba1.md', {validate: true})
//resultado.then(console.log)

module.exports = { mdLinks }