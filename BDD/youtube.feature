#language:pt

Funcionalidade: Acesso pagina  youtube

    Contexto:
        Dado  Estar  na  pagina inicial

    Esquema do Cenario:Pesquisar por videos/canais/playlist
        Quando pesquisar  sobre "<assunto>"
        Então  deverá ser  exibido canal "Compasso  UOL"
        E   clicar no canal
        E   clicar no "<sobre>"
        
        Exemplos:   
            |Sobre             |Exibido                             |
            |Descrição         |Breve  Descrição                    |
            |Links             |Redes  sociais                      |
            |Mais  informacoes |Visualizações,  localidade...       |
  