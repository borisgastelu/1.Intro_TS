import { Accesorio, Motor, Engine, Auto } from './models/models';
import { Camion } from './models/camion';

export let run = () => {
    console.log('App iniciada');

    let puerta = new Accesorio(1, 'Puerta');
    let llanta = new Accesorio(2, 'Llanta');
    let timon = new Accesorio(3, 'Timon');

    let motor = new Motor(500, 'GioGio');

    // let autoKia = new Auto(6000, motor, 'Kia', 'Sportage');
    // autoKia.agregarAccesorio(puerta, llanta, timon);
    //
    // console.log(autoKia);
    //
    // console.log(autoKia.obtenerAccesorios());
    //
    // autoKia.encender();
    // autoKia.apagar();
    //
    // console.log(autoKia.calcularCosto());

    let engine = new Engine(1000, 'V8');
    let camionVolvo = new Camion(10000, engine, 'Volvo', 'Optimus Prime', true, 12);
    camionVolvo.agregarAccesorio(puerta, llanta, timon);

    console.log(camionVolvo);

    console.log(camionVolvo.obtenerAccesorios());

    camionVolvo.encender();
    camionVolvo.apagar();

    console.log(camionVolvo.calcularCosto());

}
