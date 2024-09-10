let preco = parseFloat(prompt("digite o preco do produto"))
let desconto = parseFloat(prompt("digite o desconto do produto"))
let novovalor=preco-(desconto/100*preco)
alert("o novo preco corrensponde a" + novovalor)
if (novoValor>90) {
    alert("compra pode ser dividida em 3 vezes")
}