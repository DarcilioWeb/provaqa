#language: pt
Funcionalidade: login admin


Cenario: login admin
    Dado que acessa a pagina home
    E que eu aperta Dismiss
    E que eu aperta Account
    E que eu aperta login
    E coloca Codigo malicioso
    E coloca baboseira
    Entao aperta log in
    E que eu aperta Account
    Então verifica que eu sou admin
