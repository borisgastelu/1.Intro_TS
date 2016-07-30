// Funciones de Orden Superior y Callbacks
namespace funciones {

    let ordenSuperiorFn = (otraFuncion) => {
        let resultado = otraFuncion();
        console.log(resultado);
    };

    ordenSuperiorFn(sumar);
    ordenSuperiorFn(restar);

    function sumar() {
        return 1 + 1;
    }

    function restar() {
        return 1 - 1;
    }

}
