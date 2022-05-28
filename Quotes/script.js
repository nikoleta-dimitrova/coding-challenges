const quoteText = document.querySelector('.quote');
const quoteBtn = document.querySelector('button');
const authorName = document.querySelector('.author .name');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');

function randomQuote() {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });

}

soundBtn.addEventListener('click', () =>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener('click', () =>{
   navigator.clipboard.writeText(quoteText.innerText);
})

quoteBtn.addEventListener('click', randomQuote)