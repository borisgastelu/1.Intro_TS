namespace funciones {

    // Closures, funciones anidadas que pueden mantener
    //   el valor de las variables de su contexto superior

    padreFn();

    // contexto Padre
    function padreFn() {

        let estadoPadre = 'PADRE';
        // let valorDelHijo = estadoHijo;  // error, no visible

        hijaFn();
        hermanaFn();

        // contexto Hijo
        function hijaFn() {

            let estadoHijo = "HIJO";
            console.log(estadoPadre);

            nietoFn();

            function nietoFn() {

                console.log(estadoPadre);
                console.log(estadoHijo);

            }

        }

        function hermanaFn() {
            console.log('HERMANA');
        }

    }

    // function externaFn() {
    //     hijaFn();
    //     nietoFn();
    // }

}
