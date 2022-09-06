/*
    SCRIPT DESENVOLVIDO PELO WESLEY SIEIRO TAKATSU DE ARAUJO
    ESTE SCRIPT DEPENDE DO ARQUIVO script-descricao.js PARA FUNCIONAR. AMBOS COMPARTILHAM COMANDOS E SÃO SEPARADOS PARA MINHA CONVENIÊNCIA APENAS.
    AO CHAMAR OS SCRIPTS, CHAME AO FINAL DA PÁGINA DEPOIS DO FOOTER:
        <script src="scripts/script.js"></script>
        <script src="scripts/script-descricao.js"></script>
*/
//  VARIÁVEL PARA MANIPULAÇÃO DA TELA
var telaPequena = false;

//  PEGA A DIV DO MENU DE NAVEGAÇÃO E SEU ESTADO
var navBar = document.getElementById("nav-bar");
var navBarDisplay = navBar.style.display;

//  PEGA AS DIVs QUE IREMOS TRABALHAR NA DESCRIÇÃO DE CONHECIMENTOS
var conhecimento = document.getElementById("conhecimento");
var parteConhecimentos = document.getElementById("parte-conhecimentos");

//  VERIFICAÇÃO DA LARGURA DA JANELA
var viewport_width = window.innerWidth;
console.log("Largura da janela: " + viewport_width);

//  DEFINE O TAMANHO TELA PEQUENA, MÉDIA E GRANDE
const resTelaPequena = 650;
const resTelaMedia = 950;

//navBar.style.visibility = 'hidden';

function configuraMenu(){
    if( viewport_width < resTelaPequena){
        telaPequena = true;
        console.log("Configurado para tela pequena.");
    }else if( viewport_width > resTelaMedia){
        //menuClick();
        telaPequena = false;
        console.log("Configurado para tela grande.");
    }else{
        telaPequena = false;
        console.log("Configurado para tela media.");
    }
    console.log("Visibilidade da nav-bar: " + navBar.style.visibility);    
}



function menuClick(x){
    x.classList.toggle("change");
    //  SE A BARRA ESTIVER VISÍVEL
    if(navBar.style.getPropertyValue("visibility") == "visible"){
        console.log("Menu desativado!");
        
        $('#nav-bar').fadeOut(500);
        navBar.style.visibility = 'hidden'; 
    }
    //  SE A BARRA ESTIVER ESCONDIDA
    else if(navBar.style.getPropertyValue("visibility") == "hidden"){
        console.log("Menu ativado!");
        navBar.style.visibility = 'visible'; 
        fetch('nav-bar.html')
        .then(response=> response.text())
        .then(text=> document.getElementById('nav-bar').innerHTML = text);
        $('#nav-bar').hide();

        $('#nav-bar').fadeIn(500);
    }


    //console.log(navBar.style.getPropertyValue("width"));
}

//loadMenu();


configuraMenu();

function gerenciaMenu(){
    if ( viewport_width <= resTelaMedia){
        navBar.style.visibility = 'hidden'; 
        console.log("Tela menor ou igual a 950.");
    }
    if ( viewport_width > resTelaMedia){
        navBar.style.visibility = 'visible';
        fetch('nav-bar.html')
        .then(response=> response.text())
        .then(text=> document.getElementById('nav-bar').innerHTML = text);
        console.log("Tela maior a 950.");
    }
}

window.onresize = () => {
    viewport_width = window.innerWidth;
    console.log("Janela redimensionada - Largura: " + viewport_width);
    configuraMenu();
    gerenciaMenu();
};

window.onload = () => {
    gerenciaMenu();
    console.log("Onload carregado.");
}

$(document).ready(function(){
    $('#slide').hide();
    $('#div-logo').hide();

    $('#div-logo').fadeIn(5000);

    $('#commonFooter').load("footer.html");

});