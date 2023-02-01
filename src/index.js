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
    let array = [];
    for (let i = 0; i < expr.length; i = i + 10){
        array.push(expr.slice(i, i + 10));
    }

    let newArr = [];
    array.forEach(function(item){
        for(let i = 0; i < item.length; i++){
            if(item[i] === '1'){
                newArr.push(item.slice(i, 10));
                i = 11;
            }
            if(item[i] === '*'){
                newArr.push(item.slice(i, 10));
                i = 11;
            }
        }
    });

    let symbolArr = [];
    newArr.forEach(function(item, index){
        symbolArr[index] = '';
        for(let i = 0; i < item.length; i = i + 2){
            if(item.slice(i, i + 2) === '10'){
                symbolArr[index] += '.';
            } 
            if(item.slice(i, i + 2) === '11'){
                symbolArr[index] += '-';
            }
            if(item.slice(i, i + 2) === '**'){
                symbolArr[index] += ' ';
                i = item.length;
            }
        }
    })

    let result = '';
    symbolArr.forEach(function(item, index, array){
        if(item === ' '){
            result += ' ';
        }
        for (let key in MORSE_TABLE){
            if(item === key) {
                result += MORSE_TABLE[key];
            }
        }
    })

    return result;
}

module.exports = {
    decode
}