 // Function that display value
var result
var lastval = 0
function dis(val) {
    check(val)
    setAC()
    result = false
    document.getElementById("result").value += val
    lastval = val
}

function setAC(){
    if(document.getElementById("result").value == 0) document.getElementById("ac").value = "AC"
    else document.getElementById("ac").value = "C"
}

function check(val){
    if(result && (val >=0 && val <= 9)) clr()
    if((lastval == '+' || lastval == '-' || lastval == '*' || lastval == '/') 
    && (val == '+' || val == '-' || val == '*' || val == '/') && !(lastval == '*' && val == '-')) del()
}
function del(){
    let x = document.getElementById("result").value
    clr()
    document.getElementById("result").value += x.slice(0, x.length - 1)
    setAC()
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
   dis(event.key)
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    console.log(3)
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        solve();
    }
}

// Function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
    result = true
    console.log(y)
}

// Function that clear the display
function clr() {
    document.getElementById("result").value = ""
    setAC()
}