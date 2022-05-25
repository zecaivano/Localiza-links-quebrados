// comand line interface = cli
import buscaArquivo from './index.js';
import chalk from 'chalk';
import validaURLs from './http-validacao.js';

const caminho = process.argv;

async function processaTexto (caminhoArquivo) {
    const resultado = await buscaArquivo (caminhoArquivo[2]);
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('links validados'), await validaURLs(resultado))
    } else {
    console.log(chalk.yellow('lista de links'), resultado);
    }
}

processaTexto (caminho);

