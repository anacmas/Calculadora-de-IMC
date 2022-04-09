
const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = ((peso/(altura*altura))*10000);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        } else if(valorIMC < 25){
            classificacao = 'normal';
        } else if(valorIMC < 30){
            classificacao = 'levemente acima do normal';
        } else if(valorIMC < 35){
            classificacao = 'obesidade grau I'
        }else if(valorIMC < 40){
            classificacao = 'obesidade grau II'
        }else {
            classificacao = 'obesidade grau III'
        }


        resultado.textContent = `${nome.replace(/^\w/, (c) => c.toUpperCase())}, seu IMC é ${parseFloat(valorIMC).toFixed(1)} e seu peso é considerado ${classificacao}`;

    } else {
        alert('Preencha todos os campos!')
    }
}

calcular.addEventListener('click', imc);

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        const botao = document.querySelector("#calcular");
        botao.click();
    }
})