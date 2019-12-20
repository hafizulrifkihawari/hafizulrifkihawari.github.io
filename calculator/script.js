function getNumber(num){
    let output = document.getElementById("output")
    temp = output.value
    if (temp.length === 0 || temp[temp.length-1].charCodeAt(0) !== 37){
        switch(num){
            case 0:
                output.value += "0";
                break
            case 1:
                output.value += "1";
                break
            case 2:
                output.value += "2";
                break
            case 3:
                output.value += "3";
                break
            case 4:
                output.value += "4";
                break
            case 5:
                output.value += "5";
                break
            case 6:
                output.value += "6";
                break
            case 7:
                output.value += "7";
                break
            case 8:
                output.value += "8";
                break
            case 9:
                output.value += "9";
                break
        }
    }
}

function getOperand(operand){
    output = document.getElementById("output")
    temp = output.value
    if (temp[temp.length-1].charCodeAt(0) >= 48 && temp[temp.length-1].charCodeAt(0) <= 57 || temp[temp.length-1].charCodeAt(0) === 37){
        switch(operand){
            case "+":
                temp = "+"
                output.value += temp
                break
            case "-":
                temp = "-"
                output.value += temp
                break
            case "/":
                temp = "/"
                output.value += temp
                break
            case "*":
                temp = "*"
                output.value += temp
                break
        }
    }
    return operand
}


function dot(){
    output = document.getElementById("output")
    temp = output.value
    if (temp[temp.length-1].charCodeAt(0) === 46){
        temp = temp.slice(0, temp.length-1)
        output.value = temp
    } else if (temp[temp.length-1].charCodeAt(0) >= 48 && temp[temp.length-1].charCodeAt(0) <= 57 || temp[temp.length-1].charCodeAt(0) !== 37){
        found = false
        for (var i = 0; i < temp.length; i++){
            if (temp[i].charCodeAt(0) === 46){
                found = true
            }
    
            if (temp[i].charCodeAt(0) >= 42 && temp[i].charCodeAt(0) <= 47 && temp[i].charCodeAt(0) !== 46){
                found = false
            }
        }
        if (!found){
            temp = "."
            output.value += temp
        }
    }
}

function integer(minus){
    output = document.getElementById("output")
    temp = output.value
    res = ""

    if (temp[0] === minus){
        temp = temp.slice(1)
        output.value = temp
    } else if (temp[0] !== minus){
        res += "-" + temp
        output.value = res
    }
}

function clearOutput(){
    document.getElementById("output").value = ""
    document.getElementById("answer").value = ""
}

function backSpace(){
    let output = document.getElementById("output")
    temp = output.value
    if (temp.length > 0){
        temp = temp.slice(0, temp.length-1)
        output.value = temp
    }
}


function keyCode(event) {
    var x = event.keyCode;
    if (x == 13){
        return compute()
    }

    if (x === 27){
        return clearOutput()
    }
}

function compute(){
    let output = document.getElementById("output")
    temp = output.value
    temp = eval(temp)

    document.getElementById("answer").value = temp
}