// function caesarCypher(secret, shift) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let encrypted = "";
//     // BEN: You don't have to define this up here since you're not
//     //.     using it until you get to your for loop below, you can define
//     //      it there. I'm not sure if it's more performant to only define it
//     //      once but if it is I'm sure the difference is negligible
//     let shiftedIndex;
//     /**
//      *  BEN: Love the pseudo-code you wrote here - really great work!
//      *   One thing that I like doing while writing my code is interloping the
//      *   pseudocode with the real code thats most relevant to it
//      *     i.e.
//     //define alphabet, encrypted
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     //loop through the secret string
//     for(var i=0; i<secret.length; i++)
//      */   
      
//     //define alphabet, encrypted
//     //loop through the secret string
//     //if secret string has space, the encrypted string should just print the space
//     //loop through the alphabet
//     //if secret string char === alphabet char
//     //then shift the index of the alphabet to the shifted value
//     //save that to the encrypted string
//     //if shiftedIndex >= alphabet length then we have to subtract that length so it loops from the beginning
//     for (let i = 0; i < secret.length; i++) {
//       // BEN: This condition is great, though after running this condition
//       //       your code continues into the rest of your loop and goes through the
//       //.      whole alphabet, checking to see if "" === letter
//       //       To prevent this, I'd either add an "else" block around your for
//       //       loop to communicate that it should only run when the letter isn't
//       //       a space or I'd make use of the "continue;" keyword to move on after
//       //       adding the space to your encrypted key
//       if (secret[i] === " ") {
//         encrypted += secret[i];
//         continue;
//       }
//       for (let j = 0; j < alphabet.length; j++) {
//         if (secret[i] === alphabet[j]) {
//           shiftedIndex = j + shift;
//           // BEN: This is great! Another option you have here to save lines is
//           //       to make use of the "%"(modulo) operator, which'll cause numbers
//           //.      to wrap back around once they pass your alphabets length.
//           //       By using this you'll be able to cut out your if...else
//           // ex: encrypted += alphabet[shiftedIndex % alphabet.length]
//           if (shiftedIndex >= alphabet.length) {
//             encrypted += alphabet[shiftedIndex - alphabet.length];
//           } else {
//             encrypted += alphabet[shiftedIndex];
//           }
//         }
//       }
//     }
//     return encrypted;
//   }
   

