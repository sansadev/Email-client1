  
//using eventhandler

// let form = document.getElementById("form");

// form.addEventListener('submit', function(event){
//     event.preventDefault();


//        let uname = document.getElementById("uname").value;

//        console.log(uname);

//        let email = document.getElementById("email").value;

//        console.log(email);

//        let pwd = document.getElementById("pwd").value;

//        console.log(pwd);

// })



//Using onsubmit event hander

function handleForm(e) {
   e.preventDefault();
   alert("Form is submitted");

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

 console.log(username);
 console.log(password);
}