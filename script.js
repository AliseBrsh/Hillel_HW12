let array = document.querySelector('p');
let arrayWord = array.innerText.split(' ');

array.before(arrayWord.length);

const colorArray = arrayWord.map(function(word){
    if (word.length >= 8) {
        return `<span class = "red">${word}</span>`;
    }
    return word;
});

const colorText = colorArray.join(' ');

let fragment = (` "https://forcemipsum.com/"`);
array.append(fragment);

const result = colorText
    .replaceAll('.', '<br/>')
    .replaceAll('!', '!<br/>')
    .replaceAll('?', '?<br/>')

    .replace(/!/g, "&#128556;")
    .replace(/\?/g, "&#129488;");
array.innerHTML = result;



