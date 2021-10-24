let [text, count, letters] = function vowelCounter() {

    const azVowels = ['a', 'o', 'u', 'e', 'i', 'ə', 'ü', 'ö', 'ı'];
    const ruVowels = ['а', 'е', 'у', 'э', 'ю', 'я', 'и', 'о', 'ы', 'ё'];
    const enVowels = ['a', 'e', 'i', 'o', 'u'];

    let language = prompt('please select one of the following languages: az, ru, en')
    let text = prompt('please enter some word or text:');
    let result = [];

    switch(language) {
        case 'az':
            vowels = azVowels;
            break;
        case 'ru':
            vowels = ruVowels;
            break;
        case 'en':
            vowels = enVowels;
            break;
    }

    for (let letter of text.toLowerCase()) {
        vowels.forEach( vowel => {
            if(letter == vowel) {
                result.push(letter);
            }
        })
    } 
    
    return [text, result.length, result]
    }()
    
    console.log(`the number of vowels in the ${text} is ${count} and it has the following vowels: ${letters}`)