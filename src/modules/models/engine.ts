import { IMotor } from '../interfaces/interfaces';

export class Engine implements IMotor {
    constructor(public caballosFuerza: number, public tipo: string) {}

    iniciar(): void {
        console.log(`Engine ${this.tipo} iniciado (Engine class)`);
    }

    detener(): void {
        console.log(`Engine ${this.tipo} detenido (Engine class)`);
    }
}
