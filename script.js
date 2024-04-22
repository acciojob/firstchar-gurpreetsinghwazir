function firstChar(text) {
  // your code here
		let newtext = text.trim().split(" ");
    	
    	if (newtext.length === 0 || newtext[0] === ""){
    	    	console.log(`""`);
    	}else{
    	    console.log(newtext[0][0]);
    	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
