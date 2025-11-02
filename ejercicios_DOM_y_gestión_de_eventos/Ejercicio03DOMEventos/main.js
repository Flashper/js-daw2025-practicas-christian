document.addEventListener("DOMContentLoaded", () =>{
    const ps = document.querySelectorAll(".ps");
    const btnReaparecer = document.getElementById("reaparecer");
    const psEliminados = new Set();

    ps.forEach(p => {
        p.addEventListener("click", () => {
            p.style.display="none";
        });

        p.addEventListener("contextmenu", (event) => {
            event.preventDefault();

            psEliminados.add(p);

            p.remove();
        });
    });

    btnReaparecer.addEventListener("click", () => {
        ps.forEach(p => {
            if(!psEliminados.has(p)){
                p.style.display = "block";
            }
        });
    });
});