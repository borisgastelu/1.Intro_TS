namespace funciones {

    // Expresiones de funcion, cuando se asigna a una variable
    //      primero se declara luego se invoca

    // ES2015
    let testArrowFn = () => {           // todas son anonimas
        console.log('testArrowFn');
    };
    testArrowFn();

    // ES5
    //      Expresiones de funcion nombradas
    let testRegularFn = function nombreDeMiFuncionRegular() {   // si se pueden nombrar
        console.log('testRegularFn');
    };
    testRegularFn();

    // Declaracion de funcion, viven en todo el ambito del codigo
    //      no importa el orden de invocion
    // ES5
    declaracionFn();

    function declaracionFn() {
        console.log('declaracionFn');
    }

}
