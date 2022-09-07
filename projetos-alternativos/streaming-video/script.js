const sinopse = document.getElementById("sinopse");
const capa = document.getElementById("capa");
const tituloFilme = document.getElementById("tituloFilme");
const filme = document.getElementById("trailer");

/*
    videoEmbed - link embed do youtube
    nomePasta - pasta com as mídias do filme
    nomeFilme - Nome do filme por escrito
    pastaFilme - pasta onde fica o arquivo do filme
    arquivoFilme - nome do arquivo do filme
*/
function carregaFilme(videoEmbed, nomePasta, nomeFilme, pastaFilme, arquivoFilme){
    
    filme.innerHTML = "<h3>Trailer:</h3><iframe width='400' height='240' src='" + videoEmbed + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

    document.body.style.backgroundImage = "url('./capas/" + nomePasta + "/background.jpg')";

    capa.innerHTML = "<img id='imagemCapa' src='./capas/" +nomePasta+"/folder.jpg' alt='capa do filme' /><br>" +
        "<a href='#trailer' onclick=assistirFilme('" +pastaFilme + "','" + arquivoFilme +"')>Rodar o filme completo</a>";

    tituloFilme.innerHTML = "<b>" +nomeFilme+ "</b>";

    carregaSinopse(nomePasta);
}

function assistirFilme(pastaFilme, arquivoFilme){
    console.log(pastaFilme);
    console.log(arquivoFilme);
    filme.innerHTML = "<video width='400' height='240' controls>" +
        "<source src='./filmes/"+ pastaFilme +"/"+ arquivoFilme +".mkv' type='video/x-matroska'>" +
        "<source src='./filmes/"+ pastaFilme +"/"+ arquivoFilme +".mp4' type='video/mp4'>" +
        "</video>";
        
}

/*
const load = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.text();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};
load("./capas/citizenfour/sinopse.txt");
*/

const carregaSinopse = async (nomePasta) => {
    try {
        const response = await fetch("./capas/" +nomePasta+ "/sinopse.txt");
        const data = await response.text();
        console.log(data);
        sinopse.innerHTML = "<p><b>Sinopse: </b>" +data+ "</p>";
    } catch (err) {
        console.error(err);
    }
}

//carregaSinopse("citizenfour");