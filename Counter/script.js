const inputField = document.getElementById('text')
const alphabet = "abcdefghijklmnopqrstuvwxyz".concat("abcdefghijklmnopqrstuvwxyz".toUpperCase()).split('')

inputField.addEventListener('input', () => {
    let letters = 0
    let words = inputField.value.trim().split(' ')
    words.forEach(word => {
        for(var i=0; i < word.length; i++) {
            alphabet.includes(word[i]) ? letters++ : ''
        }
    });
    document.querySelector(".word-count").textContent = words.length;
    document.querySelector(".letter-count").textContent = letters;
})


