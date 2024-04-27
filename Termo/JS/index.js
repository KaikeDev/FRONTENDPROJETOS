function mostrarConteudo() {
  let vElemento = document.getElementById("palavra").value;

  let vPalavra1 = document.getElementById("palavra1");
  let vPalavra2 = document.getElementById("palavra2");
  let vPalavra3 = document.getElementById("palavra3");
  let vPalavra4 = document.getElementById("palavra4");
  let vPalavra5 = document.getElementById("palavra5");

  vPalavra1.innerHTML = vElemento.charAt(0).toUpperCase();
  vPalavra2.innerHTML = vElemento.charAt(1).toUpperCase();
  vPalavra3.innerHTML = vElemento.charAt(2).toUpperCase();
  vPalavra4.innerHTML = vElemento.charAt(3).toUpperCase();
  vPalavra5.innerHTML = vElemento.charAt(4).toUpperCase();
}
function mostrarPalavra() {
    let vElemento = document.getElementById("palavra").value.toUpperCase();

    if (vElemento.length !== 5) {
        alert("Digite uma palavra com 5 letras");
        return;
    }

    let palavra = [];
    palavra.length = 5;
    palavra[0] = document.getElementById("pud1");
    palavra[1] = document.getElementById("pud2");
    palavra[2] = document.getElementById("pud3");
    palavra[3] = document.getElementById("pud4");
    palavra[4] = document.getElementById("pud5");

    for (let i = 0; i < 5; i++) {
        palavra[i].innerHTML = vElemento.charAt(i);
        palavra[i].style.backgroundColor = "#4c4347";
    }

    let palavraCerta = ["K", "A", "I", "K", "E"];
    let corretas = [];
    let incorretas = [];

    for (let i = 0; i < 5; i++) {
        if (vElemento.charAt(i) === palavraCerta[i]) {
            corretas.push(i);
        } else {
            incorretas.push(i);
        }
    }

    let contador = 0

    // Marcando letras corretas em verde
    for (let i = 0; i < corretas.length; i++) {
        palavra[corretas[i]].style.backgroundColor = "green";
        contador++
    }

    if(contador == 5){
        alert("Parabéns você acertou a palavra!!!")
    }
  // Marcando letras incorretas que estão na palavra certa em amarelo
  for (let i = 0; i < incorretas.length; i++) {
    let incorreta = incorretas[i];
    let letraIncorreta = vElemento.charAt(incorreta);
    if (palavraCerta.includes(letraIncorreta)) {
        let indexCorreta = palavraCerta.indexOf(letraIncorreta);
        if (!corretas.includes(indexCorreta)) {
            palavra[incorreta].style.backgroundColor = "yellow";
        }
        }
    }

}


function reiniciar(){
    window.location.reload();
}