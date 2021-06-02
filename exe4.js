function calc(number1, number2) {
    sum = number1 + number2
    sub = number1 - number2
    mult = number1 * number2
    div = number1 / number2
    res = number1 % number2
    return ('Soma: '+sum+'\nSubtração: '+sub+'\nMultiplicação: '+mult+'\nDivisão: '+div+'\nResto: '+res)
}

number1 = 230
number2 = 12
console.log(calc(number1, number2))
