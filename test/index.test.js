import buscaArquivo from "../index";

const arrayResult = [
  {
    FileList : 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe ('buscaArquivo::', () => {
  it ('deve ser uma função', () => {
    expect(typeof buscaArquivo).toBe('function');
  })
  it ('deve retornar array com resultados', async () => {
    const resultado = await buscaArquivo ('C:\Users\zecai\OneDrive\Documentos\JOSE ROBERTO\Programação\Alura\05 - JS para back-end\06 - Node\test\arquivos\texto1.md')
    expect(resultado).toEqual(arrayResult)
  })
  it ('deve retornar mensagem "não há links"', async () => {
    const resultado = await buscaArquivo ('C:\Users\zecai\OneDrive\Documentos\JOSE ROBERTO\Programação\Alura\05 - JS para back-end\06 - Node\test\arquivos\texto1-sem-links.md')
    expect (resultado).toBe('não há links');
  })
})


// test('deve ser função', () => {
//     expect(typeof buscaArquivo).toBe('function');
//   });
