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
        this.kattintas = $(".kivalaszt:last-child")
        this.#kattintas

    }

    megjelenit() {
        this.#szuloElem.append(`
            <div class = "card kivalaszt col-lg-3 col-md-4 col-sm-6">
                <div class = "card-body">
                    <img src = "${this.#elem}" alt = "" class = "w-100">
                </div>
            </div>
        `)
    }

    kattintas() {
        this.#kattintas.on("click", () => {
            const e = new CustomEvent("tartalom", {detail:this.#index})
            window.dispatchEvent(e)
        })
    }
}