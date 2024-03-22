let n1, n2, res, conta;

function soma(num1, num2) {
    res = num1 + num2
    alert(res)
}

function subtração(num1, num2) {
    res = num1 - num2
    return
}

function multiplicação(num1, num2) {
    res = num1 * num2
   alert(res)
}

function divisão(num1, num2) {
    res = num1 / num2
    return
}


do {
    op = Number(prompt ("insira a opção desejada, 1-soma, 2-subtração, 3-divisão, 4-multiplicação e 0-sair"))
    n1 = prompt ("insira o primeiro número")
    n2 = prompt ("insira o segundo número")

    switch (op) {
        case 1:
            soma(n1, n2);
            break;

        case 2:
            subtração(n1, n2);
            break;

        case 3:
            divisão(n1, n2)
            break;

        case 4:
            multiplicação(n1, n2)
            break;
    }
} while(op!=0)






