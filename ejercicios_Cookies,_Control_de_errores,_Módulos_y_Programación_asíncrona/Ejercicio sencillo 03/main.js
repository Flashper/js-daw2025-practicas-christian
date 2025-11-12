function simulaProceso(exito) {
    return new Promise((resolve, reject) => {
        if (exito) {
            resolve("Proceso exitoso");
        } else {
            reject("Hubo un error");
        }
    });
}

//.then y .catch
simulaProceso(true)
    .then((resultado) => console.log("Éxito (.then/):", resultado))
    .catch((error) => console.log("Error (.catch):", error));

simulaProceso(false)
    .then((resultado) => console.log("Éxito (.then/):", resultado))
    .catch((error) => console.log("Error (.catch):", error));

// async/await
async function asyncSimularProceso(exito) {
    try {
        const resultado = await simulaProceso(exito);
        console.log("Éxito (async/await):", resultado);
    }catch(error) {
        console.log("Error (async/await):", error);
    }
}

asyncSimularProceso(true);
asyncSimularProceso(false);