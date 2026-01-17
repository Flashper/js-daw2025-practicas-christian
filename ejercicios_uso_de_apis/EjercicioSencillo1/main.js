const body = document.querySelector("body");

navigator.geolocation.getCurrentPosition((pos) => {

    const latitud = pos.coords.latitude;

    console.log(latitud);

    const cambiarColor = ((latitud) => {
        
        if (latitud > 0) {
            body.style.backgroundColor = "blue";
        } else if (latitud === 0) {
            body.style.backgroundColor = "yellow";
        } else if (latitud < 0) {
            body.style.backgroundColor = "green";
        }
    });

    cambiarColor(latitud);
});

