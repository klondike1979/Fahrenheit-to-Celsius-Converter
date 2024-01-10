
// console.log (convertTemp(20));

function  convertTemp() {
    // Get the input value
    var userInput = document.getElementById('input').value;
   
    let fahrenheit = userInput * 2 + 30;
	alert(userInput + "*C" + " is " + fahrenheit + "*F");
}
