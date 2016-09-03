var Ax =0;
var Ay =0;

var Bx =0;
var By =0;

var matrixA = [];
var matrixB = [];
var matrixC = [];
function ShowMtxXsize(){
	
	Ay = document.getElementById("AXSize").value;
	Ax = document.getElementById("AYSize").value;
	
	By = document.getElementById("BXSize").value;
	Bx = document.getElementById("BYSize").value;
	if(Ay != Bx){
		alert("Can not Multiply these matrices");
		return;
	}
	var Mtx1Div = "";
	for(var i=0; i<Ax; i++){
		Mtx1Div += "<tr>";
		for( var j=0; j<Ay; j++){
			Mtx1Div += "<td><input type=\"number\" id=\""+ "A"+" " +i+","+j+ "\"></td>";
		}
		Mtx1Div += "</tr><br/ >";
	}
	//document.getElementById("MtxA").removeChild(document.getElementById("Example1"));
	if(document.getElementById("Example1") != null){
		document.getElementById("Example1").remove();
	}
	document.getElementById("MtxA").innerHTML = Mtx1Div;
	var Mtx2Div = "";
	for(var i=0; i<Bx; i++){
		Mtx2Div += "<tr>";
		for( var j=0; j<By; j++){
			Mtx2Div += "<td><input type=\"number\" id=\""+ "B"+" " +i+","+j+ "\"></td>";
		}
		Mtx2Div += "</tr><br/ >";
	}
	//document.getElementById("MtxB").removeChild(document.getElementById("Example2"));
	if(document.getElementById("Example2") != null){
		document.getElementById("Example2").remove();
	}
	document.getElementById("MtxB").innerHTML = Mtx2Div;
}

function Compute(){
	//alert("Computing");
	getInput();
	process();
	printResult();
}
function getInput(){
	//alert("Getting input");
	//alert("The x for A is "+Ay);
	for(i=0;i<Ax;i++){
		matrixA[i]=[];
	}
	for(i=0;i<Ax;i++){
		for(j=0;j<Ay;j++){
			var id = "A "+i+","+j;
			matrixA[i][j]=document.getElementById(id).value;
		}
	}
	
	for(i=0;i<Bx;i++){
		matrixB[i] = [];
	}
	for(i=0;i<Bx;i++){
		for(j=0;j<By;j++){
			var id = "B "+i+","+j;
			matrixB[i][j]=document.getElementById(id).value;
		}
	}
}
function process(){
	//alert("Processing");
	for(i=0;i<matrixA.length;i++){
		matrixC[i] = [];
		for(j=0;j<matrixB[0].length;j++){
			var sum = 0;
			for(k=0;k<matrixA[0].length;k++){
				sum += matrixA[i][k] * matrixB[k][j];
				//alert(matrixA[i][k] + "*" + matrixB[k][j] + "=" + matrixA[i][k] * matrixB[k][j]);
			}
			matrixC[i][j] = sum;
		}
	}
}
function printResult(){
	var innerhtml = "";
	for(i=0;i<matrixC.length;i++){
		innerhtml += "<tr>";
		for(j=0;j<matrixC[i].length;j++){
			innerhtml += "<td><label>"+ matrixC[i][j] +"</label></td>";
		}
		innerhtml += "</tr>";
	}
	document.getElementById("mtxAns").innerHTML = innerhtml;
}