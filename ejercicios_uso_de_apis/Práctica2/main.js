//------------------------------------------ VERSION 3 -------------------------------------------
//version reutilizable que permite grabar solo audio en caso de que no se disponga de cámara.

const btnIniciar = document.getElementById("btnIniciar");
const btnDetener = document.getElementById("btnDetener");
const descargar = document.getElementById("descargar");

let grabar;
let chunks = [];
let mediaStream;

async function iniciarGrabacion(constraints, extension) {
    mediaStream = await navigator.mediaDevices.getUserMedia(constraints);

    grabar = new MediaRecorder(mediaStream);
    chunks = [];

    grabar.ondataavailable = (e) => {
        chunks.push(e.data);
    }

    grabar.onstop = () => {
        const blob = new Blob(chunks, {type: grabar.mimeType});

        const url = URL.createObjectURL(blob);

        descargar.innerHTML = "";
        descargar.href = url;
        descargar.download = `grabación.${extension}`;
        descargar.textContent = "Haz click aquí para descargar";

        mediaStream.getTracks().forEach(track => track.stop());
    }
    grabar.start();
    console.log("Grabación iniciada");
}

btnIniciar.addEventListener("click", async () => {
    try {
        await iniciarGrabacion({video: true, audio: true}, "webm");
    }catch(err) {
        console.error("Error al acceder a la cámara", err);
        console.log("Grabando solo audio");
        try {
            await iniciarGrabacion({audio: true}, "webm");
        }catch(err2) {
            console.error("Error al acceder al micrófono", err2);
        }
    }
});

btnDetener.addEventListener("click", () => {
    if (grabar && grabar.state !== "inactive") {
        grabar.stop();
        console.log("Grabación detenida");
    }
});

//------------------------------------------ VERSION 2 -------------------------------------------
//version try/catch

/*btnIniciar.addEventListener("click", async () => {

    try{
        const mediaStream = await navigator.mediaDevices.getUserMedia({video:true, audio:true});

        grabar = new MediaRecorder(mediaStream);

        chunks = [];

        grabar.ondataavailable = (e) => {
            chunks.push(e.data);
        }

        grabar.onstop = () => {

            const blob = new Blob(chunks, {type: "video/webm"});
            const url = URL.createObjectURL(blob);

            descargar.innerHTML = "";
            descargar.href = url;
            descargar.download = "grabacion.webm";
            descargar.textContent = "Haz click aquí para descargar";

            mediaStream.getTracks().forEach(track => track.stop());
        }

        grabar.start();
        console.log("Grabación iniciada.");
        
    }catch(err) {
        console.error("Error al acceder al micrófono o a la cámara: ", err);
    }
});*/

//------------------------------------------ VERSION 1 -------------------------------------------
//.then()/.catch()

/*btnIniciar.addEventListener("click", () => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((mediaStream) => {
        grabar = new MediaRecorder(mediaStream);

        chunks = [];

        grabar.ondataavailable = ((e) => {
            chunks.push(e.data);
        });

        grabar.onstop = () => {
            const blob = new Blob(chunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);

            descargar.innerHTML = "";
            descargar.href = url;
            descargar.download = "grabacion.webm";
            descargar.textContent = "Descarga el archivo aquí";

            mediaStream.getTracks().forEach(track => track.stop());
        }

        grabar.start();
        console.log("Grabación iniciada");

    }).catch((err) => {
        console.error("Error al acceder a la cámara o al micrófono", err);
    });
});*/