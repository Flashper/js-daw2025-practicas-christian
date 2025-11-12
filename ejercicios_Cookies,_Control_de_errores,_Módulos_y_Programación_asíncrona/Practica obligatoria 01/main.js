const mostrar = document.getElementById("mostrar");

window.addEventListener("DOMContentLoaded", () => {
    let visitas = getCookie("visitas");

    if (visitas === "") {
        setCookie("visitas", 1, 30);
        mostrar.textContent = getCookie("visitas");
    } else {
        let visitasNum = Number(getCookie("visitas"));
        if (visitasNum >= 10) {
            setCookie("visitas", 0, -1);
            mostrar.textContent = 0;
        }else{
            visitasNum++;
            setCookie("visitas", visitasNum, 30);
            mostrar.textContent = visitasNum;
        } 
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
