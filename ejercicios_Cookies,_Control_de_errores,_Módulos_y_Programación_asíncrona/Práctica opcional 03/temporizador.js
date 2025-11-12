export function temporazidor(segundos) {
    return new Promise((resolve, reject) => {
        const idReject = setTimeout(() => reject("El tiempo no va bien"), segundos*2);

        setTimeout(() => {
            clearTimeout(idReject);
            resolve("Tiempo concluido");
        }, segundos);
    });
}

export async function cuenta(inicioCuenta, elemento = document.body, intervalo = 1000, paso = 1, callback) {
    for(let i=inicioCuenta; i>=0;i -= paso) {
        elemento.textContent = i;
        await new Promise(res => setTimeout(res,intervalo));
    }
    if(callback) callback();
}