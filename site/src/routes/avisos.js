var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/listarPersonagem/:idUsuario", function (req, res) {
    avisoController.listarPersonagemPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.post("/cadastrarPersonagem/:idUsuario", function (req, res) {
    avisoController.cadastrarPersonagem(req, res);
});

router.put("/editar/:idAvaliacao", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAvaliacao", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;