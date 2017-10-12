class DateConverter {

    constructor() {
        throw new Error('Esta	classe	não	pode	ser	instanciada');
    }

    static paraTexto(data) {

        // using Template Literal
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static paraData(texto) {

        // return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        //fail-fast
        //Regular Expression
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve	estar	no	formato	aaaa-mm-dd');
        }
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }
}