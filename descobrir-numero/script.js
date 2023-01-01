var numberToFind = 0;
var attemps = 0;

function refresh () {
    // gera um número aleatório
    attemps = 0;
    numberToFind = parseInt(Math.random() * 100);

}

function verifyNumber() {

    var bet = document.getElementById('bet').value;

    if(bet > 100 || bet < 1) 
    {
        alert('Aposta Inválida');
        return;
    }
    
    if(bet > numberToFind)
    {
        attemps++;
        alert('O número para ser encontrado é MENOR');
    }
    else if(bet <numberToFind) 
    {
        attemps++;
        alert('O número para ser encontrado é MAIOR');
    }
    else 
    {
        alert('Parabéns você acertou! O número era! '+numberToFind+ ' Você obteve '+attemps+' erros');
        refresh();
    }



}

refresh();