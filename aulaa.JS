
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
let nome = "Raquel"
const idade = 30
const hobby = "tecido acrobatico"
let templatestring = `Gosto de treinar ${hobby} aos finais de semana`;


console.log(nome);
console.log(idade);
console.log(hobby);
console.log(templatestring);


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
let cidade = "jaraguaDosul"
let inteiro = 25
let travel = "viajar"
let templante = `Hoje em ${cidade} está fazendo ${inteiro} °C, perfeito para ${travel}`;

console.log(cidade);
console.log(inteiro);
console.log(travel);
console.log(templante);




console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:

let texto = "string"
let numero1 = "number"
let sun = "boolean"
let sol = "undefined"
let verdade = "null"
let template5 = `o valor da ${texto} é o valor ${typeof texto}`;
let template6 = `o valor do ${numero1} é o valor ${typeof numero1}`;
let template7 =`o valor do ${sun} é o valor ${typeof sun}`;
let template8 = `o valor do ${sol} é o valor ${typeof sol}`;
let template9 = `o valor do ${verdade} é o valor ${verdade}`;


console.log(texto);
console.log(numero1);
console.log(sun);
console.log(sol);
console.log(verdade);

console.log(template5);
console.log(template6);
console.log(template7);
console.log(template8);
console.log(template9);











console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:

let nome3 = "Venom"
let age = 38
let city = "londres"
let missao = "Curar o Mundo"
let templateLiteral2 = `${nome3} tem ${age} anos, mora em ${city} e seu objetivo de todos os dias é ${missao}`;

console.log(nome3);
console.log(age);
console.log(city);
console.log(missao);
console.log(templateLiteral2);


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:

let nome4 = "Larissa"
let objetivo = "focar"
let template10 = `Me chamo ${nome4} e trabalho todos os dias para ${objetivo} mais`;

console.log(nome4);
console.log(objetivo);
console.log(template10);


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:

console.log('==============================');
console.log('      SISTEMA DO USUARIO      ');
console.log('==============================');
console.log('1 - Ver perfil                ');
console.log('2 - Editar perfil             ');
console.log('3 - Configurações             ');
console.log('4 - Notificaçoes              ');
console.log('5 - Relatorios                ');
console.log('6 - Ajuda                     ');
console.log('7 - Sobre o sistema           ');
console.log('==============================');
console.log('Digite o nome da oção desejada');
console.log(`==============================`);

console.log("_______________________________");