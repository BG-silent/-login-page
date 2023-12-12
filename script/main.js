let loginbox=document.getElementById("login");
let signupbox=document.getElementById("sign_up");
let form_login_btn=document.getElementById("login_link");
let form_signup_btn=document.getElementById("signup_link");

form_signup_btn.onclick=function()
{
    signupbox.style.display="inline-block";
    loginbox.style.display="none";
}
form_login_btn.onclick=function()
{
    signupbox.style.display="none";
    loginbox.style.display="inline-block";
}

