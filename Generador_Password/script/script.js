function generarPassword() {
    const numeroIntroducido = document.getElementById("number");
    const longitud = parseInt(numeroIntroducido.value);
    
    if (isNaN(longitud)) {
        return alert("Error: introduce un número.");
    }
    
    else if (longitud < 12 || longitud > 50) {
        return alert("Error: el número de caracteres debe estar entre 12 y 50.");
    }
    
    const password = generarPasswordAleatorio(longitud);
    const passwordDocumento = document.getElementById("password");
    passwordDocumento.innerHTML = `Tu contraseña es: <br><br><span class="contrasena">${password}</span>`;
}

function generarPasswordAleatorio(longitud) {
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()-_=+";
    
    let password = "";

    password += mayusculas[(Math.floor(Math.random() * mayusculas.length))];
    password += minusculas[(Math.floor(Math.random() * minusculas.length))];
    password += numeros[(Math.floor(Math.random() * numeros.length))];
    password += simbolos[(Math.floor(Math.random() * simbolos.length))];

    for (let i = password.length; i < longitud; i++) {
        const todos = mayusculas + minusculas + numeros + simbolos;
        password += todos [Math.floor(Math.random() * todos.length)];
    }
    
    return password;
}

const boton = document.getElementById("boton")
boton.addEventListener("click", generarPassword)