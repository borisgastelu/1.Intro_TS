import { IMotor } from '../interfaces/interfaces';

export class Motor implements IMotor {
    constructor(public caballosFuerza: number, public tipo: string) {}

    iniciar(): void {
        console.log(`Motor ${this.tipo} iniciado (Motor class)`);
    }

    detener(): void {
        console.log(`Motor ${this.tipo} detenido (Motor class)`);
    }
}
