var displayString = "";
var string = [];
var operations = [];
var indexOperations = [];

function appendVal(value){
    displayString = displayString.concat(value);
    document.getElementById("display").innerHTML = displayString;
}

function clearVal(){
    displayString = "";
    document.getElementById("display").innerHTML = displayString;
    string = [];
    operations = [];
    indexOperations = [];
}

function operationVal(value){
    if(indexOperations.length == 0){
        string.push(displayString);
    }else{
        string.push(displayString.substring(indexOperations[indexOperations.length-1], displayString.length));
    }
    operations.push(value);
    displayString = displayString.concat(" ");
    displayString = displayString.concat(value);
    displayString = displayString.concat(" ");
    indexOperations.push(displayString.length);
    document.getElementById("display").innerHTML = displayString;
}

function onEquals(){
    if(operations.length == 0){
        return;
    }
    string.push(displayString.substring(indexOperations[indexOperations.length-1], displayString.length));
    displayString = "";
    while(string.length != 1){
        var i = 0;
        if(operations[i] == "+"){
            var result = parseFloat(string[i]) + parseFloat(string[i+1]);
            displayString = result.toString();
            string.shift();
            string.shift();
            operations.shift();
            string.unshift(displayString);
        }
        if(operations[i] == "-"){
            var result = parseFloat(string[i]) - parseFloat(string[i+1]);
            displayString = result.toString();
            string.shift();
            string.shift();
            operations.shift();
            string.unshift(displayString);
        }
        if(operations[i] == "÷"){
            var result = parseFloat(string[i]) / parseFloat(string[i+1]);
            displayString = result.toString();
            string.shift();
            string.shift();
            operations.shift();
            string.unshift(displayString);
        }
        if(operations[i] == "X"){
            var result = parseFloat(string[i]) * parseFloat(string[i+1]);
            displayString = result.toString();
            string.shift();
            string.shift();
            operations.shift();
            string.unshift(displayString);
        }
    }
    indexOperations = [];
    document.getElementById("display").innerHTML = string[0];
    string = [];
}

function onBackSpace(){
    if(displayString.charAt(displayString.length - 1) == ' '){
        displayString = displayString.substring(0,displayString.length - 1);
        displayString = displayString.substring(0,displayString.length - 1);
        operations.pop();
        displayString = displayString.substring(0,displayString.length - 1);
    }else{
        displayString = displayString.substring(0,displayString.length - 1);
        string.pop();
    }
    document.getElementById("display").innerHTML = displayString;
}
