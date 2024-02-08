function mostrarMensagem() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    
    alert("Mensagem enviada por " + nome + " (" + email + ")");
}

function mudarCor() {
    var elementosColoridos = document.getElementsByClassName("primary-color");

    for (var i = 0; i < elementosColoridos.length; i++) {
        elementosColoridos[i].style.color = getRandomColor();
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function mostrarOcultar() {
    var elementosOcultos = document.getElementsByClassName("secondary-color");

    for (var i = 0; i < elementosOcultos.length; i++) {
        var displayAtual = elementosOcultos[i].style.display;
        elementosOcultos[i].style.display = (displayAtual === 'none' || displayAtual === '') ? 'block' : 'none';
    }
}
