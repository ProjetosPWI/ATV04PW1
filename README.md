# Gerenciamento utilizando Objetos, Mapas e Conjuntos em Javascript

**Cenário**: Você é o responsável pelo gerenciamento de uma biblioteca e precisa criar um programa em Javascript para gerenciar os livros. O programa deve permitir que você adicione, remova e liste os livros, além de verificar se um livro está disponível e buscar livros por gênero.

## Requisitos

1. Crie uma lista para armazenar os títulos dos livros.

2. Crie um mapa para armazenar os autores dos livros, onde a chave é o título do livro e o valor é o autor.

3. Crie um conjunto para armazenar os gêneros dos livros.

4. Altere o programa para que ele também permita buscar livros por gênero. Crie uma função **buscarLivrosPorGenero(genero: String)** que retorna uma lista de títulos de livros que pertencem ao gênero especificado.

## Implemente as seguintes funções:

- **adicionarLivro(titulo: String, autor: String, genero: String):**
  - Adiciona um livro à lista e ao mapa, e adiciona o gênero ao conjunto.
    
- **removerLivro(titulo: String):**
  - Remove um livro da lista e do mapa.
    
- **listarLivros():**
  - Exibe todos os livros na lista.
    
- **verificarDisponibilidade(titulo: String):**
  - Verifica se um livro está disponível (ou seja, se está na lista).
    
- **buscarLivrosPorGenero(genero: String):**
  - Retorna uma lista de títulos de livros que pertencem ao gênero especificado.
