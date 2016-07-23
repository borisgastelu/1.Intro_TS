namespace truthy_falsy {

    // Falsies:
    // 0, '', "", undefined, null, false

    // Number
    console.log(!0);        // false
    console.log(!!0);       // false
    console.log(!!5);       // true

    // String
    let text = '';
    console.log(!!text);    // false
    text = ' ';             // evalua ASCII
    console.log(!!text);    // true
    text = 'text';
    console.log(!!text);    // true

    // Boolean
    let bool = true;
    console.log(!!bool);

    // Objeto Literal
    let obj: Object = {};   // Objeto Literal vacio (sin propiedades)
    console.log(!!obj);

    obj = null;             // objeto literal no asignado
    console.log(!!obj);

    // Undefined
    let no_declarada;       // undefined
    console.log('No declarada ' + !!no_declarada);

}
