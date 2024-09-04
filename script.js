console.log(window)

// alert("Show Alert")

let replacedElement = document.getElementById("replaced");

let replacedText = replacedElement.innerText;

let updatedText = replacedText.replaceAll("Ahmad" , "Muhammad")

console.log(replacedText)

console.log(updatedText)

replacedElement.innerText = updatedText;
