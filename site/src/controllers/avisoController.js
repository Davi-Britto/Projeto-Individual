var avisoModel = require("../models/avisoModel");

function testar(req, res) {
    console.log("ENTRAMOS NO avisoController");
    res.send("ENTRAMOS NO AVISO CONTROLLER");
}

function listar(req, res) {
    avisoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avisoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarPersonagemPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avisoModel.listarPersonagemPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    avisoModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var idUsuario = req.params.idUsuario;
    var qtdEstrelas = req.body.qtdEstrelas;
    var descricao = req.body.descricao;


    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está vazia!");
    } else if (descricao == "") {
        res.status(400).send("A descrição está indefinido!");
    } else if (qtdEstrelas == undefined) {
        res.status(400).send("A quantidade de estrelas está indefinido!");
    } else {
        avisoModel.listarPorUsuario(idUsuario).then((resultado) => {
            if (resultado.length > 0) {
                res.status(400).send("O usuário já fez uma avaliação"); //mexer
            } else {
                avisoModel.publicar(idUsuario, qtdEstrelas, descricao)
                    .then(
                        function (resultado) {
                            res.json(resultado);
                        }
                    )
                    .catch(
                        function (erro) {
                            console.log(erro);
                            console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
            }
        })

    }
}

function cadastrarPersonagem(req, res) {
    var idUsuario = req.params.idUsuario;
    var personagemEscolhido = req.body.personagemEscolhido;


    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
    } else if (personagemEscolhido == 0) {
        res.status(400).send("Personagem não foi escolhido");
    } else {
        avisoModel.cadastrarPersonagem(idUsuario, personagemEscolhido)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var novaDescricao = req.body.descricao;
    var novaEstrela = req.body.qtdEstrelas;
    var idAvaliacao = req.params.idAvaliacao;

    if (novaDescricao == undefined) {
        res.status(400).send("A descrição está vazia!");
    } else if (novaDescricao == "") {
        res.status(400).send("A descrição está indefinido!");
    } else if (novaEstrela == undefined) {
        res.status(400).send("A quantidade de estrelas está indefinido!");
    } else {
        avisoModel.editar(novaDescricao, novaEstrela, idAvaliacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }



}

function deletar(req, res) {
    var idAvaliacao = req.params.idAvaliacao;

    avisoModel.deletar(idAvaliacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    testar,
    listar,
    listarPorUsuario,
    listarPersonagemPorUsuario,
    pesquisarDescricao,
    publicar,
    cadastrarPersonagem,
    editar,
    deletar
}