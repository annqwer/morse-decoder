const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    // write your solution here
    var result = '',
    letters = expr.match(/.{1,10}/g);   //массив по 10

    letters.forEach(function (letter){
        let morseString = '';

        if (letter.includes('*')) {
            result += ' ';
            return;
        }

        letter.match(/.{1,2}/g).forEach(function(el) { //по 2
        switch (el) {
            case "10": morseString +="."; break;
            case "11": morseString +="-"; break;
        }
                
        });

         result += MORSE_TABLE[morseString];                            


    });

    return result;

}

module.exports = {
    decode
}