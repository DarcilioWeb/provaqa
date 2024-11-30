#language: pt
Funcionalidade: XSS simples


Cenario: dom xss
    Dado que acessa a pagina home
    E que eu aperta Dismiss
    E no campo de busca eu coloque o codigo malicioso
    Entao aperta Enter
    Entao deve aparecer a mensagem confirmando o xss

