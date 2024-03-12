import { Jugador } from './Jugador.js';
import { JuegoDados } from './JuegoDados.js';

let juego;

document.getElementById('startGame').addEventListener('click', () => {
    // Crear nuevos jugadores
    let jugador1 = new Jugador();
    jugador1.nombre = "Player 1";
    let jugador2 = new Jugador();
    jugador2.nombre = "Player 2";
    
    // Crear un nuevo juego
    juego = new JuegoDados(jugador1.nombre, jugador2.nombre);
    juego.elegirPrimerLanzador(); // Asegúrate de que esta línea esté en tu clase JuegoDados
    juego.iniciarJuego(); // Asegúrate de que esta línea esté en tu clase JuegoDados
    document.getElementById('playTurn').style.display = 'inline';
    document.getElementById('gameStatus').innerText = 'El juego ha comenzado, presiona "Lanzar Dados" para jugar.';
});

document.getElementById('playTurn').addEventListener('click', () => {
    juego.iniciarJugada(); // Asegúrate de que esta función permita jugar un turno a la vez y actualice el estado del juego
    const status = `Turno ${juego.cantidadJugadas}: \nJugador 1 tiene ${juego.marcadorJugador1} puntos. \nJugador 2 tiene ${juego.marcadorJugador2} puntos.`;
    document.getElementById('gameStatus').innerText = status;

    if (juego.marcadorJugador1 === 5 || juego.marcadorJugador2 === 5) {
        let winner = juego.determinarVencedor();
        let message = winner ? `El ganador es ${winner.nombre}` : "EMPATE";
        document.getElementById('gameStatus').innerText = message;
        document.getElementById('playTurn').style.display = 'none'; // Esconde el botón después de terminar el juego

    }

    actualizarHistorial();
});

function actualizarHistorial() {
    const tabla = document.getElementById('tablaHistorial').getElementsByTagName('tbody')[0];
    // Limpiar la tabla antes de agregar los nuevos resultados para evitar duplicados
    tabla.innerHTML = '';

    juego.historialJugadas.forEach((resultado, index) => {
        // Crear una nueva fila
        let fila = tabla.insertRow();
        // Insertar celdas en la fila
        let celdaJugada = fila.insertCell(0);
        let celdaPuntosJ1 = fila.insertCell(1);
        let celdaPuntosJ2 = fila.insertCell(2);
        // Rellenar las celdas con los datos
        celdaJugada.textContent = index + 1;
        celdaPuntosJ1.textContent = resultado.puntosJ1;
        celdaPuntosJ2.textContent = resultado.puntosJ2;
    });
}
