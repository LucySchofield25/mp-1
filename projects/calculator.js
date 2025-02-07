
function showResult(result){
    let outputNum = document.getElementById("output");
    outputNum.innerHTML = "Result: " + result;
    if (result < 0){
        outputElement.style.color = "red";
    }else{
        outputElement.style.color = "black";
    }
}

function addition(){
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    let result = num1 + num2;
    showResult(result);
}
function subtract(){
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    let result = num1 - num2;
    showResult(result);
}
function multiply(){
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    let result = num1 * num2;
    showResult(result);
}
function divide(){
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    let result = num1 / num2;
    showResult(result);
}
function power(){
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1)
    num2 = Number(num2)
    let startNum = 1;
    for(let i=0; i<num2;i++){
        startNum= num1 * startNum;
    }
    let result = startNum;
    showResult(result);
}
function clearFields(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "black";
}
