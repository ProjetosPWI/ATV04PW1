// Requisitos
// 1 - lista para armazenar titulos
const livros = ['Harry Potter', 'Senhor dos Aneis', 'Persy Jackson'];
  
// 2 - mapa para armazenar os autores 
const autores = new Map
([
    ['Harry Potter', 'J. K. Rowling'],
    ['Senhor dos Aneis', 'J. R. R. Tolkien'],
    ['Persy Jackson', 'Rick Riordan']
]);

// 3 - conjunto para armazenar os generos
const generos = new Set(['Aventura', 'Ação', 'Fantasia']);

// 4 - adicionar
function adicionarLivro(titulo, autor, genero)
{
    if (!livros.includes(titulo)) // evita duplicatas
    {
        livros.push(titulo);
        autores.set(titulo, autor);
        generos.add(genero);

        console.log(`O livros "${titulo}" foi adicionado.`);
    }
    else
    {
        console.log(`O livros "${titulo}" já existe na biblioteca.`)
    }
}

// 5 - remover
function removerLivro(titulo)
{
    const index = livros.indexOf(titulo);
    if (index !== -1)
    {
        livros.splice(index, 1);
        autores.delete(titulo);

        console.log(`O livro "${titulo}" foi removido.`)
    }
    else
    {
        console.log(`O livro "${titulo}" não está na biblioteca.`)
    }
}

// 6 - listar
function listarLivros() 
{
    console.log("Livros disponíveis:");
    livros.forEach(titulo => {
        console.log(`- ${titulo} (Autor: ${autores.get(titulo)})`);
    });
}

// 7 - disponibilidade
function verificarDisponibilidade(titulo) 
{
    if (livros.includes(titulo)) 
    {
        console.log(`O livro "${titulo}" está disponível.`);
        return true;
    } 
    else 
    {
        console.log(`O livro "${titulo}" não está disponível.`);
        return false;
    }
}

// 8 - busca
function buscarLivrosPorGenero(genero) 
{
    console.log(`Buscando livros por gênero "${genero}": `);
    const livrosPorGenero = livros.filter(titulo => generos.has(genero));

    if (livrosPorGenero.length > 0)
    {
        livrosPorGenero.forEach(titulo => console.log(`- ${titulo}`));
        return livrosPorGenero;
    }
    else
    {
        console.log("Nenhum livro encontrado nesse gênero.")
        return [];
    }
}

// Testando as funções
adicionarLivro('Duna', 'Frank Herbert', 'Ficção Científica');

removerLivro('Percy Jackson');

listarLivros();

verificarDisponibilidade('Harry Potter');

buscarLivrosPorGenero('Fantasia');