var database = require("../database/config");

function buscarUltimasMedidas(idAvaliacao, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
            select fkEstrela as Estrela, count(fkEstrela) as TotalEstrela from avaliacao
            group by fkEstrela order by fkEstrela desc;
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            select fkEstrela as Estrela, count(fkEstrela) as TotalEstrela from avaliacao
            group by fkEstrela order by fkEstrela desc;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAvaliacao) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
            select fkEstrela as Estrela, count(fkEstrela) as TotalEstrela from avaliacao
            group by fkEstrela order by fkEstrela desc;
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            select fkEstrela as Estrela, count(fkEstrela) as TotalEstrela from avaliacao
            group by fkEstrela order by fkEstrela desc;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function personagem(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
            select personagem.nome as NomePersonagem, count(fkPersonagem) as TotalVotos from usuario join personagem
                on fkPersonagem = idPersonagem
                    group by personagem.nome;
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            select personagem.nome as NomePersonagem, count(fkPersonagem) as TotalVotos from usuario join personagem
                on fkPersonagem = idPersonagem
                    group by personagem.nome;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    personagem
}
