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

function Producto(nombre, talle, precio) {
    this.nombre = nombre;
    this.talle = talle;
    this.precio = precio;
}

function Catalogo() {
    this.catalogo = [];

    this.agregarProducto = function () {
        let nombre = prompt("Ingrese el nombre del producto");
        let talle = prompt("Ingrese el talle del producto");
        let precio = prompt("Ingrese el precio del producto");

        precio = parseInt(precio);

        if (isNaN(precio)) {
            console.log("Por favor, ingrese un precio válido en números.");
        } else {
            let nuevoProducto = new Producto(nombre, talle, precio);
            this.catalogo.push(nuevoProducto);
        }
    };

    this.cargarProductos = function () {
        let respuesta;
        do {
            this.agregarProducto();
            respuesta = prompt("¿Desea agregar otro producto? (sí/no)").toLowerCase();
        } while (respuesta === "si");
    };

    this.mostrarCatalogo = function () {
        console.log("Productos en el catálogo:");
        this.catalogo.forEach(function (producto) {
            console.log(`Nombre: ${producto.nombre}, Talle: ${producto.talle}, Precio: ${producto.precio}`);
        });
    };

    this.sumarPrecios = function () {
        let respuestaSumar = prompt("¿Desea sumar los precios de los productos? (sí/no)").toLowerCase();

        if (respuestaSumar === "si") {
            let total = this.catalogo.reduce(function (acumulador, producto) {
                return acumulador + producto.precio;
            }, 0);

            console.log(`El total de los precios es: ${total}`);
        } else {
            console.log("No se sumaron los precios.");
        }
    };
}


let miCatalogo = new Catalogo();


miCatalogo.cargarProductos();

miCatalogo.mostrarCatalogo();

miCatalogo.sumarPrecios();

