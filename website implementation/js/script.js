
// Validate the input

function validateForm(){
    var email_validation = document.forms["questionnaire"]["email"].value;
    var firstmarker = email_validation.indexOf("@");
	var secondmarker = email_validation.lastIndexOf(".");
	var name_validation = document.forms["questionnaire"]["name"].value;
	var comment_validation = document.forms["questionnaire"]["comments"].value;
    if (firstmarker<1 || secondmarker<firstmarker+2 || secondmarker+2>=email_validation.length)
    {
        alert("This is NOT a valid email address. Please try again.");
        return false;
	}
	else if(name_validation==="")
	{
		alert("Name cannot be empty. Please try again.");
		return false;
	}
	else if(comment_validation==="")
	{
		alert("Comments cannot be empty. Please try again.");
		return false;
	}
    else
    {
        alert("We have recieved your advice. Thank you! ");
        return true;
    }
}

$(document).ready(function() {


	// Adding a "JavaScript is Enabled" Body Class

	$("body").addClass("js");

	
	// Display the time.
	
	function displayTime() {
	document.getElementById("time").innerHTML = new Date().toTimeString();
	} 
	setInterval(displayTime,1000);     

	// Expand the novel list by pressing "More novels" button.

	$("#author #expand-button a").click(function(event) {
		$(this).parent().parent().addClass("expanded");
		event.preventDefault();
	});
	

	// Popup the answer in "studying-3".

	$("#newton .answer a, #answer-popup .close-button a").click(function(event) {
		$("body").toggleClass("show-answer-popup");
		event.preventDefault();
	});

	// Show the words "LOG ENTRY: " as typing.
	
	var index = 0;
	var content = document.getElementById("log").innerHTML;
	function type() {
	if(index == content.length) {
		clearInterval(timer);
	}
	document.getElementById("showlog").innerText = content.substring(0, index++);
	}
	setInterval(type, 250);

	

});