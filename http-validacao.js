import fetch from 'node-fetch';

function manejaErros(erro) {
    throw new Error (erro.message);
}

async function confereStatus (arrayURLs) {
    try {
        // promises e async await
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url)
                    return res.status
        }))
        return arrayStatus;
    } catch (erro) {
        manejaErros (erro);
    }
}

function geraArrayURLs (arrayLinks){    // loop para cada objeto {propriedade:valor}
    //Object.values (objeto)
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join());// O join tira do array transformando em string
}

async function validaURLs(arrayLinks){
    const links = geraArrayURLs (arrayLinks);
    const statusLinks = await confereStatus(links);
    // spread operator
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto, 
        status: statusLinks [indice] 
    }))
    return resultados;
}

export default validaURLs