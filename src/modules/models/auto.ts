import { IAccesorio, IMotor } from '../interfaces/interfaces';

export class Auto {
    // Propiedad miembro
    private _precioBase: number;
    private _motor: IMotor;
    listaAccesorios: string;

    constructor(precioBase: number, motor: IMotor, public marca: string, public modelo: string) {
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

    set motor(motor: IMotor) {
        if (motor == undefined) throw 'Agregue un motor';
        this._motor = motor;
    }

    calcularCosto() {
        let igv = .18;
        return this._precioBase + (this._precioBase * igv);
    }

    agregarAccesorio(...accesorios: IAccesorio[]): void {
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
