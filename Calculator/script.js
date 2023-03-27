var operation;
var result;

function definitionOperation(selected) { 
	operation = selected;
}

function func() {
	
	let num1 = Number(document.getElementById("num1").value);
	let num2 = Number(document.getElementById("num2").value);

	switch (operation) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
	}

	let out = document.getElementById('result');
	out.innerHTML = result;
}

