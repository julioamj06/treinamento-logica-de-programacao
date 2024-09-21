function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (qtd <= 0) {
        alert('Quantidades de ingressos inválida. Insira um valor válido!');
    } else if(tipo.value == 'pista') {
        comprarPista (qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = document.getElementById('qtd-pista').textContent;

    if(qtd > qtdPista){
        alert('Quantidade de ingressos indisponível!');
    }else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = document.getElementById('qtd-superior').textContent;

    if(qtd > qtdSuperior) {
        alert('Quantidade de ingressos indisponível!');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}


function comprarInferior (qtd) {
    let qtdInferior = document.getElementById('qtd-inferior').textContent;

    if(qtd > qtdInferior){
        alert('Quantidade de ingressos indisponível!');
    } else {
    qtdInferior = qtdInferior - qtd;
    document.getElementById('qtd-inferior').textContent = qtdInferior;
    alert('Compra realizada com sucesso!');
    }
}