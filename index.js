// Prova Introdução a JS

var n1 = parseFloat(prompt("Vamos calcular sua média ponderada, agora, digite a primeira nota:")),
    n2 = parseFloat(prompt("Digite a segunda nota:")),
    n3 = parseFloat(prompt("Digite a terceira nota:"));

var p1 = parseFloat(prompt("Digite o peso da primeira nota:")),
    p2 = parseFloat(prompt("Digite o peso da segunda nota:")),
    p3 = parseFloat(prompt("Digite o peso da terceira nota:"));

var media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

if (!isNaN(media) || media > 0) {
console.log("A média ponderada das suas notas é aproximadamente: " + media.toFixed(2));
} else {
  console.log("Por favor, insira números válidos.");
}