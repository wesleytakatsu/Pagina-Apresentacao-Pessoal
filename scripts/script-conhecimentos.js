
$(document).ready(function(){
    $('#slide').hide();

    $('.btnClose').click(function(){
        $('#slide').fadeOut(800);
    });
});


function carregaConhecimento(documento){
    $('#slideInside').load("conhecimentos/" + documento);
    $('#slide').fadeIn(800);
}

function carregaOracle(nomeCertificado, imagemCertificado){
    const slideInside = document.getElementById('slideInside');
    slideInside.innerHTML = "<h2>Infraestrutura em núvem (Oracle OCI):</h2>" +
    "<p>Tenho um bom conhecimento sobre infraestrutura em núvem.</p>" +
    "<p>Possuo uma certificação: Oracle Cloud Infrastructure Foundations 2021 Certified Associate.</p>" +
    "<img src='Pagina-Apresentacao-Pessoal/colecao-de-certificados/jpg/" + imagemCertificado + "' alt='Certificação OCI' style='width: 80%;'>";

    $('#slide').fadeIn(800);
}

function carregaCertificado(nomeCertificado, imagemCertificado){

    const slideInside = document.getElementById('slideInside');
    slideInside.innerHTML = "<h2>" + nomeCertificado + ":</h2>" +
    "<img src='Pagina-Apresentacao-Pessoal/colecao-de-certificados/jpg/" + imagemCertificado + "' alt='Certificação OCI' style='width: 80%;'>";

    $('#slide').fadeIn(800);
}