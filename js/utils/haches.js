const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= '';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}
function hashFunction(key) {
    const splittedWord = key.toLowerCase().split("");
    const codes = splittedWord.map((letter) => `${letter}${String(letter).charCodeAt(0)}`);
    return codes.join("");
}

let hash1 = hashFunction("myfirsthash")