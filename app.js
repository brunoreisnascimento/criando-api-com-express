const express = require("express")
const rotaLivros = require("./routes/livro")
var cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))


app.use('/livros', rotaLivros)

const port = 8000;

app.listen(port, () => {
    console.log('====================================');
    console.log(`Escutando a porta ${port}`);
    console.log('====================================');
})



