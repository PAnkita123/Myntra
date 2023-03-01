
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
  for (i = 0; i < dataFromLS.length; i++) {
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
    //   window.location.href = './login.html';
      alert('Registration Done.');
  }
}



