"use strict";
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    informacoes_livro() {
        return `O livro se chama ${this.titulo}, foi escrito por ${this.autor} e possui ${this.paginas} páginas.`;
    }
}
const livro1 = new Livro("Iracema", "José de Alencar", 192);
console.log(livro1.informacoes_livro());
