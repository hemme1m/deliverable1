// handles the user's input in the name field
function getUserInfo() {
	var funUsername = document.getElementById("usersName").value;
//alert user that name has to be at least two characters if 0 or 1 character entered	
	if (funUsername.length < 2) {
		alert("Your name must contain at least 2 characters.");
 // return the user's input in different ways
	} else {
    var bigName = funUsername.toUpperCase();
		alert("Wow, " + funUsername + "! I just want to shout your name--" + bigName + "! " + bigName + "! Sorry, I got excited.")
	}
}
// when the user clicks the button run the getUserInfo function
funButton.addEventListener("click", getUserInfo, false);