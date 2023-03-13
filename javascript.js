
function sign_in(event) {
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var userNumber = document.getElementById("userNumber").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData2 = { name: userName, number: userNumber, email: userEmail, password: userPassword }
    dataFromLS = JSON.parse(localStorage.getItem("userData2")) || [];
    console.log(dataFromLS, "dataFromLS")

    var flag = false;
    for ( var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true;
        }

    } if (flag === true) {
        alert("email already present, please use another email!");
    }
    else if (userPassword.length < 6) {
        alert("Password must be 6 characters!");
    }
    else if (!userName || !userNumber || !userEmail || !userPassword) {
        alert("Please fill in all fields!");
    }
    else {
        dataFromLS.push(userData2);
        localStorage.setItem('userData2', JSON.stringify(dataFromLS));
        document.getElementById("userName").value = '';
        document.getElementById("userNumber").value = '';
        document.getElementById("userEmail").value = '';
        document.getElementById("userPassword").value = '';
          window.location.href = './login.html';
        alert('Registration Done.');
    }
}
function login(event) {
    event.preventDefault();

    var userName = document.getElementById("Name").value;
    var userNumber = document.getElementById("Number").value;
    var userEmail = document.getElementById("Email").value;
    var userPassword = document.getElementById("Password").value;

    var dataFromLS = JSON.parse(localStorage.getItem("userData2"))

    var flag = false;

    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].name === userName && dataFromLS[i].number === userNumber && dataFromLS[i].email === userEmail && dataFromLS[i].password === userPassword)
            flag = true;
    }
    if (flag === true) {
        document.getElementById("Name").value = "";
        document.getElementById("Number").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
        alert("You are logged in successfully!");
        var myntraUser={};
        myntraUser["current-user-email"]=userEmail;
        localStorage.setItem("myntraUser", JSON.stringify( myntraUser))
        window.location.href = "./index.html";

    } else {
        alert("Please enter correct credentials!")
    }


}

var gettingEmail;
function forgetPassword(){
    var dataFromLS=JSON.parse(localStorage.getItem("userData2"));
    var userEmail=document.getElementById("email").value;
    gettingEmail=userEmail;
    var flag = false;
    for (var i = 0; i <dataFromLS.length; i++) {
        if (dataFromLS[i].email===userEmail)
            flag = true;
    }

    if (flag === true) {
        var newCode = `<div id="set-pass"><small>Set a New Password!</small><br/><input type="password" id="password"/><br/><br/><button onclick="newPassword()">set new password</button></div>`
        var divFromHTML=document.getElementById("change") 
        divFromHTML.innerHTML=newCode;
        alert('set new Password!')

    }else{
        alert("please check your email, its not in our database!")
    }
}

function newPassword(){
    var userPassword=document.getElementById("password").value;
    var dataFromLS=JSON.parse(localStorage.getItem("userData2"));

    for(var i=0; i<dataFromLS.length;i++){
        if(dataFromLS[i].email === gettingEmail){
            dataFromLS[i].password = userPassword
        } 
    }
    localStorage.setItem('userData2', JSON.stringify(dataFromLS));
    gettingEmail="";
    window.location.href='./login.html';
    alert("password changed, now login.")

}