import chalk from 'chalk';
import * as fs from 'fs';
import { url } from 'inspector';
//const fs = require ('fs');  //file system
//fs.readFile ();

function extraiLinks (texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({[temp[1]] : temp [2]})
    }
    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

function trataErro(erro) {
    throw new Error (chalk.red(erro.code, 'não há arquivo no caminho'));
}


async function buscaArquivo(caminhoArquivo){
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoArquivo, encoding);
       return extraiLinks(texto);
    } catch (erro) {
        trataErro (erro);
    }
}

export default buscaArquivo;

//buscaArquivo ('texto1.md');


// function buscaArquivo(caminhoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoArquivo, encoding)
//     .then ((texto) => console.log(chalk.green(texto)))
//     .catch ((erro) => trataErro(erro))
// }

// function buscaArquivo(caminhoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile (caminhoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

