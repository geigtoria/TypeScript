class Livro {
    titulo: string;
    autor: string;
    paginas: number;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    informacoes_livro(): string {
        return `O livro se chama ${this.titulo}, foi escrito por ${this.autor} e possui ${this.paginas} páginas.`;	        
    }
}

const livro1 = new Livro("Iracema", "José de Alencar", 192);
console.log(livro1.informacoes_livro());