namespace clases {

    class Accesorio {
        constructor(public numero: number, public nombre: string) {}
    }

    class Motor {
        constructor(public caballosFuerza: number, public tipo: string) {}

        iniciar() {
            console.log(`Motor ${this.tipo} iniciado`);
        }

        detener() {
            console.log(`Motor ${this.tipo} detenido`);
        }
    }

    class Auto {
        // Propiedad miembro
        private _precioBase: number;
        private _motor: Motor;
        listaAccesorios: string;

        constructor(precioBase: number, motor: Motor, private marca: string, public modelo: string) {
            this._precioBase = precioBase;
            this._motor = motor;
        }

        // Se declara como metodo
        get precBase() {
            return this._precioBase;
        }

        set precBase(precioBase: number) {
            if (precioBase == undefined) throw 'Ingrese un precio base';
            if (precioBase < 100) throw 'Ingrese un valor mayor que 100';
            this._precioBase = precioBase;
        }

        get motor() {
            return this._motor;
        }

        set motor(motor: Motor) {
            if (motor == undefined) throw 'Agregue un motor';
            this._motor = motor;
        }

        calcularCosto() {
            let igv = .18;
            return this._precioBase + (this._precioBase * igv);
        }

        agregarAccesorio(...accesorios: Accesorio[]): void {
            this.listaAccesorios = '';

            accesorios.forEach(item => {
                this.listaAccesorios += `${item.numero} - ${item.nombre}\n`;
            });
        }

        obtenerAccesorios(): string {
            return this.listaAccesorios;
        }

        encender() {
            console.log(`Encendiendo auto ${this.modelo}...`);
            this._motor.iniciar();
        }

        apagar() {
            console.log(`Apagar auto ${this.modelo}...`);
            this._motor.detener();
        }

    }

    let motor2 = new Motor(500, 'GioGio');
    let autoKia = new Auto(6000, motor2, 'Kia', 'Sportage');

    let puerta = new Accesorio(1, 'Puerta');
    let llanta = new Accesorio(2, 'Llanta');
    let timon = new Accesorio(3, 'Timon');

    autoKia.agregarAccesorio(puerta, llanta, timon);

    console.log(autoKia);

    console.log(autoKia.obtenerAccesorios());

    autoKia.encender();
    autoKia.apagar();

    console.log(autoKia.calcularCosto());

    // Se accede como una propiedad
    // autoKia.precBase = -100;
    // console.log(autoKia.precBase);

}
