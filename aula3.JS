// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada "cores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:

let cores = ["azul", "rosa", "roxo", "lilas"];


console.log(cores);
console.log(cores[0], cores[3]);





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:


let cores2 = ["azul", "rosa", "roxo", "lilas"];

cores2.push("verde");
console.log("push ->", cores2);

cores2.shift();
console.log(cores2);

console.log(`Quantidade de itens de cores: ${cores2.length}`);




 


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:

const numeros = [3, 7, 23, 1.60];
console.log(`Valores armazenados na lista ${numeros} e sua quantidade é: ${numeros.length}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:

let varios =  ["sun", 30, false, null, undefined];

console.log(`valores armazenados nesta lista: ${varios} e a q quantidade é: ${varios.length}`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:

let diversos = [30, "ozzy", 1.61, null, true,];

console.log(diversos);
diversos.pop()
diversos.shift()
diversos.unshift ("laranja");
diversos.push("estrela");
console.log(diversos);







console.log("_______________________________");