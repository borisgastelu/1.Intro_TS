namespace objeto_literal_def2 {

    let persona1 = {};

    for (let i = 0; i < 3; i++) {
        let prop = prompt(`Ingrese propiedad ${i + 1}`);
        let valor = prompt('Ingrese valor para ' + prop);

        persona1[prop] = valor;
    }

    console.log(persona1);

}
