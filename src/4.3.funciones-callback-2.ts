namespace funciones {

    let sumar = (n1: number, n2: number): number => {
        return n1 + n2;
    };

    let restar = (n1: number, n2: number): number => {
        return n1 - n2;
    };

    let multiplicar = (n1: number, n2: number): number => {
        return n1 * n2;
    };

    let calculadora = (n1: number, n2: number, calcular): number => {
        return calcular(n1, n2);
    };

    let n1: number = parseInt(prompt('Ingrese primer numero:'));
    let n2: number = parseInt(prompt('Ingrese segundo numero:'));

    console.log(calculadora(n1, n2, sumar));
    console.log(calculadora(n1, n2, restar));
    console.log(calculadora(n1, n2, multiplicar));

}
