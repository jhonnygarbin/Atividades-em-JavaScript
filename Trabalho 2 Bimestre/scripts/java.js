// 1
function calculateArea() {
    var width = document.getElementById("width").value;
    var length = document.getElementById("length").value;
    var area = width * length;
    document.getElementById("result").innerText = "Área do terreno: " + area + " metros quadrados";
}


// 2
  function calculateFerraduras() {
    var horses = document.getElementById("horses").value;
    var ferraduras = horses * 4;
    document.getElementById("result2").innerText = "Quantidade de ferraduras necessárias: " + ferraduras;
}


// 3
  function calculateArrecadacao() {
    var paes = document.getElementById("paes").value;
    var broas = document.getElementById("broas").value;
    var totalArrecadado = paes * 0.12 + broas * 1.5;
    var poupanca = totalArrecadado * 0.1;
    document.getElementById("result3").innerText = "Arrecadação: R$ " + totalArrecadado.toFixed(2) +
      "\nValor a guardar na poupança: R$ " + poupanca.toFixed(2);
}


// 4
function calculateDiasDeVida() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var diasDeVida = idade * 365;
    document.getElementById("result4").innerText = nome + ", você já viveu " + diasDeVida + " dias.";
}


// 5
function calculateLitros() {
  var precoLitro = document.getElementById("precoLitro").value;
  var pagamento = document.getElementById("pagamento").value;
  var litros = pagamento / precoLitro;
  document.getElementById("result5").innerText = "Quantidade de litros: " + litros.toFixed(2);
}


// 6 
function calculateQuilos() {
  var peso = parseFloat(document.getElementById('peso').value);
  var valor = peso * 12;
  document.getElementById('result6').textContent = 'Valor a pagar: R$' + valor.toFixed(2);
}


// 7
function calculateDias() {
  var dia = parseInt(document.getElementById('dia').value);
  var mes = parseInt(document.getElementById('mes').value);
  var diasPassados = (mes - 1) * 30 + dia;
  document.getElementById('result7').textContent = 'Dias passados desde o início do ano: ' + diasPassados;
}


// 8
function calcularValor() {
  var quantidadePequena = parseInt(document.getElementById("quantidade-pequena").value);
  var quantidadeMedia = parseInt(document.getElementById("quantidade-media").value);
  var quantidadeGrande = parseInt(document.getElementById("quantidade-grande").value);

  var valorPequena = quantidadePequena * 10;
  var valorMedia = quantidadeMedia * 12;
  var valorGrande = quantidadeGrande * 15;
  var valorTotal = valorPequena + valorMedia + valorGrande;

  document.getElementById("result8").innerHTML = "Valor arrecadado:<br>Camisetas pequenas: R$ " + valorPequena.toFixed(2) + "<br>Camisetas médias: R$ " + valorMedia.toFixed(2) + "<br>Camisetas grandes: R$ " + valorGrande.toFixed(2) + "<br>Total: R$ " + valorTotal.toFixed(2);
}


// 9
function calculateDistance() {
  var p1x = parseFloat(document.getElementById("p1x").value);
  var p1y = parseFloat(document.getElementById("p1y").value);
  var p2x = parseFloat(document.getElementById("p2x").value);
  var p2y = parseFloat(document.getElementById("p2y").value);

  var distance = Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
  document.getElementById("result9").innerHTML = "Distância: " + distance.toFixed(2);

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;

  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(canvas.width, centerY);
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, canvas.height);
  ctx.strokeStyle = "#ddd";
  ctx.stroke();

  ctx.fillStyle = "#4CAF50";
  ctx.beginPath();
  ctx.arc(centerX + p1x, centerY - p1y, 4, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "#f44336";
  ctx.beginPath();
  ctx.arc(centerX + p2x, centerY - p2y, 4, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(centerX + p1x, centerY - p1y);
  ctx.lineTo(centerX + p2x, centerY - p2y);
  ctx.strokeStyle = "#000";
  ctx.stroke();
}


// 10
function converterTempo() {
  var dias = parseInt(document.getElementById("dias").value);

  var anos = Math.floor(dias / 365);
  var meses = Math.floor((dias % 365) / 30);
  var diasRestantes = (dias % 365) % 30;

  var resultado = document.getElementById("result10");
  resultado.textContent = "Tempo de Trabalho sem Acidentes: " + anos + " anos, " + meses + " meses e " + diasRestantes + " dias.";
}


// 11
function calcularSalario() {
  var salario = parseFloat(document.getElementById("salario").value);

  var aumento = salario * 0.15;
  var salarioAumentado = salario + aumento;
  var impostos = salarioAumentado * 0.08;
  var salarioFinal = salarioAumentado - impostos;

  var resultado = document.getElementById("result11");
  resultado.innerHTML = "Salário Inicial: R$ " + salario.toFixed(2) + "<br>" +
                        "Salário com Aumento: R$ " + salarioAumentado.toFixed(2) + "<br>" +
                        "Salário Final (com desconto de impostos): R$ " + salarioFinal.toFixed(2);
}


// 12
function imprimirNumero() {
  var numero = parseInt(document.getElementById("numero").value);

  var centena = Math.floor(numero / 100);
  var dezena = Math.floor((numero % 100) / 10);
  var unidade = numero % 10;

  var resultado = document.getElementById("result12");
  resultado.innerHTML = "CENTENA = " + centena + " DEZENA = " + dezena + " UNIDADE = " + unidade;
}


// 13
function calcularArea() {
  var raio = parseFloat(document.getElementById("raio").value);
  var pi = 3.14;
  var area = pi * raio * raio;

  var canvas2 = document.getElementById("canvas2");
  var context = canvas2.getContext("2d");
  var centerX = canvas2.width / 2;
  var centerY = canvas2.height / 2;

  context.clearRect(0, 0, canvas2.width, canvas2.height);

  context.beginPath();
  context.arc(centerX, centerY, raio, 0, 2 * Math.PI);
  context.fillStyle = "#FDB813";
  context.fill();
  context.closePath();

  var resultado = document.getElementById("result13");
  resultado.innerHTML = "A área da pizza é: " + area.toFixed(2) + " unidades quadradas.";
}


// 14
function calcularDivisao() {
  var totalConta = parseFloat(document.getElementById("totalConta").value);

  var valorCarlos = Math.floor(totalConta / 3);
  var valorAndre = Math.floor(totalConta / 3);
  var valorFelipe = totalConta - (valorCarlos + valorAndre);

  var resultado = document.getElementById("result14");
  resultado.innerHTML = "Carlos deve pagar: R$" + valorCarlos.toFixed(2) +
    "<br>André deve pagar: R$" + valorAndre.toFixed(2) +
    "<br>Felipe deve pagar: R$" + valorFelipe.toFixed(2);
}



