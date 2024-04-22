function firstChar(text) {
  // your code here
		let newtext = text.trim().split(" ");
    	console.log(newtext[0][0])
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
