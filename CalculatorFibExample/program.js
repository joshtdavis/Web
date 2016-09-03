// computes the Fibonacci number given user input
function fib(){
	var number = document.getElementById("fibTerminput").value;
	var first = 0;
	var second = 1;
	var next;
	document.getElementById("Answer").innerHTML = "";
	for(var i=0;i<number;i++){
		if(i<=1){
			next = i;
		}else{
			next = first + second;
			first = second;
			second = next;
		}
		// line gives all Fibonacci numbers up to n
		//document.getElementById("Answer").innerHTML += " " + next;
	}
	document.getElementById("fibTerm").innerHTML = number;
	
	// correctly adds the ending to the nth number
	// 11-13 are exceptions to this rule in the english language
	if(document.getElementById("fibTerminput").value >=11 && document.getElementById("fibTerminput").value<=13){
		document.getElementById("fibTerm").innerHTML += "th ";
	}
	else{
		switch(document.getElementById("fibTerminput").value.toString().substr(document.getElementById("fibTerminput").value.toString().length - 1)){
			case '1':
				document.getElementById("fibTerm").innerHTML += "st ";
				break;
			case '2':
				document.getElementById("fibTerm").innerHTML += "nd ";
				break;
			case '3':
				document.getElementById("fibTerm").innerHTML += "rd ";
				break;
			default:
				document.getElementById("fibTerm").innerHTML += "th ";
				break;
		}
	}
	document.getElementById("Answer").innerHTML = next;
}
var firstNum = false;
var secondNum = false;
var operation = 'o';

// input number into field
function inputNumber(number){
	document.getElementById("screen").innerHTML += number;
}

// reads in first number and set the operation type
function inputOperation(sign){
	if(firstNum==false){
		firstNum = parseFloat(document.getElementById("screen").innerHTML);
		document.getElementById("history").innerHTML += firstNum;
	}
	else{
		// needed for chaining operations
		if(!secondNum==false){
			firstNum = parseFloat(document.getElementById("screen").innerHTML);
		}
		document.getElementById("history").innerHTML += firstNum;
	}
	document.getElementById("screen").innerHTML = "";
	operation = sign;
	document.getElementById("history").innerHTML += " " + sign + " ";
}

// some light error checking
// reads in second number then 
// attempts to calculate desired operation
function performCalc(){
	if(firstNum==false){
		//give error
		alert("Need to input first number for calculation.");
	}
	else{
		if(document.getElementById("screen").innerHTML != ""){
			secondNum = parseFloat(document.getElementById("screen").innerHTML);
			document.getElementById("history").innerHTML += secondNum;
			switch(operation){
				case '/':
					document.getElementById("screen").innerHTML = firstNum/secondNum;
					document.getElementById("history").innerHTML += " = " +(firstNum/secondNum) + ": ";
					break;
				case '*':
					document.getElementById("screen").innerHTML = firstNum*secondNum;
					document.getElementById("history").innerHTML += " = " +(firstNum*secondNum) + ": ";
					break;
				case '-':
					document.getElementById("screen").innerHTML = firstNum-secondNum;
					document.getElementById("history").innerHTML += " = " +(firstNum-secondNum) + ": ";
					break;
				case '+':
					document.getElementById("screen").innerHTML = firstNum+secondNum;
					document.getElementById("history").innerHTML += " = " +(firstNum+secondNum) + ": ";
					break;
			}
		}
		else{
			//give error
			alert("Need to give Second number for calculation.");
		}
	}
}


// resets the application data
function clearScreen(){
	document.getElementById("screen").innerHTML = "";
	document.getElementById("history").innerHTML = "";
	firstNum=false;
	secondNum=false;
}