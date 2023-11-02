  


let form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault();


       let uname = document.getElementById("uname").value;

       console.log(uname);

       let email = document.getElementById("email").value;

       console.log(email);

       let pwd = document.getElementById("pwd").value;

       console.log(pwd);

})