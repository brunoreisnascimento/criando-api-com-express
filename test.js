const fs = require("fs")
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = {id: '3', nome: 'Livro de teste'}

// [...dadosAtuais] utiliza essa função pra não sobrescrever as infor
//mações que já possuem no array

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync("livros.json")));