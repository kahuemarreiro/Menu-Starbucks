/* 
   JavaScript não é Java
   Variáveis (Qualquer Linguagem de Programação)
      - Um pedaço da memoria do computador que voce separa e guarda o que quiser

      Função - É um pedacinho de codigo que so executa quando é chamando
    
      Console.log() - Uma ferramenta do JS que, tudo que eu colocar ali dentro, 
      ele mostra na tela

      - Algoritmo (Receita de bolo)
       [x] Descobrir quando o usuário clico o botao
       [x] Quem é a imagem que eu vou trocar
       [x] Trocar a imagem principal
       [x] Coloca a imagem desejada
       [] Trocar a cor de fundo
        
        document = HTML
        querySelector = selecionar o que eu quiser no HTML

*/
let imagem = document.querySelector(".imagem-copo")

function trocaImagem(endereco){
    imagem.src = endereco

}



