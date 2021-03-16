const screenText = document.querySelector("#screen-text")

let currentOp = null
let regA = null
let regB = null
let selectedOp = null
let displayValue = ""

function deleteChar()
{
    if(displayValue.length > 0)
    {
        displayValue = displayValue.substring(0, displayValue.length - 1)
        screenText.innerHTML = displayValue
    }
}

function numberPressed(val)
{
    displayValue += val
    screenText.innerHTML = displayValue
}

function operationPressed(op)
{
    if(displayValue.length == 0) return

    let a = parseInt(displayValue)
    if(isNaN(a)) 
    {
        clearCalc()
        return
    }

    if(regA == null)
        regA = a
    else
        regB = a

    displayValue = ""
    screenText.innerHTML = ""
    

    switch(op)
    {
        case "+":
            selectedOp = calcAdd
            break;
        case "-":
            selectedOp = calcSub
            break;
        case "/":
            selectedOp = calcDiv
            break;
        case "*":
            selectedOp = calcMult
            break;
        case "=":
            operation(selectedOp)
            break;
        default:
            break;
    }
}

function calcAdd(a, b)
{
    return a + b
}

function calcDiv(a, b)
{
    return a / b
}

function calcMult(a, b)
{
    return a * b
}

function calcSub(a, b)
{
    return a - b
}

function operation(op)
{
    let output = op(regA, regB) // calculate output
    output = Math.floor(output)

    displayValue = String(output)
    screenText.innerHTML = displayValue // display output
    
    clearCalc() // clean screen + registers

    displayValue = String(output)
    screenText.innerHTML = displayValue
    regA = output

    return output
}

function clearCalc()
{
    displayValue = ""
    screenText.innerHTML = ""

    regA = null
    regB = null
    selectedOp = null
}