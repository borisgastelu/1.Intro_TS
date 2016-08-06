namespace funciones {

    // Orden Superior
    let calculadora = () => {

        // Callback / Closures
        return (operador: string, n1: number, n2: number) => {
            switch (operador) {
                case '+': return sumar(n1, n2);
                case '-': return restar(n1, n2);
            }
        };

        function sumar(n1: number, n2: number) {
            return n1 + n2;
        };

        function restar (n1: number, n2: number) {
            return n1 - n2;
        };

    };

    let calcular = calculadora();

    let suma = calcular('+', 10, 10);
    let resta = calcular('-', 100, 10);

    console.log(suma);
    console.log(resta);

}
