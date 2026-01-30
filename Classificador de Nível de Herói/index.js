// Classificador de Nível de Herói
// Este programa classifica o nível de um herói baseado na sua experiência (XP).
// Utiliza variáveis, operadores, laços de repetição (for) e estruturas de decisão (if-else).
// Valores são definidos diretamente no código para simplicidade, sem entrada do usuário.

let nome = "Aragorn"; // Variável para o nome do herói
let xp = 7500; // Variável para a experiência (XP) do herói

// Variável para armazenar o nível
let nivel;

// Estrutura de decisão para classificar o nível baseado no XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "XP inválida"; // Caso o XP seja negativo
}

// Saída: mensagem com o nome e nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

// Para demonstrar laço de repetição, vamos classificar vários heróis com XP diferentes
console.log("\nClassificando vários heróis:");
let herois = [
    { nome: "Gandalf", xp: 500 },
    { nome: "Legolas", xp: 1500 },
    { nome: "Frodo", xp: 3000 },
    { nome: "Boromir", xp: 6000 },
    { nome: "Gimli", xp: 8500 },
    { nome: "Sauron", xp: 12000 }
];

for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let nivelAtual;

    // Mesma estrutura de decisão para cada herói
    if (heroi.xp < 1000) {
        nivelAtual = "Ferro";
    } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
        nivelAtual = "Bronze";
    } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
        nivelAtual = "Prata";
    } else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
        nivelAtual = "Ouro";
    } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
        nivelAtual = "Platina";
    } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
        nivelAtual = "Ascendente";
    } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
        nivelAtual = "Imortal";
    } else if (heroi.xp >= 10001) {
        nivelAtual = "Radiante";
    } else {
        nivelAtual = "XP inválida";
    }

    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivelAtual}`);
}