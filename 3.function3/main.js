function alphabetSort(message){
    var sortArr = message.split("");
    sortArr.sort();
    var sortedMsg = sortArr.join("");

    return sortedMsg;
}
  
alphabetSort('hello');

//displaying output
document.write("<p>"+ alphabetSort('hello') +"</p>")
console.log(alphabetSort('hello'));
