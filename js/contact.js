var displayfirst = document.getElementById("firstResp");
var displaymail = document.getElementById("mailResp");
var displaysub = document.getElementById("subjectResp");
var fullname = document.getElementById("fname");
var email = document.getElementById("email");
var textbox = document.getElementById("subject");
var messagetxt = "";
var chk1 = false;
var chk2 = false;
var chk3 = false;


function verifyFrm(){
	if(email.valueMissing){
		setCustomValidity("Please fill out this field.");
	}else if(fullname.valueMissing){
		setCustomValidity("Please fill out this field.");
	}else if(textbox.valueMissing){
		setCustomValidity("Please fill out this field.");
	}
}

function chkFirst(){
	try{
		if(fullname.value === ""&& chk1==false){
			throw "Enter your full name!";
		}
	}
	catch(firstnameError){
		messagetxt=firstnameError;
		displayfirst.innerHTML=messagetxt;
		changeTag(displayfirst, "h5");
	}
	chk1=true;	
}

function chkMail(){
	try{
		if(email.value === ""&&chk2==false){
			throw "Enter your email!";
		}
	}
	catch(emailError){
		messagetxt=emailError;
		displaymail.innerHTML=messagetxt;
		changeTag(displaymail, "h5");
	}
	chk2=true;	
}

function chksubj(){
	try{
		if(textbox.value === ""&&chk3==false){
			throw "Enter your message!";
		}
	}
	catch(messgError){
		messagetxt=messgError;
		displaysub.innerHTML=messagetxt;
		changeTag(displaysub, "h5");
	}
	chk3=true;
}

function changeTag(from, to){
	var n = document.createElement(to);
	var attr = from.attributes;
	for(var i=0;i<attr.length;i++){
		n.setAttribute(attr[i].name, attr[i].value);
	}
	n.innerHTML=from.innerHTML;
	from.parentNode.replaceChild(n, from);
}// function that changes html tag in document

function createList(){
	if(fullname.addEventListener){
		fullname.addEventListener("blur", chkFirst, false);
	}else if(fullname.attachEvent){
		fullname.attachEvent("onblur", chkFirst);
	}
	if(email.addEventListener){
		email.addEventListener("blur", chkMail, false);
	}else if(email.attachEvent){
		email.attachEvent("onblur", chkMail);
	}
	if(textbox.addEventListener){
		textbox.addEventListener("blur", chksubj, false);
	}else if(textbox.attachEvent){
		textbox.attachEvent("onblur", chksubj);
	}
	var sub = document.getElementById("fsubmit");
	if(sub.addEventListener){
		sub.addEventListener("click", verifyFrm, false)
	}else if(sub.attachEvent){
		sub.attachEvent("onclick", verifyFrm);
	}//event listeners to all input fields
}
	
if(window.addEventListener){
	window.addEventListener("load", createList, false);
}else if(window.attachEvent){
	window.attachEvent("onload", createList);
}
