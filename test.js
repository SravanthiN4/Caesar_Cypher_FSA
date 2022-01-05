index.js
function caesarCypher(secret,shift) {
    //define alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    //define encrypted
    let encrypted = "";

    //loop through the secret string
    for (let i = 0; i < secret.length; i++) {
        let shiftedIndex;
        if(secret[i] === " ") {
            encrypted += secret[i];
            continue;
        } 
            //loop through the alphabet
            for (let j = 0; j < alphabet.length; j++) {
                //compare the alphabet character to secret character, if the character is found then shift the index
                if(secret[i] === alphabet[j]) {
                    //create a shiftedIndex 
                    shiftedIndex = j + shift;

                    //if the shifted index reaches the end of the alphabet, then the loop should be repeated from the beginning of the alphabet
                    // if(shiftedIndex >= alphabet.length) {
                    //     encrypted += alphabet[shiftedIndex-(alphabet.length)];
                    // } else {
                    //     //new encrypted string will have the shifted index character
                    //     encrypted += alphabet[shiftedIndex];
                    // }

                    encrypted += alphabet[shiftedIndex%alphabet.length];

                    

                }
            }
        

    }
    return encrypted;
}