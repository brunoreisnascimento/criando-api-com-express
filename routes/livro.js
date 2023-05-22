const { Router } = require("express")
const { getLivros, getLivro, postLivro, alterarLivro, removerLivro} = require("../controllers/livro")

const router = Router()

router.get("/", getLivros)

router.get("/:id", getLivro)
router.post("/", postLivro)
router.patch("/:id", alterarLivro)

router.delete("/:id", removerLivro)



module.exports = router
