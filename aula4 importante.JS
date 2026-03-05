// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:

let aluno = {
    nome: "Tomm",
    idade: 15,
    curso: "Engenharia"
}

console.log(aluno);


 


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:

aluno.address = {
    cidade: "california",
    rua: "23 de março"
}
console.log(aluno.address.cidade);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:

aluno.habilidades = ["lutar"]
console.log(aluno.habilidades[0])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:

aluno.notas = [8, 10, 9.5]
console.log(aluno.notas, aluno.nome);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:

aluno.responsavel = {
    nome: "Sueli",
    parentesco: "mae"
}
console.log(aluno.responsavel.nome);

aluno.responsavel.nome = "Roger"
console.log(aluno.responsavel.nome);



console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:

const listadealunos2 = [aluno]
 let aluno4 = {
    nome: "agatha",
    idade: 18,
    curso: "psicologia"
}
let aluno5 = {
    nome: "lari",
    idade: 23,
    curso: "professora"
}


listadealunos2.push(aluno4);
listadealunos2.push(aluno5);
console.log(listadealunos2[1].nome);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:

let ListaDeAlunos3 = [
    {
        nome: "maria",
        idade: 30,
        notas: [7,8,9]
    },
    {
        nome: "joao",
        idade: 25,
        notas: [8,7,8.5]
    },
    {
        nome: "scharles",
        idade: 55,
        notas: [10,8,9]
    }
]

console.log(ListaDeAlunos3[0].nome, ListaDeAlunos3[0].notas, ListaDeAlunos3[1].nome, ListaDeAlunos3[1].notas,ListaDeAlunos3[2].nome, ListaDeAlunos3[2].notas);




    





console.log("_______________________________");
