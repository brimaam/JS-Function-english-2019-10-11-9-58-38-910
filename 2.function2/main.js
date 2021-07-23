function palindrome(message){
    for (let i=0;i<message.length/2; i++){
        if(message[i] !== message[message.length -1 - i]){
            return false;
        }
    }
    return true;
}

palindrome('hello'); 
palindrome('abcba'); 

//displaying output
document.write("<p>"+ palindrome('hello') +"</p>")
console.log(palindrome('hello'));
document.write("<p>"+ palindrome('abcba') +"</p>")
console.log(palindrome('abcba'));