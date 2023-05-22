const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado =  livros.filter( livro => livro.id === id)

    return livroFiltrado
}

function insereLivro(data) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    //sendo data o novo livro passado
    const novaListaLivros = [...livros, data]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

function alteraLivro(data, id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const indiceMod  = livros.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livros[indiceMod], ...data}
    livros[indiceMod] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livros))

}

function deleteFiles(id){
    let livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrados  = livros.filter(livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))


}


module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro,
    alteraLivro,
    deleteFiles
}