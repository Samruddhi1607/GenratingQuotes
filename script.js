// Stores two lists of quotes

const quotes = {
    inspirational: [
        "\"The only way to do great work is to love what you do.\"",
        "\"Believe you can and you're halfway there.\"",
        "\"Act as if what you do makes a difference. It does.\"",
        "\"Happiness depends upon ourselves.\"",
        "\"What we think, we become.\""
    ],
    motivational: [
        "\"Don't watch the clock; do what it does. Keep going.\"",
        "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\"",
        "\"It always seems impossible until it is done.\"",
        "\"Your limitation—it's only your imagination.\"",
        "\"Push yourself, because no one else is going to do it for you.\""
    ]
};

let lastCategory = 'inspirational';

function getQuote(type) {
    lastCategory = type;
    const quoteElement = document.getElementById("quote");
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes[type].length);
        quoteElement.textContent = quotes[type][randomIndex];
        document.body.style.background = getRandomColor();
        quoteElement.style.color = getRandomColor();
        quoteElement.style.opacity = 1;
    }, 300);
}
// Generates a random hex color for background and text.
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
