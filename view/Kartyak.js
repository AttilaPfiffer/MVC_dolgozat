import Kartya from "./Kartya.js";


export default class Kartyak {
    
    #lista = [];
    #elem;
    #db;

    constructor(lista, elem) {
        this.#lista = lista;
        this.#elem = elem;
        this.db = 0;
        
    }

    kartyakKiirat() {
        this.#lista.forEach((element, index) => {
            new Kartya(element, this.#elem, index)
        })
    }

    setDb() {
        return this.#db
    }
}