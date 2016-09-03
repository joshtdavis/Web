var templateImg = ["templates/temp1.jpg","templates/temp2.png","templates/temp3.png",
"templates/temp4.png","templates/temp5.jpg","templates/temp6.jpg","templates/temp7.jpg"
,"templates/temp8.jpg","templates/temp9.jpg","templates/temp10.jpg"];
var count=0;
var vCount=0;
var videos = ["http://www.youtube.com/embed/PNXC2feZBYY","http://www.youtube.com/embed/Zx62ztfBIXQ",
"http://www.youtube.com/embed/Eer25mKJa2M","http://www.youtube.com/embed/lhoXZDmf46M"];
var validForm = true;
window.onload=function(){
highlightPage();
};
function highlightPage(){
var aTag;
var location = window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1);
	if(location=="home.html"){
		aTag = document.getElementById("homeAnchor");
		aTag.style.color = "#00ff00" ;
	}
	else{
		if(location=="signup.html"){
		aTag = document.getElementById("signAnchor");
		aTag.style.color = "#00ff00" ;
		}
		else{
			if(location=="gallery.html"){
				aTag = document.getElementById("galAnchor");
				aTag.style.color = "#00ff00" ;
			}
			else{
				if(location=="templates.html"){
					aTag = document.getElementById("tempAnchor");
					aTag.style.color = "#00ff00" ;
				}
				else{
					if(location=="Aboutus.html"){
						aTag = document.getElementById("aboutAnchor");
						aTag.style.color = "#00ff00" ;
					}
				}
			}
		}
	}
	
}

function checkAll(){
	validForm = true;
	checkFirstName();
	if(validForm){
		checkLastName();
	}
	if(validForm){
		checkAddr();
	}
	if(validForm){
		checkCity();
	}
	if(validForm){
		checkAge();
	}
	if(validForm){
		checkBirth();
	}
	if(vaidForm){
		checkCard();
	}
	if(validForm){
		checkSSN();
	}
	if(validForm){
		checkEmail();
	}
	if(validForm){
		checkPhone();
	}
	if(validForm){
		checkUsername();
	}
	if(validForm){
		checkPassword();
	}
	if(validForm){
		alert("Congratulations you have completed the submission form!!");
	}
	else{
		alert("Submission invalid try again");
	}
}

