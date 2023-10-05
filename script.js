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

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!*/


let numberOne = prompt("Digite aqui seu primeiro número")
let numbertwo = prompt("Digite aqui o seu segundo número")

numberOne = Number(numberOne)
numbertwo = Number(numbertwo)


const sum = numberOne + numbertwo

const sub = numberOne - numbertwo

const  multi = numberOne *numbertwo

const div = numberOne / numbertwo

const restDiv = numberOne % numbertwo


alert("A soma dos dois números : " + sum )
alert("A subtração dos dois números : " + sub )
alert("A multiplicação dos dois números: " + multi  )
alert(" A divisão dos dois números : " + div )
alert("O resto da divisão dos dois números : "  + restDiv ) 



if (numberOne == numbertwo)
{
    alert (`Os números São iguais ! `)
}else {
    alert ("Os números são diferentes ! ")
} if (restDiv ==0){

    alert (`a soma do seus números é Par : ${sum}`)
}else{
    alert (`a soma do seus números é impar: ${sum} `)
}