//booleanos

const number = 4;

const numberPar = number % 2 === 0;

console.log("O número " + number + " é par? " + numberPar);
//== operador de comparação
//=== operador de comparação estrita (valor e tipo)
//!= diferente
//!== diferente estrito
//> maior que
//< menor que
//>= maior ou igual
//<= menor ou igual

//Operadores Lógicos
//&& "E" todas as condições devem ser verdadeiras
//|| "OU" pelo menos uma condição deve ser verdadeira
//! "NÃO" inverte o valor lógico
if(number === 0) {
    console.log('O número é zero');
}else if (numberPar) {
    console.log('Executa se verdadeiro');
}else{
    console.log('Executa se falso');
}

//Operadores de atribuição
//= atribuição simples
//+= atribuição de adição
//-= atribuição de subtração
//*= atribuição de multiplicação
// /= atribuição de divisão
//%= atribuição de resto