function checkFirstName(){
document.getElementById("fname").style.color = "white";
document.getElementById("fname").style.borderColor = "gray";
if(document.getElementById("fname").value == "" || document.getElementById("fname").value == " ")
{
	document.getElementById("fname").value = "Not a valid name try again";
	document.getElementById("fname").style.color = "red";
	document.getElementById("fname").style.borderColor = "red";
	document.getElementById("fname").focus();
	validForm = false;
}
else{
	var reg = /^([A-Za-z]){1,25}$/;
	var fname = document.getElementById("fname").value;
	if(reg.test(fname) == false)
	{
		document.getElementById("fname").value = "Not a valid city name try again";
		document.getElementById("fname").style.color = "red";
		document.getElementById("fname").style.borderColor = "red";
		document.getElementById("fname").focus();
		validForm = false;
	}
}
}
function checkLastName(){
document.getElementById("lname").style.color = "white";
document.getElementById("lname").style.borderColor = "gray";
if(document.getElementById("lname").value == "" || document.getElementById("lname").value == " ")
{
	document.getElementById("lname").value = "Not a valid name try again";
	document.getElementById("lname").style.color = "red";
	document.getElementById("lname").style.borderColor = "red";
	document.getElementById("lname").focus();
	validForm = false;
}
else{
	var reg = /^([A-Za-z]){1,25}$/;
	var lname = document.getElementById("lname").value;
	if(reg.test(lname) == false)
	{
		document.getElementById("lname").value = "Not a valid name try again";
		document.getElementById("lname").style.color = "red";
		document.getElementById("lname").style.borderColor = "red";
		document.getElementById("lname").focus();
		validForm = false;
	}
}
}
function checkAddr(){
document.getElementById("adr").style.color = "white";
document.getElementById("adr").style.borderColor = "gray";
if(document.getElementById("adr").value == "" || document.getElementById("adr").value == " ")
{
	document.getElementById("adr").value = "Not a valid address try again";
	document.getElementById("adr").style.color = "red";
	document.getElementById("adr").style.borderColor = "red";
	document.getElementById("adr").focus();
	validForm = false;
}
else{
	var reg = /^([0-9]){2,4}([A-Za-z]){1,20}([A-Za-z]){1,10}$/;
	var adr = document.getElementById("adr").value;
	if(reg.test(adr) == false)
	{
		document.getElementById("adr").value = "Not a valid Address try again";
		document.getElementById("adr").style.color = "red";
		document.getElementById("adr").style.borderColor = "red";
		document.getElementById("adr").focus();
		validForm = false;
	}
}
}
function checkCity(){
document.getElementById("city").style.color = "white";
document.getElementById("city").style.borderColor = "gray";
if(document.getElementById("city").value == "" || document.getElementById("city").value == " ")
{
	document.getElementById("city").value = "Not a valid city name try again";
	document.getElementById("city").style.color = "red";
	document.getElementById("city").style.borderColor = "red";
	document.getElementById("city").focus();
	validForm = false;
}
else{
	var reg = /^([A-Za-z]){1,35}$/;
	var city = document.getElementById("city").value;
	if(reg.test(city) == false)
	{
		document.getElementById("city").value = "Not a valid city name try again";
		document.getElementById("city").style.color = "red";
		document.getElementById("city").style.borderColor = "red";
		document.getElementById("city").focus();
		validForm = false;
	}
}
}
function checkAge(){
document.getElementById("age").style.color = "white";
document.getElementById("age").style.borderColor = "gray";
if(document.getElementById("age").value == "" || document.getElementById("age").value == " " || document.getElementById("age").value == "0")
{
	document.getElementById("age").value = "Not a valid age try again";
	document.getElementById("age").style.color = "red";
	document.getElementById("age").style.borderColor = "red";
	document.getElementById("age").focus();
	validForm = false;
}
else{
	var reg = /^([0-9]){1,3}$/;
	var age = document.getElementById("age").value;
	if(reg.test(age) == false)
	{
		document.getElementById("age").value = "Not a valid age try again";
		document.getElementById("age").style.color = "red";
		document.getElementById("age").style.borderColor = "red";
		document.getElementById("age").focus();
		validForm = false;
	}
}
}
function checkBirth(){
document.getElementById("birth").style.color = "white";
document.getElementById("birth").style.borderColor = "gray";
if(document.getElementById("birth").value == "" || document.getElementById("birth").value == " ")
{
	document.getElementById("birth").value = "Not a valid birth date try again";
	document.getElementById("birth").style.color = "red";
	document.getElementById("birth").style.borderColor = "red";
	document.getElementById("birth").focus();
	validForm = false;
}
else{
	var reg = /^\(?([0-9]{2})\)?[-. /]?([0-9]{2})[-. /]?([0-9]{4})$/;
	var birth = document.getElementById("birth").value;
	if(reg.test(birth) == false)
	{
		document.getElementById("birth").value = "Not a valid birth date try again";
		document.getElementById("birth").style.color = "red";
		document.getElementById("birth").style.borderColor = "red";
		document.getElementById("birth").focus();
		validForm = false;
	}
}
}
function checkCard(){
document.getElementById("bcrdNum").style.color = "white";
document.getElementById("bcrdNum").style.borderColor = "gray";
if(document.getElementById("bcrdNum").value == "" || document.getElementById("bcrdNum").value == " ")
{
	document.getElementById("bcrdNum").value = "Not a valid Credit Card Number try again";
	document.getElementById("bcrdNum").style.color = "red";
	document.getElementById("bcrdNum").style.borderColor = "red";
	document.getElementById("bcrdNum").focus();
	vlaidForm = false;
}
else{
	var reg = /^([0-9]){16}$/;
	var card = document.getElementById("bcrdNum").value;
	if(reg.test(card) == false)
	{
		document.getElementById("bcrdNum").value = "Not a valid Credit Card Number try again";
		document.getElementById("bcrdNum").style.color = "red";
		document.getElementById("bcrdNum").style.borderColor = "red";
		document.getElementById("bcrdNum").focus();
		validForm = false;
	}
}
}
function checkSSN(){
document.getElementById("SSN").style.color = "white";
document.getElementById("SSN").style.borderColor = "gray";
if(document.getElementById("SSN").value == "" || document.getElementById("SSN").value == " ")
{
	document.getElementById("SSN").value = "Not a valid Social Security Number try again";
	document.getElementById("SSN").style.color = "red";
	document.getElementById("SSN").style.borderColor = "red";
	document.getElementById("SSN").focus();
	validForm = false;
}
else{
	var reg = /^([0-9]){8,9}$/;
	var ssn = document.getElementById("SSN").value;
	if(reg.test(ssn) == false)
	{
		document.getElementById("SSN").value = "Not a valid Social Security Number try again";
		document.getElementById("SSN").style.color = "red";
		document.getElementById("SSN").style.borderColor = "red";
		document.getElementById("SSN").focus();
		validForm = false;
	}
}
}
function checkEmail(){
document.getElementById("email").style.color = "white";
document.getElementById("email").style.borderColor = "gray";
if(document.getElementById("email").value == "" || document.getElementById("email").value == " ")
{
	document.getElementById("email").value = "Not a valid E-mail Address try again";
	document.getElementById("email").style.color = "red";
	document.getElementById("email").style.borderColor = "red";
	document.getElementById("email").focus();
	validForm = false;
}
else{
	var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]){2,4}$/;
	var email = document.getElementById("email").value;
	if(reg.test(email) == false)
	{
		document.getElementById("email").value = "Not a valid E-mail Address try again";
		document.getElementById("email").style.color = "red";
		document.getElementById("email").style.borderColor = "red";
		document.getElementById("email").focus();
		validForm = false;
	}
}
}
function checkPhone(){
document.getElementById("phone").style.color = "white";
document.getElementById("phone").style.borderColor = "gray";
	if(document.getElementById("phone").value == "" || document.getElementById("phone").value == " ")
	{
		document.getElementById("phone").value = "Not a valid Phone Number try again";
		document.getElementById("phone").style.color = "red";
		document.getElementById("phone").style.borderColor = "red";
		document.getElementById("phone").focus();
		validForm = false;
	}
	else{
		var reg = /^\(?([0-9]{3})\)?[-. /]?([0-9]{3})[-. /]?([0-9]{4})$/;
		var phone = document.getElementById("phone").value;
		if(reg.test(phone) == false)
		{
			document.getElementById("phone").value = "Not a valid Phone Number try again";
			document.getElementById("phone").style.color = "red";
			document.getElementById("phone").style.borderColor = "red";
			document.getElementById("phone").focus();
			validForm = false;
		}
	}
}
function checkUsername(){
document.getElementById("userName").style.color = "white";
document.getElementById("userName").style.borderColor = "gray";
	if(document.getElementById("userName").value == "" || document.getElementById("userName").value == " ")
	{
		document.getElementById("userName").value = "Not a valid User name try again";
		document.getElementById("userName").style.color = "red";
		document.getElementById("userName").style.borderColor = "red";
		document.getElementById("userName").focus();
		validForm = false;
	}
	else{
		var reg = /^([A-Za-z0-9_\-\,.?!@#$%&*]){6,30}/;
		var username = document.getElementById("userName").value;
		if(reg.test(username) == false)
		{
			document.getElementById("userName").value = "Not a valid User name try again";
			document.getElementById("userName").style.color = "red";
			document.getElementById("userName").style.borderColor = "red";
			document.getElementById("userName").focus();
			validForm = false;
		}
		else{
			Cookie.set("username",username);
		}
	}
}
function checkPassword(){
document.getElementById("Password").style.color = "white";
document.getElementById("Password").style.borderColor = "gray";
	if(document.getElementById("Password").value == "" || document.getElementById("Password").value == " ")
	{
		document.getElementById("Password").value = "Not a valid Phone Number try again";
		document.getElementById("Password").style.color = "red";
		document.getElementById("Password").style.borderColor = "red";
		document.getElementById("Password").focus();
		validForm = false;
	}
	else{
		var reg = /^([A-Za-z0-9_\-\,.?!@#$%&*]){6,30}/;
		var password = document.getElementById("Password").value;
		if(reg.test(password) == false)
		{
			document.getElementById("Password").value = "Not a valid Phone Number try again";
			document.getElementById("Password").style.color = "red";
			document.getElementById("Password").style.borderColor = "red";
			document.getElementById("Password").focus();
			validForm = false;
		}
		else{
		if(validForm){
				Cookie.set("password",password);
			}
		}
	}
}
function changeImgBack(){
	if(count==0){

	}
	else{
	count--;
	document.getElementById("templIm").src = templateImg[count];
	}
}
function changeImg(){
	if(count==(templateImg.length-1)){

	}
	else{
		count++;
		document.getElementById("templIm").src = templateImg[count];
	}
}
function changeVidBack(){
	if(count==0){

	}
	else{
		count--;
		document.getElementById("vidGal").src = videos[count];
	}
}
function changeVidNext(){
	if(count==(videos.length-1)){

	}
	else
	{
		count++;
		document.getElementById("vidGal").src = videos[count];
	}
}
function checkVids(){
	var button = document.getElementById("speechBox1");
	button.style.visibility = "hidden";
	button = document.getElementById("speechBox2");
	button.style.visibility = "hidden";
}
function checkPics(){
	var button = document.getElementById("speechBox3");
	button.style.visibility = "hidden";
	button = document.getElementById("speechBox4");
	button.style.visibility = "hidden";
}
function speech(){
	var button = document.getElementById("speechBox1");
	button.style.position = "relative";
	button.style.width = "220px";
	button.style.height = "100px";
	button.style.textAlign = "center";
	button.style.lineHeight = "50px";
	button.style.backgroundColor = "#fff";
	button.style.border = "8px solid #666";
	button.style.borderRadius = "30px";
	button.style.WebKitBorderRadius = "30px";
	button.style.MozBorderRadius = "30px";
	button.style.boxShadow = "2px 2px 4px #888";
	button.style.WebKitboxShadow = "2px 2px 4px #888";
	button.style.MozboxShadow = "2px 2px 4px #888";
	button.innerHTML = "This is a button that when pressed will go to the previous video";
	button.style.visibility = "visible";
}
function speeche(){
	var button = document.getElementById("speechBox2");
	button.style.position = "relative";
	button.style.width = "200px";
	button.style.height = "100px";
	button.style.textAlign = "center";
	button.style.lineHeight = "50px";
	button.style.backgroundColor = "#fff";
	button.style.border = "8px solid #666";
	button.style.borderRadius = "30px";
	button.style.WebKitBorderRadius = "30px";
	button.style.MozBorderRadius = "30px";
	button.style.boxShadow = "2px 2px 4px #888";
	button.style.WebKitboxShadow = "2px 2px 4px #888";
	button.style.MozboxShadow = "2px 2px 4px #888";
	button.innerHTML = "This is a button that when pressed will go to the next video";
	button.style.visibility = "visible";
}
function speechs(){
	var button = document.getElementById("speechBox3");
	button.style.position = "relative";
	button.style.width = "220px";
	button.style.height = "100px";
	button.style.textAlign = "center";
	button.style.lineHeight = "50px";
	button.style.backgroundColor = "#fff";
	button.style.border = "8px solid #666";
	button.style.borderRadius = "30px";
	button.style.WebKitBorderRadius = "30px";
	button.style.MozBorderRadius = "30px";
	button.style.boxShadow = "2px 2px 4px #888";
	button.style.WebKitboxShadow = "2px 2px 4px #888";
	button.style.MozboxShadow = "2px 2px 4px #888";
	button.innerHTML = "When this button is pressed it will go to the previous picture";
	button.style.visibility = "visible";
}
function speeches(){
	var button = document.getElementById("speechBox4");
	button.style.position = "relative";
	button.style.width = "200px";
	button.style.height = "100px";
	button.style.textAlign = "center";
	button.style.lineHeight = "50px";
	button.style.backgroundColor = "#fff";
	button.style.border = "8px solid #666";
	button.style.borderRadius = "30px";
	button.style.WebKitBorderRadius = "30px";
	button.style.MozBorderRadius = "30px";
	button.style.boxShadow = "2px 2px 4px #888";
	button.style.WebKitboxShadow = "2px 2px 4px #888";
	button.style.MozboxShadow = "2px 2px 4px #888";
	button.innerHTML = "When this button is pressed it will go to the next picture";
	button.style.visibility = "visible";
}
function login(){
	if(!Cookie.exists("username")){
		alert("Must have an account to login!");
	}
	else{
		if(!Cookie.exists("password")){
			alert("Must have an account to login!");
		}else{
			var username = document.getElementById("user").value;
			var password = document.getElementById("pass").value;

			if(Cookie.get("username") == username && Cookie.get("password") == password){
					alert("login Successful");
					//location = "http://webpages.uncc.edu/~jdavi329/Labs/project/personalPage.html";
					location = "personalPage.html";
			}
			else{
				alert("Wrong username or password");
			}
		}
	}
}