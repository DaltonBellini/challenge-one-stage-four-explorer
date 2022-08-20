/*Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
5.3 6
*/


let numberOne = prompt('Digite o primeiro número da operação')
let numberTwo = prompt('Digite o segundo número da operação')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo

let div = numberOne / numberTwo
let res = numberOne % numberTwo

let evenOdd = numberOne + numberTwo 

if(sub % 1){ 
    sub = sub.toFixed(2)
}


if(div % 1){ 
    div = div.toFixed(2)
}

if(res % 1){ 
    res = res.toFixed(2)
}

alert('Soma: ' + sum )
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div)
alert('Resto: ' + res)

if(evenOdd % 2 == 0){ 
    alert(`A soma dos dois números é par: ${evenOdd}`)
}else{ 
    alert(`A soma dos dois números é impar: ${evenOdd}`) 
}

if(numberOne === numberTwo){ 
    alert(`Os números adicionados são iguais, sendo o primeiro número adicionado ${numberOne} e o segundo número adicionado ${numberTwo}`)
}else{ 
    alert(`Os dois números são diferentes, sendo o primeiro número adicionado ${numberOne} e o segundo número adicionado ${numberTwo}`)
}