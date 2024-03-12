import { Jugador } from './Jugador.js';
import { Dado } from './Dado.js';
interface ResultadoJugada {
    puntosJ1: number;
    puntosJ2: number;
}

export class Jugada {
    
    iniciarJugada(jugador1: Jugador, jugador2: Jugador, dado1: Dado, dado2: Dado): ResultadoJugada {
        let puntosJ1: number, puntosJ2: number;
        puntosJ1 = this.turnarJugador(jugador1, dado1, dado2);
        puntosJ2 = this.turnarJugador(jugador2, dado1, dado2);

        this.determinarGanador(jugador1, puntosJ1, jugador2, puntosJ2);

        return { puntosJ1, puntosJ2 };
    }

    private turnarJugador(jugadorEnTurno: Jugador, d1: Dado, d2: Dado): number {
        return jugadorEnTurno.lanzaDados(d1, d2);
    }

    determinarGanador(j1: Jugador, pJ1: number, j2: Jugador, pJ2: number): void {
        if (pJ1 === 7) {
            // se le asigna un punto al jugador 1
            j1.puntoGanado = 1;
        } else {
            j1.puntoGanado = 0;
        }

        if (pJ2 === 7) {
            // se le asigna un punto al jugador 2
            j2.puntoGanado = 1;
        } else {
            j2.puntoGanado = 0;
        }
    }
}
