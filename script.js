function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backSpace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        document.getElementById("display").value = new Function('return ' + expression)();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

