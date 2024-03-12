export class Dado {
    lanzar() {
        return this.puntos = Math.floor(Math.random() * 6) + 1;
    }
}
