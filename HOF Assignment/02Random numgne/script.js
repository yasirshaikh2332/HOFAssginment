document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const resultElement = document.getElementById("result");

    generateButton.addEventListener("click", function () {
        resultElement.textContent = "Generating...";
        
        setTimeout(function () {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            resultElement.textContent = "Random Number: " + randomNumber;
        }, 3000); // 3-second delay (3000 milliseconds)
    });
});
