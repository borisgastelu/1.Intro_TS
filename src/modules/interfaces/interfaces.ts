export interface IAccesorio {
    numero: number;
    nombre: string;
}

export interface IMotor {
    caballosFuerza: number;
    tipo: string;
    iniciar: () => void;
    detener: () => void;
}
