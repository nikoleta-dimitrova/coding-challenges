function inputOutput() {
    let input = document.getElementById('input').value;
    let words = input.split(' ');
    // .split creates an array from a string based on the parameter in the brackets
    let outputArray = [];
    let output = '';

    for (let i = 0; i < words.length; i++) {
        outputArray.push(capitalizeFirstLetter(words[i]));
    }

    for (let i = 0; i < outputArray.length; i++) {
        output += `${outputArray[i]} `;
    } //this loops through the outputArray and adds every memeber of the array to the "output" variable

    document.getElementById('output').innerText = output;
    console.log(outputArray);
}

function capitalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1)
} // this method takes a string as input at makes the first letter of the string captal