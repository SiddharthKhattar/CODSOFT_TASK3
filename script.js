document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const placeholder = document.querySelector(".placeholder");
    const result = document.querySelector(".result");
    const buttons = document.querySelectorAll(".buttons button");
    let currentInput = "";
    let currentOperator = "";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (buttonText === "C") {
                currentInput = "";
                currentOperator = "";
            } else if (buttonText === "DEL") {
                currentInput = currentInput.slice(0, -1);
            } else if (["+", "-", "*", "/", "%"].includes(buttonText)) {
                if (currentInput) {
                    currentInput += " " + buttonText + " ";
                    currentOperator = buttonText;
                }
            } else if (buttonText === "=") {
                if (currentInput) {
                    const expression = currentInput.replace(/ /g, "");
                    try {
                        const resultValue = eval(expression);
                        result.textContent = resultValue;
                        currentInput = resultValue.toString();
                        currentOperator = "";
                    } catch (error) {
                        result.textContent = "Error";
                    }
                }
            } else {
                currentInput += buttonText;
            }

            display.textContent = currentInput;
            placeholder.style.opacity = currentInput ? 0 : 0.5;
            placeholder.style.display = currentInput ? "none" : "block";
        });
    });
});
