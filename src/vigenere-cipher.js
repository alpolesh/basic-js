const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const objAlphabet = {};
alphabet.forEach((item, index) => {
    objAlphabet[item] = index;
});
const objNumbers = Object.assign({}, alphabet);


class VigenereCipheringMachine {
    
    encrypt(message, key) {
        if (!message || !key){
            throw Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        let arrKey = [];
        let keyIndex = 0;
        for (let i = 0; i < message.length; i++){
            if(alphabet.includes(message[i])){
                arrKey.push(key[keyIndex]);
                keyIndex++;
                if (keyIndex > key.length-1){
                    keyIndex = 0;
                }
            }
        }
        let codeMessage = [];
        let codeKey = [];
        for (let i of message){
            if (alphabet.includes(i)){
                codeMessage.push(objAlphabet[i]); 
            }
            else {
                codeMessage.push(i);
            }
        } 
        for (let i of arrKey){
            if (alphabet.includes(i)){
                codeKey.push(objAlphabet[i]); 
            }
            else {
                codeKey.push(i);
            }
        } 
        let codeResult = [];
        for (let i = 0; i < codeMessage.length; i++){
            if (alphabet.includes(message[i])){
                if (codeMessage[i] + codeKey[i] < alphabet.length){
                    codeResult.push(codeMessage[i] + codeKey[i]); 
                }
                else {
                    codeResult.push(codeMessage[i] + codeKey[i] - alphabet.length);
                }
            }
            else {
                codeResult.push(codeMessage[i]);
                codeKey.splice(i-1, 0, '');
            }
        }  
        let encodedMessage = [];
        for (let i = 0; i < codeResult.length; i++){
            if (alphabet.includes(message[i])){
                encodedMessage.push(objNumbers[codeResult[i]]);
            }
            else {
                encodedMessage.push(codeResult[i]);
            }
        }
        return encodedMessage.join(''); 
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key){
            throw Error();
        }
        key = key.toUpperCase();
        let arrKey = [];
        let keyIndex = 0;
        for (let i = 0; i < encryptedMessage.length; i++){
            if(alphabet.includes(encryptedMessage[i])){
                arrKey.push(key[keyIndex]);
                keyIndex++;
                if (keyIndex > key.length-1){
                    keyIndex = 0;
                }
            }
        }
        let codeMessage = [];
        let codeKey = [];
        for (let i of encryptedMessage){
            if (alphabet.includes(i)){
                codeMessage.push(objAlphabet[i]); 
            }
            else {
                codeMessage.push(i);
            }
        } 
        for (let i of arrKey){
            if (alphabet.includes(i)){
                codeKey.push(objAlphabet[i]); 
            }
            else {
                codeKey.push(i);
            }
        }
        let codeResult = [];
        for (let i = 0; i < codeMessage.length; i++){
            if (alphabet.includes(encryptedMessage[i])){
                if (codeMessage[i] - codeKey[i] >= 0){
                    codeResult.push(codeMessage[i] - codeKey[i]); 
                }
                else {
                    codeResult.push(codeMessage[i] - codeKey[i] + alphabet.length);
                }
            }
            else {
                codeResult.push(codeMessage[i]);
                codeKey.splice(i-1, 0, '');
            }
        }
        let encodedMessage = [];
        for (let i = 0; i < codeResult.length; i++){
            if (alphabet.includes(encryptedMessage[i])){
                encodedMessage.push(objNumbers[codeResult[i]]);
            }
            else {
                encodedMessage.push(codeResult[i]);
            }
        }
        return encodedMessage.join(''); 
    }
}
//console.log(new VigenereCipheringMachine().decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'));
module.exports = VigenereCipheringMachine;
