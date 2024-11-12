const emojis = [
    "😍", "😍", "😎", "😎", "😁", "😁", "😆", "😆",
    "🤝", "🤝", "🤗", "🤗", "🤩", "🤩", "🤪", "🤪"
];
let openCards = [];
let timerInterval;
let timerSeconds = 0;

const emojiGrid = document.getElementById('emojiGrid');
const timerDisplay = document.getElementById('timer');
const restartButton = document.getElementById('restartButton');

// Função para embaralhar os emojis
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Função para criar um card
function createCard(emoji) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.emoji = emoji;
    card.textContent = emoji; // Mostra o emoji diretamente
    card.addEventListener('click', () => flipCard(card));
    return card;
}

// Função para iniciar o jogo
function startGame() {
    clearInterval(timerInterval);
    timerSeconds = 0;
    timerDisplay.textContent = '0';
    emojiGrid.innerHTML = ''; // Limpa o grid antes de adicionar os cards
    openCards = [];
    
    shuffle(emojis);
    emojis.forEach(emoji => {
        const card = createCard(emoji);
        emojiGrid.appendChild(card);
    });
    
    timerInterval = setInterval(() => {
        timerSeconds++;
        timerDisplay.textContent = timerSeconds;
    }, 1000);
}

// Função para reiniciar o jogo
function restartGame() {
    startGame();
}

// Função para virar um card
function flipCard(card) {
    if (openCards.length === 2 || card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }
    
    card.classList.add('flipped');
    openCards.push(card);
    
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// Função para checar se há uma correspondência
function checkMatch() {
    const [card1, card2] = openCards;
    if (card1.dataset.emoji === card2.dataset.emoji) {
        card1.classList.add('matched');
        card2.classList.add('matched');
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    openCards = [];
    checkVictory();
}

// Função para verificar a condição de vitória
function checkVictory() {
    const matchedCards = document.querySelectorAll('.matched').length;
    if (matchedCards === emojis.length) {
        clearInterval(timerInterval);
        alert(`Parabéns! Você completou o jogo em ${timerSeconds} segundos.`);
    }
}

// Evento para o botão de reinício
restartButton.addEventListener('click', restartGame);

// Iniciar o jogo automaticamente ao carregar a página
window.onload = startGame;
