namespace interfaces {

    export interface IPersona {
        nombre: string;
        apePaterno: string;
        apeMaterno?: string;
        edad: number;
        frase?: string;
        hobbies?: string[];
        agregarHobbies?: (hobbie: string) => void;
        mostrarHobbies?: () => void;
        separarFrase?: (separador: string) => void;
        agregarTelefono?: (orden: number, tipo: string, numero: string) => void;
    }

}
