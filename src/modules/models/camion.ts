import { IMotor } from '../interfaces/interfaces';
import { Auto } from './models';

export class Camion extends Auto {

    contenedor: boolean;
    cantLlantas: number;

    constructor(precioBase: number, motor: IMotor, marca: string, modelo: string, contenedor: boolean, cantLlantas: number) {
        super(precioBase, motor, marca, modelo);
        this.contenedor = contenedor;
        this.cantLlantas = cantLlantas;
    }

}
