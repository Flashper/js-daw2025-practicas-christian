const segundos = Number(prompt("Introduce un número"))*1000;

function temporazidor(segundos) {
    return new Promise((resolve, reject) => {
        const idReject = setTimeout(() => reject("El tiempo no va bien"), segundos*2);

        setTimeout(() => {
            clearTimeout(idReject);
            resolve("Tiempo concluido");
        }, segundos*2
    );
    });
}

//Versión .then/ .catch
temporazidor(segundos)
    .then((resultado) => {
        document.getElementById("texto").textContent = resultado;
    })
    .catch((resultado) => {
        document.getElementById("texto").textContent = resultado;
    });

//Versión async/await
/*async function iniciar(segundos) {
    try{
        const resultado = await temporazidor(segundos);
        document.getElementById("texto").textContent = resultado;
    }catch(e) {
        document.getElementById("texto").textContent = e;
    }
}

iniciar(segundos);*/