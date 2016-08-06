// Global
const EDAD_LIMITE = 20;
let edad: number = Number(prompt("Ingrese edad"));

// Block Scope
if (edad < EDAD_LIMITE) {
    let scopeGrupo = "Grupo de jovenes";
} else {
    let scopeGrupo = 'Grupo Master';
}

console.log(`Grupo: ${scopeGrupo}`);
