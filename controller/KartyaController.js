import KartyaModell from "../model/KartyaModell.js";
import Kartyak from "../view/Kartyak.js";

export default class KartyaController {
    #szuloElem;
    #model;
    constructor() {
        this.#szuloElem = $(".tartalom")
        this.#model = new KartyaModell();
        new Kartyak(this.#model.getLista(), this.#szuloElem)
        this.esemenyKezelo()
        
    }

    esemenyKezelo() {
        $(window).on("katt", (event) => {
            this.#model(event.detail)
            new Kartyak(this.#model.getLista(), this.#szuloElem)
        })
    }
}