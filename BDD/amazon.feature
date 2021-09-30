#language:pt

Funcionalidade: Pesquisa por  produto  na pagina  da pagina Amazon

    Contexto:
        Dado  Estar  na aba "<livros>"

    Esquema do Cenario:Pesquisar por  livros 
        Quando pesquisar  sobre "<livro>"
        Então  deverá ser  validado que  na  primeira posição da lista "<livro>"
        
        
        Exemplos:   
           |Livro   |
           |Syllabus|
