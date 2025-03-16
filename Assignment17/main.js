document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".b");
    const resultInput = document.getElementById("resultField");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const num1 = parseFloat(document.getElementById("1").value);
            const num2 = parseFloat(document.getElementById("2").value);
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                resultInput.value = "Enter valid numbers";
                return;
            }

            switch (this.id) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                    break;
                case "%":
                    result = num2 !== 0 ? num1 % num2 : "Cannot divide by zero";
                    break;
                default:
                    result = "Error";
            }

            resultInput.value = result;
        });
    });
});
