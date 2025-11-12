const nombre = document.getElementById("nombre");
const btnSave = document.getElementById("save");

window.addEventListener("DOMContentLoaded", () => {
    const usuario = getCookie("usuario");
    if (usuario !== "") {
        mostrarMensaje(usuario);
    }
});

btnSave.addEventListener("click", () => {
    const nombreValue = nombre.value.trim();

    if (nombreValue !== "") {
        setCookie("usuario", nombreValue, 7);
    }
});

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function mostrarMensaje(nombre) {
    document.getElementById("texto").style.display = "none";
    document.getElementById("nombre").style.display = "none";
    document.getElementById("save").style.display = "none";
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerText = `¡Bienvenido, ${nombre}!`;
}


