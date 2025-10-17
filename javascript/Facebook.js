var email_inp = document.getElementById("email");
var password_inp = document.getElementById("password");

var mymail = "chaffvelila@gmail.com";
var password = "killbot";

function loginfunction() {
    var getemail = email_inp.value;
    var getpassword = password_inp.value;

    if (getemail == mymail && getpassword == password) {
        window.location.href = "card.html";
    } else {
        alert("password and email incorrect");
        email_inp.style = "border-color:red;color: red"; {
            password_inp.style = "border-color:red;color: red"; {

            }
        }
    }
}
