create database projeto_individual;
use projeto_individual;

create table personagem(
idPersonagem int primary key auto_increment,
nome varchar(45)
);

create table usuario(
id int primary key auto_increment,
nome varchar(50) not null,
email varchar(50) not null,
senha varchar(50) not null,
fkPersonagem int, constraint fkPers foreign key(fkPersonagem) references personagem(idPersonagem)
);

create table estrela(
idEstrela int primary key auto_increment,
qtdEstrela int
);

create table avaliacao(
idAvaliacao int auto_increment,
fkUsuario int, constraint fkU foreign key (fkUsuario) references usuario(id),
fkEstrela int, constraint fkE foreign key (fkEstrela) references estrela(idEstrela),
descricao varchar(1000),
constraint pkTripla primary key(idAvaliacao, fkUsuario, fkEstrela)
);

select * from personagem;
select * from usuario;
select * from estrela;
select * from avaliacao;

insert into personagem values
	(null, 'Miles Morales'),
	(null, 'Spider-Gwen'),
	(null, 'Peter B. Parker'),
	(null, 'Homem-Aranha Noir'),
	(null, 'Porco-Aranha'),
	(null, 'Peni Parker');

insert into usuario values
	(null, 'André', 'andre@gmail.com', '1234', 1),
	(null, 'Marcos', 'marcos@gmail.com', '1234', 1),
	(null, 'Júlia', 'julia@gmail.com', '1234', 1),
	(null, 'Pedro', 'pedro@gmail.com', '1234', 1),
	(null, 'Andrade', 'andrade@gmail.com', '1234', 2),
	(null, 'Paula', 'paula@gmail.com', '1234', 2),
	(null, 'Renato', 'renato@gmail.com', '1234', 2),
	(null, 'Valdir', 'valdir@gmail.com', '1234', 3),
	(null, 'Felipe', 'felipe@gmail.com', '1234', 4),
	(null, 'João', 'joao@gmail.com', '1234', 5),
	(null, 'Bernardo', 'bernardo@gmail.com', '1234', 6),
	(null, 'Joel', 'joel@gmail.com', '1234', 4),
	(null, 'Vitória', 'vitoria@gmail.com', '1234', 5),
	(null, 'Silvana', 'silvana@gmail.com', '1234', 3),
	(null, 'George', 'george@gmail.com', '1234', 1);

insert into estrela values
	(null, 1),
	(null, 2),
	(null, 3),
	(null, 4),
	(null, 5);

insert into avaliacao values
	(null, 1, 5, 'Melhor filme que eu já vi'),
	(null, 2, 5, 'Que experiência incível assistindo esse filme, muito bom!'),
	(null, 3, 4, 'Gostei do filme, apenas pequenos pontos que acho que poderia melhorar, mas de resto foi muito bom'),
	(null, 4, 5, 'Que animação espetacular'),
	(null, 5, 5, 'Simplesmente UAUU, não esperava por tudo isso'),
	(null, 6, 2, 'A experiencia que tive não foi tão boa, achei o filme um pouco forçado'),
	(null, 7, 3, 'Filme realmente é legal, mas não tão espetacular como os filmes originais do Aranha'),
	(null, 8, 1, 'Sério, que filme ruim'),
	(null, 9, 1, 'Não gostei nem um pouco do filme'),
	(null, 10, 4, 'Sai do cinema impressionado com tanta beleza em um filme só'),
	(null, 11, 3, 'Não curti tanto assim o enredo do filme, mas a animação realmente é muito boa'),
	(null, 12, 3, 'Não amei o filme, mas também não tive uma experiência horrível'),
	(null, 13, 5, 'Que espetáculo de filme'),
	(null, 14, 5, 'Espetacular esse filme, a animação foi a melhor que eu já vi'),
	(null, 15, 5, 'Curti demais a animação');
    
-- selects utilizados no site

select fkEstrela as Estrela, count(fkEstrela) as TotalEstrela from avaliacao
	group by fkEstrela order by fkEstrela desc;
    
select count(fkEstrela) as TotalEstrela from avaliacao
            group by fkEstrela order by fkEstrela desc;
            
select count(fkEstrela) as TotalEstrela5 from avaliacao
	where fkEstrela = 5;
    
select count(fkEstrela) as TotalEstrela4 from avaliacao
	where fkEstrela = 4;
    
select count(fkEstrela) as TotalEstrela3 from avaliacao
	where fkEstrela = 3;
    
select count(fkEstrela) as TotalEstrela2 from avaliacao
	where fkEstrela = 2;
    
select count(fkEstrela) as TotalEstrela1 from avaliacao
	where fkEstrela = 1;
    
update usuario set fkPersonagem = 1 where id = 1;

select personagem.nome as NomePersonagem, count(fkPersonagem) as TotalVotos from usuario join personagem
	on fkPersonagem = idPersonagem
		group by personagem.nome;
        
select id, usuario.nome, usuario.fkPersonagem, personagem.nome as NomePersonagem from usuario join personagem
	on fkPersonagem = idPersonagem
		where id = 1;