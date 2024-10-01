import { motivationalQuotes } from "../motivacios_lista.js";

export default class Kartya {

    #szuloElem;
    #elem;
    #index;
    #kattintas;
    

    constructor(elem, szuloElem, index) {
        this.#szuloElem = szuloElem;
        this.#index = index;
        this.#elem = elem;
        this.megjelenit()
        this.kattintas = $(".valami:last-child")
        this.#kattintas

    }

    megjelenit() {
        `<div>
            <div class = "valami card-body">
                <p>${this.#elem}</p>
            </div>
        </div>`
    }

    kattintas() {
        this.#kattintas.on("click", () => {
            const e = new CustomEvent("katt", {detail:this.#index})
            window.dispatchEvent(e)
        })
    }
}