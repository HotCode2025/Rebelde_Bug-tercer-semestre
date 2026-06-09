const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if(usuario === "admin" && password === "1234"){
        alert("Login correcto. Bienvenido " + usuario);
    }else{
        alert("Usuario o contraseña incorrectos");
    }

});