var array = [
    ["A", "B", "C", "D", "E"], //0
    ["F", "G", "H", "I", "J"], //1
    ["K", "L", "M", "N", "O"], //2
    ["P", "Q", "R", "S", "T"], //3
    ["U", "V", "W", "X", "Y"] //4
]
function kriptirai(purviIndex, vtoriIndex) {
    var rowPurviIndex = 0;
    var colPurviIndex = 0;
    var rowVtoriIndex = 0;
    var colVtroiIndex = 0;
    var arrayRowLenght = array[0].length - 1
    var kriptText = ""
    var rowsToRoll = 0;
    var colsToRoll = 0;

    for (var row = 0; row < array.length; row++) {
        for (var col = 0; col < array[row].length; col++) {
            if (purviIndex == array[row][col]) {
                rowPurviIndex = row
                colPurviIndex = col
            }
            if (vtoriIndex == array[row][col]) {
                rowVtoriIndex = row
                colVtroiIndex = col
            }
        }
    }
    if (rowPurviIndex != rowVtoriIndex) {
        if (colPurviIndex != colVtroiIndex) {     //razmenqme kolonite
            colsToRoll = colPurviIndex
            colPurviIndex = colVtroiIndex
            colVtroiIndex = colsToRoll
        }
        if (colPurviIndex == colVtroiIndex) {     // redovete +2
            if (rowPurviIndex >= 3) {
                rowPurviIndex -= 3
            }
            else {
                rowPurviIndex += 2
            }
            if (rowVtoriIndex >= 3) {
                rowVtoriIndex -= 3
            }
            else {
                rowVtoriIndex += 2
            }
        }
    }
    if (rowPurviIndex == rowVtoriIndex) {
        if (colPurviIndex != colVtroiIndex) {    //cols+1
            if (colPurviIndex >= arrayRowLenght) {
                colPurviIndex = 0;
            }
            else {
                colPurviIndex++;
            }
            if (colVtroiIndex >= arrayRowLenght) {
                colVtroiIndex = 0;
            }
            else {
                colVtroiIndex++;
            }
        }
        if (colPurviIndex == colVtroiIndex) {     // cols +1 ??
            if (colPurviIndex >= arrayRowLenght) {
                colPurviIndex = 0;
                colVtroiIndex = 0;
            }
            else {
                colPurviIndex++;
                colVtroiIndex++;
            }
        }

    }
    kriptiranText = array[rowPurviIndex][colPurviIndex] + array[rowVtoriIndex][colVtroiIndex]
    return kriptiranText;
}
function dekriptirai(purviIndex, vtoriIndex) { //todo
    var rowPurviIndex = 0;
    var colPurviIndex = 0;
    var rowVtoriIndex = 0;
    var colVtroiIndex = 0;
    var arrayRowLenght = array[0].length - 1
    var kriptText = ""
    var rowsToRoll = 0;
    var colsToRoll = 0;

    for (var row = 0; row < array.length; row++) {
        for (var col = 0; col < array[row].length; col++) {
            if (purviIndex == array[row][col]) {
                rowPurviIndex = row
                colPurviIndex = col
            }
            if (vtoriIndex == array[row][col]) {
                rowVtoriIndex = row
                colVtroiIndex = col
            }
        }
    }
    if (rowPurviIndex != rowVtoriIndex) {
        if (colPurviIndex != colVtroiIndex) {     //razmenqme kolonite
            colsToRoll = colPurviIndex
            colPurviIndex = colVtroiIndex
            colVtroiIndex = colsToRoll
        }
        if (colPurviIndex == colVtroiIndex) {     // redovete -2
            if (rowPurviIndex <= 1) {
                rowPurviIndex += 3
            }
            else {
                rowPurviIndex -= 2
            }
            if (rowVtoriIndex <=1 ) {
                rowVtoriIndex += 3
            }
            else {
                rowVtoriIndex -= 2
            }
        }
    }
    if (rowPurviIndex == rowVtoriIndex) {
        if (colPurviIndex != colVtroiIndex) {    //cols+1
            if (colPurviIndex >= arrayRowLenght) {
                colPurviIndex = 0;
            }
            else {
                colPurviIndex++;
            }
            if (colVtroiIndex >= arrayRowLenght) {
                colVtroiIndex = 0;
            }
            else {
                colVtroiIndex++;
            }
        }
        if (colPurviIndex == colVtroiIndex) {     // cols +1 ??
            if (colPurviIndex >= arrayRowLenght) {
                colPurviIndex = 0;
                colVtroiIndex = 0;
            }
            else {
                colPurviIndex++;
                colVtroiIndex++;
            }
        }

    }
    kriptiranText = array[rowPurviIndex][colPurviIndex] + array[rowVtoriIndex][colVtroiIndex]
    return kriptiranText;
}

var text = "az ne iskam da ucha".toUpperCase().split(' ').join('');
var ThisText = " ";
var toOriginal = " "

for (var index = 0; index < text.length - 1; index += 2) {
    ThisText += kriptirai(text.charAt(index), text.charAt(index + 1))
}
for (var index = 0; index < text.length-1; index+=2) {
    toOriginal+=dekriptirai(text.charAt(index,text.charAt(index+1)))
    
}
console.log(kriptirai("I", "J"))
console.log(text)
console.log(ThisText)
console.log(dekriptirai)


//TODO dekriptirai
// Runtime.totalMemory()