let usuarioRegistrado;
let contraseniaRegistrada;

function registro() {
    do {
        usuarioRegistrado = prompt("Ingrese un nombre de usuario.");
        if (!isNaN(usuarioRegistrado)) {
            alert("El nombre de usuario no puede contener números. Por favor, inténtelo de nuevo.");
        }
    } while (!isNaN(usuarioRegistrado));

    do {
        contraseniaRegistrada = prompt("Ingrese una contraseña numérica");
        if (isNaN(contraseniaRegistrada)) {
            alert("La contraseña debe ser numérica. Por favor, inténtelo de nuevo.");
        }
    } while (isNaN(contraseniaRegistrada));

    console.log("Ha sido registrado");
}

function inicioDeSesion() {
    let usuarioIngresado;
    let contraseniaIngresada;
    alert("Inicie sesion");
    do {
        usuarioIngresado = prompt("Ingrese su nombre de usuario:");
        contraseniaIngresada = prompt("Ingrese su contraseña numérica:");

        if (usuarioIngresado === usuarioRegistrado && contraseniaIngresada === contraseniaRegistrada) {
            alert("Bienvenido " + usuarioIngresado);
        } else {
            alert("El usuario o la contraseña no son correctos");
        }
    } while (usuarioIngresado !== usuarioRegistrado || contraseniaIngresada !== contraseniaRegistrada);

    alert("Hola " + usuarioIngresado + ", ha iniciado sesión");
}

alert("Bienvenido, regístrese e inicie sesión para continuar");
registro();
inicioDeSesion();
