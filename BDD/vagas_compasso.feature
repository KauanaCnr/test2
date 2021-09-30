#language:pt

Funcionalidade: Procura por vagas na pagina da Compasso UOL

    Contexto:
        Dado  Estar  na  pagina inicial da "Compasso UOL"

    Esquema do Cenario:Conferir vagas
        Quando acessar "Confira nossas  vagas"  na  aba "Cultura"
        Então  Validar  se  url foi redirecionada

    Esquema do Cenario:Pesquisar por vagas  na  gupy
        Quando acessar link da  "Gupy"  no  "Confira nossas  vagas"
        Então  Validar  se a "<vagas>"

         Exemplos:   
           |Vagas              |
           |Automação de testes|