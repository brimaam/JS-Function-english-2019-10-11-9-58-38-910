function reverseString(message){
    let reverseMsg =" ";
    for(let i=1; i<=message.length; ++i){
        reverseMsg = reverseMsg + message[message.length - i];
    }
    return reverseMsg;
}

reverseString('hello');


//displaying output
document.write("<p>"+ reverseString('hello') +"</p>")
console.log(reverseString('hello'));