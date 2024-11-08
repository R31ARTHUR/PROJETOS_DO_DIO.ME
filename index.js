// O nome foi de minha preferência
const nickname = "Rei Arthur";

// Gera um número aleatório entre 1 e 10000
let nivel = Math.floor(Math.random() * 10000) + 1;

// Define os níveis
const ferro = "Ferro";
const bronze = "Bronze";
const prata = "Prata";
const ouro = "Ouro";
const platina = "Platina";
const ascendente = "Ascendente";
const imortal = "Imortal";
const radiante = "Radiante";

// Verifica o nível e imprime a mensagem correspondente
if (nivel <= 1000) {
    console.log(`O Herói de nome ${nickname} está no nível de ${ferro}`);
} else if (nivel <= 2000) {
    console.log(`O Herói de nome ${nickname} está no nível de ${bronze}`);
} else if (nivel <= 5000) {
    console.log(`O Herói de nome ${nickname} está no nível de ${prata}`);
} else if (nivel <= 7000) {
    console.log(`O Herói de nome ${nickname} está no nível de ${ouro}`);
} else if (nivel <= 8000) {
    console.log(`O Herói de nome ${nickname} está no nível de ${platina}`);
} else if (nivel <= 9000) {
    console.log(`O Herói de nome ${nickname} está no nível de ${ascendente}`);
} else if (nivel <= 10000) {
    console.log(`O Herói de nome ${nickname} está no nível de ${imortal}`);
} else {
    console.log(`O Herói de nome ${nickname} está no nível de ${radiante}`);
}