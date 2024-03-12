import { Jugador } from './Jugador.js';
import { Jugada } from './Jugada.js';
import { Dado } from './Dado.js'

interface ResultadoJugada {
    puntosJ1: number;
    puntosJ2: number;
}

export class JuegoDados {
    cantidadJugadas: number;
    jugador1: Jugador;
    jugador2: Jugador;
    marcadorJugador1: number;
    marcadorJugador2: number;
    dado1: Dado;
    dado2: Dado;
    vencedor: Jugador | null;
    private bandJugador: boolean;  // true = Jugador1, false = Jugador2
    historialJugadas: ResultadoJugada[];

    constructor(nombreJugador1: string, nombreJugador2: string) {
        this.jugador1 = new Jugador();
        this.jugador1.nombre = nombreJugador1;
        this.jugador2 = new Jugador();
        this.jugador2.nombre = nombreJugador2;
        this.historialJugadas = [];
    }

    elegirPrimerLanzador() {
        if (Math.random() * (3 - 1) === 1) {
            this.bandJugador = false;
        } else {
            this.bandJugador = true;
        }
    }

    iniciarJugada() {
        const jugadaActual = new Jugada();
        if (this.bandJugador) {
            let resultado = jugadaActual.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2);
            this.historialJugadas.push(resultado);
        }
        else {
            let resultado = jugadaActual.iniciarJugada(this.jugador2, this.jugador1, this.dado1, this.dado2);
            this.historialJugadas.push(resultado);
        }
        this.marcadorJugador1 += this.jugador1.puntoGanado;
        this.marcadorJugador2 += this.jugador2.puntoGanado;
    }
    iniciarJuego() {
        this.dado1 = new Dado();
        this.dado2 = new Dado();
        this.cantidadJugadas = 0;
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.elegirPrimerLanzador();
    }

    determinarVencedor(): Jugador | null {
        // caso empate
        if (this.marcadorJugador1 === 5 && this.marcadorJugador2 === 5) {
            return null;
        }

        // ganó el jugador 1
        if (this.marcadorJugador1 === 5) {
            return this.jugador1;
        } else if (this.marcadorJugador2 === 5) { // ganó el jugador 2
            return this.jugador2;
        }

        return null;
    }
}
