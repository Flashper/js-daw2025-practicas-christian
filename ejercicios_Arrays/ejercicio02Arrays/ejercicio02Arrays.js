let letras=[];

letras.push("A","B","C");

document.getElementById("primero").textContent=letras.join(", ");

letras.push("D","E");

document.getElementById("segundo").textContent=letras.join(", ");

letras.splice(0,1) && letras.splice(3,4);

document.getElementById("tercero").textContent = letras.join(", ");