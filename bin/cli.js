#!/usr/bin/env node

const [, , ...args] = process.argv
const yargs = require('yargs');
const { mdLinks } = require('..');

const path = args[0] //El 1er argumento es la ruta

const argv = yargs
    .usage("Usage: md-links <path-to-file> [options]")
    .option('stats', { alias: 's', description: 'statistics', type: 'boolean', mode: false })
    .option('validate', { alias: 'v', description: 'validate links', type: 'boolean', mode: false })
    .help().alias('help', 'h')
    .argv;
if (!path) {
    console.log('Ingresar la ruta')
} else {
    if (argv.stats && argv.validate) {       
        mdLinks(path, { validate: true })       
            .then((data) => { 
                const total = data.length
                const arrayValidate = data.map((link) => link.href)         
                const uniqueLink = [...new Set(arrayValidate)]
                const unique = uniqueLink.length
                const searchbroken = data.filter((link) => link.ok !== 'OK')
                const broken = searchbroken.length
                console.table({total, unique, broken})
            })
    } else if (argv.validate) { 
        mdLinks(path, { validate: true })
            .then((links) => {
                links.forEach(link => {
                    console.log(link.text, link.file, link.href, link.status, link.ok);
                })
            })
    } else if (argv.stats) {       
        mdLinks(path)
            .then((data) => {
                const total = (data.length)
                const arrayStats = data.map((link) => link.href)
                const uniqueLink = [...new Set(arrayStats)] // Iterar sobre valores unicos
                const unique = (uniqueLink.length)
                console.table({total, unique})
            })
    }
    
    else {        
        mdLinks(path, { validate: false })
            .then(console.log)
    }
}