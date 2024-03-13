const inputProduto = document.getElementById('produto')
// inputProduto.value : vai capturar o valor que o usario digitou.
const respostah4 = document.getElementById('resposta')
// respostah4.innerText : aqui eu posso modificar o texto do id resposta no html

//como estou processando o DOM no inicio do JS e nao dentro de uma funçao, la
//no html eu preciso carregar ele no final para nao dar erro. Primeiro carrega o que tem dentro
//do body e depois o DOM, pois os elementos do body ja estao criados e se deixasse la em cima no head ia dar erro
// que nao existem os ids

function consultarPreco() {
    const produto = inputProduto.value.toLocaleLowerCase();
    switch (produto) {
        //Cuidar com as letras e diferentes pessoas que irao digitar o nome. A funçao tolocallowercase() transforma todas
        //as palavras em minusculas. Garante que o que o usuário digitar será igual ao nome da função nossa.
        //Por isso a importante de escrever a funçao ja em letra minuscula para usar a funçao lowecase corretamente.
        case 'morango':
        case '1':
            //da para colocar um numero para puxar o morango. No caso ali se a pessoa digitar 1 aparecerá o preço
            //do morango.
            respostah4.innerText = 'R$ 5,99/Kg'
            break;
        
        case 'laranja':
        case '2':
            respostah4.innerText = 'R$ 7,99/Kg'
            break;
        
        case 'sair':
        case '0':
            respostah4.innerText = 'Programa Encerrado'
            break;
            continua = false; // quando o usuario digitar 0 ou sair, vai cair no case sair/0 e a variavel
                              // continua vai passar para false. Como o continua=false esta dentro do laço de
                              // repetição (dentro do while), quando o programa retornar ao inicio ele nao dara mais
                              // sequencia no loop. Importante sacar que esta dentro do loop tudo.
    
    
        default:
            respostah4.innerText = 'Produto não cadastrado'
            break;
      }
    }












    let continua = true; // se a variavel continua for true ...

    while(continua){   // enquanto a variavel continua for true execute o bloco...
    
      const input = prompt('Digite nome ou código do produto. Digite 0 ou sair para encerrar')
      switch (input.toLocaleLowerCase()) {
        //Cuidar com as letras e diferentes pessoas que irao digitar o nome. A funçao tolocallowercase() transforma todas
        //as palavras em minusculas. Garante que o que o usuário digitar será igual ao nome da função nossa.
        //Por isso a importante de escrever a funçao ja em letra minuscula para usar a funçao lowecase corretamente.
        case 'morango':
        case '1':
            //da para colocar um numero para puxar o morango. No caso ali se a pessoa digitar 1 aparecerá o preço
            //do morango.
            alert ('R$ 5,99/Kg');
            break;
        
        case 'laranja':
        case '2':
            alert('R$ 7,99/Kg')
            break;
        
        case 'sair':
        case '0':
            alert('Programa Encerrado');
            break;
            continua = false; // quando o usuario digitar 0 ou sair, vai cair no case sair/0 e a variavel
                              // continua vai passar para false. Como o continua=false esta dentro do laço de
                              // repetição (dentro do while), quando o programa retornar ao inicio ele nao dara mais
                              // sequencia no loop. Importante sacar que esta dentro do loop tudo.
    
    
        default:
            alert('Produto não cadastrado')
            break;
      }
    }
    

    