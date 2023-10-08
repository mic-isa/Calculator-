const screenDisplay = document.getElementById("screen");
const buttons = document.querySelectorAll("button");


// Get the input element

buttons.forEach((button) => {
    button.addEventListener("click", function() {              
         const buttonText = button.textContent;

        if (buttonText === "=") {
// Use eval to calculate the expression and set the result to the input field        
                screenDisplay.value = eval(screenDisplay.value);
            
        } else if (buttonText === "AC") {
            // Clear the input field        
            screenDisplay.value = "";
        } else if (buttonText === "DE") {
            // Remove the last character
            screenDisplay.value = screenDisplay.value.slice(0, -1);
        } else {
            // Append the button's content to the input field
            screenDisplay.value += buttonText;
        }
    });
});


