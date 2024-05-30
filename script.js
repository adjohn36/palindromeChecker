const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");



const checkForPalindrome = (input) => {
  const replacedMarks = /[^A-Za-z0-9]/g;
const lowerRegTextInput = input.toLowerCase().replace(replacedMarks, "");
  if (!lowerRegTextInput) {
    alert("Please input a value");
    return;
  } else if (lowerRegTextInput === lowerRegTextInput.split("").reverse().join("")) {
    result.innerHTML = `<h1 class="yes">${input + " is a palindrome"}<br></br><br></br><img width="200px" height="200px" 
    src="cute dinosaur.jpg"</img></h1>`;
  }
  else {
    result.innerHTML = `<h1 class="no">${input + " is not a palindrome"}<br></br><img width="250px" height="250px" 
    src="creepy skeleton.jpg"</img></h1>`;
  };

}


checkButton.addEventListener("click", () => {
  checkForPalindrome(textInput.value);
  textInput.value = "";
    return;
});
textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkForPalindrome(textInput.value);
    textInput.value = "";
    return;
}});
