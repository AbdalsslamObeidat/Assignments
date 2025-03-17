function calculateFactorial() {
    let x = Number(document.getElementById("in").value);
    let result = fact(x);
    document.getElementById("output").textContent = `Factorial: ${result}`;
}

function fact(v) {
    let result = 1; 
    for (let i = v; i > 1; i--) {
        result *= i;
    }
    return result;
}
