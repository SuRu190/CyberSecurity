function encryptMessage() {
 
    const inputMessage = document.getElementById("inputMessage").value;
    // console.log(inputMessage)

    const encryptedMessage = btoa(inputMessage);

    document.getElementById("encryptedMessage").innerHTML = `<strong>Encrypted Message:</strong>:
    ${encryptedMessage}`;
    //const h1 = document.getElementById('h1').innerHTML = "JS is working properly";

}

function decryptMessage() {

    const inputEncryptedMessage = document.getElementById("inputEncryptedMessage").value;
    // console.log(inputEncryptedMessage)

    const decryptedMessage = atob(inputEncryptedMessage);

    document.getElementById("decryptedMessage").innerHTML = `<strong>Decrypted Message:</strong>:
    ${decryptedMessage}`;
    

}