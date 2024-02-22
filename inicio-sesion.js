//seleccion de elementos//
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnValidar = document.querySelector(".btn-enviar");
const aviso = document.querySelector(".texto-aviso");

//validacion de inicio de sesion correo y contraseña//
const correoRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]))+$/;
const contraseñaRegex = /^.{1,5}$/;


//validacion de btn//
btnValidar.addEventListener("click", e => {
    e.preventDefault();
    let correo = email.value.trim();
    let contraseña = password.value.trim();

    if (!correo) {
        mostrarAviso("Ingrese un correo valido");
    }

    else if (!contraseña) {
        mostrarAviso("Contraseña invalida");
    }

    else if (!correoRegex.test(correo)) {
        mostrarAviso("ingrese un correo valido");
    }

    else if (!contraseñaRegex.test(contraseña)) {
        mostrarAviso("Contraseña invalida, debe contener 5 caracteres");
    }

    else if (autenticarUsuario(correo, contraseña)) {
        window.location = "bienvenida.html";
    }
});

function autenticarUsuario(correo, contraseña) {
    return correo === "jchaves@jorge" && contraseña === "12345"
}

function mostrarAviso(mensaje) {
    aviso.style.color = "#ff2020";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;
    aviso.style.visibility = "inherit";
}