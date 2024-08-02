var display = document.getElementsByClassName("displayView")[0];
function one() {
    display.value += 1;
}
function two() {
    display.value += 2;
}
function three() {
    display.value += 3;
}
function four() {
    display.value += 4;
}
function five() {
    display.value += 5;
}
function six() {
    display.value += 6;
}
function seven() {
    display.value += 7;
}
function eight() {
    display.value += 8;
}

function nine() {
    display.value += 9;
}
function zero() {
    display.value += 0;
}
function doubleZero() {
    display.value += "00";
}
function point() {
    display.value += ".";
}
function divide() {
    display.value += "/";
}
function multiply() {
    display.value += "X"
}
function add() {
    display.value += "+"
}
function sub() {
    display.value += "-"
}
function percentage() {
    display.value += "%"
}
function equalTo() {
    let val = display.value;
    if (val.includes("X")) {
        let newVal = val.replace("X", "*")
        display.value = eval(newVal);

    }
    else if (val.includes("%")) {
        let newVal = val.replace("%", "/");
        let finVal = (newVal) +"* 100";
        let value = eval(finVal);
        display.value=value+"%";
            if(val.includes("%0")){
                display.value="error"
            }
        }
    
    else {
        let output = eval(display.value);
        display.value = output;
    }
}
function Ac() {
    display.value = null;
}
function del() {
    let s = display.value;
    let len = s.length;
    let output = s.slice(0,len - 1)
    display.value = output;
}