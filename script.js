function insert(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.substring(0, display.value.length - 1);
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(parseExpression(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

function parseExpression(expr) {
    expr = expr.replace(/sin/g, 'Math.sin');
    expr = expr.replace(/cos/g, 'Math.cos');
    expr = expr.replace(/tan/g, 'Math.tan');
    expr = expr.replace(/asin/g, 'Math.asin');
    expr = expr.replace(/acos/g, 'Math.acos');
    expr = expr.replace(/atan/g, 'Math.atan');
    expr = expr.replace(/log/g, 'Math.log10');
    expr = expr.replace(/ln/g, 'Math.log');
    expr = expr.replace(/sqrt/g, 'Math.sqrt');
    expr = expr.replace(/cbrt/g, 'Math.cbrt');
    expr = expr.replace(/PI/g, 'Math.PI');
    expr = expr.replace(/E/g, 'Math.E');
    expr = expr.replace(/\^/g, '**');
    expr = expr.replace(/(\d+)!/g, 'factorial($1)');
    expr = expr.replace(/1\//g, '1/');
    return expr;
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
