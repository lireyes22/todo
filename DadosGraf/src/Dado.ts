export class Dado {
    puntos: number;
    lanzar() {
        return this.puntos = Math.floor(Math.random() * 6) + 1;
    }
}
