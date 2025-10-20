const incrementar = (function () {
    let contador =0;
    return function() {
        contador++;
        console.log(contador);
    };
})();

incrementar();
incrementar();
incrementar();
incrementar();

console.log(contador);