//sign up form ka data local storage me store

var sign_button =document.getElementById("signup_btn");
sign_button.onsubmit = function() 
{
	

	var user=document.getElementById("username").value;
	var Email=document.getElementById("email").value;
	var phone_no=document.getElementById(Phone).value;
	var pass=document.getElementById("password").value;


	var user_object_data = {username:user,email:Email,Phone:phone_no,password:pass};
	var user_text_data=JSON.stringify(user_object_data);
	if (user!=""&& Email!="" && pass!=""&&phone_no!="")
	 {
	 	localStorage.setItem(Email,user_text_data);
	 	return false;
	 }

}

