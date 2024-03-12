import { Dado } from './Dado.js';
export class Jugador {
    nombre: string;
    puntoGanado: number;

    lanzaDados(dado1: Dado, dado2: Dado): number {
        dado1.lanzar();
        dado2.lanzar();
        return dado1.puntos + dado2.puntos;
    }
}
