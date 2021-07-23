function countWords(message){
    var counter = message.split(" ").length;
    return counter;
}

countWords('Good morning, I love JavaScript.');


//displaying output
document.write("<p>"+ countWords('Good morning, I love JavaScript.') +"</p>")
console.log(countWords('Good morning, I love JavaScript.'));