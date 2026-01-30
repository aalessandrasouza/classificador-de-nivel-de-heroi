//Faça um algorithmo  que dado 3 notas tiradas por um aluno em um semestre da faculdade, calcule a sua média e diga se ele foi aprovado ou reprovado. A média para aprovação é 7.0
//média = (nota1 + nota2 + nota3) / 3;
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 6.5;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7.0) {
    console.log("Aluno aprovado com média: " + media.toFixed(2));
} else {
    console.log("Aluno reprovado com média: " + media.toFixed(2));
}