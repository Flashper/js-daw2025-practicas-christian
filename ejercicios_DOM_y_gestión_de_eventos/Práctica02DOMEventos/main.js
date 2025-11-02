document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const email_error = document.getElementById("email_error");
    const password_error = document.getElementById("password_error");
    const btnEnviar = document.getElementById("btnEnviar");

    email_error.style.display = "none";
    password_error.style.display = "none";

    const usarBlur = (parametro, error, funcionValidadora) => {
        const valor = parametro.value.trim();
        let valida;

        if(valor === "") {
            error.style.display = "none";
        }else {
            valida = funcionValidadora(parametro);
            error.style.display = valida ? "none" : "block";
        }

        actualizarBoton(email, password, btnEnviar);
    }


    email.addEventListener('blur', () => usarBlur(email, email_error, validarEmail));

    email.addEventListener('focus', () => {
        email_error.style.display = "none";
    });

    password.addEventListener('blur', () => usarBlur(password, password_error, validarPassword));

    password.addEventListener('focus', () => {
        password_error.style.display = "none";
    });
});

function validarEmail(email) {
    const pattern = /^[^\s~@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email.value.trim());
}

function validarPassword(password) {
    const length = password.value.length;
    return length >= 8 && length <= 10;
}

function actualizarBoton(email, password, btnEnviar) {
    const condicionEmail = validarEmail(email);
    const condicionPassword = validarPassword(password);

    btnEnviar.disabled = !(condicionEmail && condicionPassword);
}