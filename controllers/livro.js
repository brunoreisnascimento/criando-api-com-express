const { getTodosLivros, 
        getLivroId, 
        insereLivro, 
        alteraLivro,
        deleteFiles } = require("../services/livros");

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.json(livros);
    } catch (error) {
        res.status(500)
        res.send(error.menssage)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        if(!id || !Number(id)){
            res.status(422)
            res.send("Id inválido!")
        }
            const livro = getLivroId(id)
            res.send(livro)
        
    } catch (error) {
        res.status(500)
        res.send(error.menssage)
    }
}

function postLivro(req, res) {
    try {
        const data = req.body
        if (req.body.nome) {
            insereLivro(data)
            res.status(201)
            res.send("Livro inserido com sucesso!")   
        }
        res.status(422)
        res.send("O campo nome é obrigatório!")
        
    } catch (error) {
        res.status(500)
        res.send(error.menssage)
    }
}

function alterarLivro(req, res){
    try {
        const id = req.params.id
        const data = req.body
        if(!id || !Number(id)){
            res.status(422)
            res.send("Id inválido!")
        }

        alteraLivro(data, id)
        res.send("livros modificados com sucesso!!!")
    } catch (error) {
        res.status(500)
        res.send(error.menssage)
    }
}
function removerLivro(req, res) {
    try {
        const id = req.params.id

        if(!id || !Number(id)){
            res.status(422)
            res.send("Id inválido!")
        }
        deleteFiles(id)
        res.status(200)
        res.send("livro removido com sucesso!!!")

    } catch (error) {
        res.status(500)
        res.send(error.menssage)
    }
    
}


module.exports = {
    getLivros,
    getLivro,
    postLivro,
    alterarLivro,
    removerLivro
}