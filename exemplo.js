let nome = "Alessandra"; // variável pode ser reatribuída
const idade = 28; //constante nao pode ser reatribuída

let variável = 10 + 10; // expressão aritmética para todas as operaçoes básicas


console.log("Olá, " + nome + "!");
console.log("Sua idade é " + idade + ".");
console.log("O valor da variável é: " + variável);


nome = "Souza";
//idade = 29;  Isso causará um erro, pois 'idade' é uma constante.  

console.log("Seu sobrenome é " + nome + ".");

//Primeiro desafio: Faça um programa para calcular o vamor de uma viagem
//3 variáveis: distancia, precoCombustivel, consumoMedio
//preço do alcool por litro
//preço da gasolina por litro
//preço do diesel por litro
//tipo de combustivel que o carro utiliza
//distancia em km
//gasto medio de combustivel para realizar a viagem
//adicionar o tipo de combustivel (gasolina, alcool)

let distancia = 100; // distância em km
let precoAlcool = 5.79; // preço do alcool por litro
let precoGasolina = 6.66; // preço da gasolina por litro
let tipoCombustivel = "alcool"; // tipo de combustivel que o carro utiliza
let consumoMedio = 10; // consumo médio em km por litro

let litrosNecessarios = distancia / consumoMedio; // cálculo dos litros necessários

// determinar o preço do combustível com base no tipo selecionado
if (tipoCombustivel === "alcool") {
    var precoCombustivel = precoAlcool;
} else {
    var precoCombustivel = precoGasolina;
}



let custoTotal = litrosNecessarios * precoCombustivel; // cálculo do custo total


console.log("O custo total da viagem será de R$ " + custoTotal.toFixed(2) + ".");   