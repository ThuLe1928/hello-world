function handlingButtonSwapClicked() {               
    var inputAsArray = [];
    inputAsArray[0] = parseInt (document.getElementById("a").value);
    inputAsArray[1] = parseInt (document.getElementById("b").value);
    console.log(inputAsArray);
    swapTwoVariables(inputAsArray);
    document.getElementById("a").value = inputAsArray[0];
    document.getElementById("b").value = inputAsArray[1];
}
function swapTwoVariables (twoVariablesAsArray) {
    twoVariablesAsArray[0] += twoVariablesAsArray[1];
    twoVariablesAsArray[1] = twoVariablesAsArray[0] - twoVariablesAsArray[1];
    twoVariablesAsArray[0] = twoVariablesAsArray[0] - twoVariablesAsArray[1];
}