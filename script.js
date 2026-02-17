const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
    "You are the only person on earth who can use your ability. - Zig Ziglar",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
];

const quoteButton = document.getElementById('quote-button');
const quoteText = document.getElementById('quote');

quoteButton.addEventListener("click", ()=>{
    // const randomIndex = Math.floor(Math.random() * quotes.length);

    // quoteText.textContent = quotes[randomIndex];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
})