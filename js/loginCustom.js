let user = class {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
}

var rootUser1 = new user("student", "student");
var rootUser2 = new user("teacher", "teacher");
var rootUser3 = new user("emil.ivanichkov@gmail.com", "123456");

var accounts = [rootUser1, rootUser2];

function login1(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    //compare the entered details with all acounts
    for(var i = 0; i < accounts.length; i++){
        if(compareStrings(email, accounts[i].email)){
            if(compareStrings(password, accounts[i].password)){
                if(password === "student"){
                    window.location.replace("../index_logged_in.html");
                }
                else {
                    window.location.replace("../index_logged_in_teacher.html");
                }
            }
        }
    }

    console.log("Login unsuccesful");

    //add message to be displayed to user

    //window.location.replace("../index_logged_in.html");
}

function logout1(){
    window.location.replace("./index.html");
}

function register(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var repeatPassword = document.getElementById('repeatPassword').value;

    //check validity of email (optional)
    //check if password matches criteria (define what criteria it sould match)
    //check if "I agree to terms" checkbox is checked

    if(compareStrings(password, repeatPassword)){
    newUser = new user(email, password); 
    accounts.push(newUser);
    window.location.replace("../index.html");
    }
    else{
        console.log("Repeat password doesn't match original password");
        //add message to be displayed to user
    }
}

function compareStrings(password, repeatPassword){
    if(password.length != repeatPassword.length){
        return false;
    }

    for(var i = 0; i < password.length; i++){
        if(password.charCodeAt(i) != repeatPassword.charCodeAt(i)){
            return false;
        }
    }

    return true;
}