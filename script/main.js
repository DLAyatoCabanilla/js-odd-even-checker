const inputNum = document.getElementById("inputNum");
const display = document.getElementById("display");

function findNum(n) 
{
    return n == '.'
}
function checkNum()
{
    let num = inputNum.value

    if (Array.from(num.toString()).find(findNum))
    {
        display.innerHTML = "Invalid Number!"
        
    }
    else if (inputNum.value % 2 === 0 && num !== '')
    {
        display.innerHTML = "This Number is an EVEN Number!";
    }
    else if (inputNum.value % 2 > 0 && num !== '')
    {
        display.innerHTML = "This Number is an ODD Number!";
    }
    else if (inputNum.value == "")
    {
        alert("Number cannot be blank");
        display.innerHTML = "";
    }
    else if (num < 0)
    {
        display.innerHTML = "Please enter a valid number";
    }
    console.log(inputNum.value);
}