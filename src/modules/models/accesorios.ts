import { IAccesorio } from '../interfaces/interfaces';

export class Accesorio implements IAccesorio {

    constructor(public numero: number, public nombre: string) {}

}
