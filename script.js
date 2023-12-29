const quotes = [{
    quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
    writer: `- Franklin D. Roosevelt`
}, {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    writer: `- Eleanor Roosevelt`
}, {
    quote: `"The only way to do great work is to love what you do."`,
    writer: `- Steve Jobs`
}, {
    quote: `"Believe you can and you're halfway there."`,
    writer: `- Theodore Roosevelt`
}, {
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    writer: ` - Winston Churchill`
}, {
    quote: `"Your time is limited, don't waste it living someone else's life."`,
    writer: `- Steve Jobs`
}, {
    quote: `"The only person you are destined to become is the person you decide to be."`,
    writer: `- Ralph Waldo Emerson`
}, {
    quote: `"Don't watch the clock; do what it does. Keep going."`,
    writer: `- Sam Levenson`
}, {
    quote: `"You miss 100% of the shots you don't take."`,
    writer: `- Wayne Gretzky`
}, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    writer: `- Nelson Mandela`
}, {
    quote: `"It always seems impossible until it's done."`,
    writer: ` - Nelson Mandela`
}]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})



