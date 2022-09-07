/*
    ESSE SCRIPT É PARTE DO SCRIPT PRINCIPAL DA PÁGINA E NÃO FUNCIONA INDEPENDENTE
*/
var conhecimento = document.getElementById("conhecimento");

var tamConteudoManual;

function homestart(){
    console.log('homestart executado!');
    geraiss();
}



function htmlecss(){
    conhecimento.innerHTML =`<h2>HTML:</h2>
    <p>Meus conhecimentos envolvem as principais tags de HTML 5, estruturas básicas, formulários, inclusão de estilo e scripts.</p>
    <p>O meu conhecimento de HTML 5 é o suficiente para dizer que conheço bem a linguagem e que consigo exercer os serviço com eficiência.</p>
    <p>Atualmente leciono sobre HTML e CSS no curso Microcamp que é aonde eu trabalho atualmente.</p>
    <h2>CSS:</h2>
    <p>Crio páginas com Flexbox, animações simples, aplico efeitos e manipulo junto com JavaScript quando necessário.</p>
    <p>Não tenho limitações quanto ao entendimento e conhecimento de CSS.</p>
    <p>Minha limitação no CSS é a parte artística que não sou tão refinado, mas consigo personalizar bem a página a nível profissional.</p>
    `;
    tamConteudoManual = "1000px";
    regulaConteudo(tamConteudoManual);
}

function javascriptt(){
    conhecimento.innerHTML =`<p>JavaScript:</p>
    <p>Estudo JavaScript com a intenção de me especializar.</p>
    <p>Aprendi a manipular elementos do HTML e CSS com o JavaScript, com funções listener de eventos, validação de formulários, entre outros.<br>
    <p>Estudo NodeJS com React, Webpack, NPM, JSon, JQuery, Babel, EsLint e outros. Ainda estou estudando firme e me desenvolvendo.</p>
    <p>Em breve criarei uma página aqui no meu portifólio para apresentar minhas habilidades com React.</p>
    <p>Meu repositório no GitHub onde treino o JS pode ser acessado por <a href="https://github.com/wesleytakatsu/Meus-treinos-JavaScript" target="_blank">esse link</a>.</p>
    <p>Ainda não tenho repositório ReactJS</p>`;
    tamConteudoManual = "750px";
    regulaConteudo(tamConteudoManual);
}
function ccplusplus(){
    conhecimento.innerHTML =`<h2>C e C++</h2>
    <p>Atualmente uso C e C++ nas minhas aulas que leciono usando programação para Arduino.</p>
    <p>Meu conhecimento vem da faculdade. Já fiz algumas coisas como adicionar a biblioteca wget para baixar páginas da Web e buscar por algum termo no arquivo, e caso encontrasse, adicionava no banco de dados MySQL ao qual eu podia acessar por uma interface que fiz em Java e em outra que fiz em PHP.</p>
    <p>Em geral, meu conhecimento vai até os requisitos para cumprir funções semelhantes.</p>
    <p>Minha experiência com C++ foi na faculdade, quando tive meu primeiro contato com Orientação a Objetos. É uma linguagem que estudei apenas por um período na faculdade e que fiz pequenos projetinhos de terminal.</p>
    <p>Esse meu conhecimento envolve os conhecimentos essenciais de Orientação a Objetos como construtores, encapsulamento, polimorfismo, sobrecarga de métodos, herança, abstração, inferfaces, métodos get e set e eventos. Aprendi a manipulação com arquivos de texto e binário, com leituras usando stream. Também estudei conexão com banco de dados MySQL, pegar informações, executar queryes e manipular o que for necessário no BD usando o C++.</p>
    `;
    tamConteudoManual = "1150px";
    regulaConteudo(tamConteudoManual);
}

function javaa(){
    conhecimento.innerHTML =`<p>Java</p>
    <p>Possuo um pouco de prática em criação de páginas Web com Glassfish.</p>
    <p>Crio conexões via socket com outros dispositivos.</p>
    <p>Crio interfaces gráficas simples, com consulta a banco de dados e alguns recursos.</p>
    <br><br>`;
    tamConteudoManual = "550px";
    regulaConteudo(tamConteudoManual);
}
function pythonn(){
    conhecimento.innerHTML =`<p>Python</p>
    <p>Tenho conhecimento superficial.</p>
    <p>Meus conhecimentos em Python só serão úteis no mercado de trabalho caso eu seja avisado com atecedência para eu me preparar.</p>
    <p>Consigo desenvolver bem a nível estagiário.</p>
    <br><br>`;
    tamConteudoManual = "550px";
    regulaConteudo(tamConteudoManual);
}

function dotnet(){
    conhecimento.innerHTML =`<p>.NET</p>
    <p>Consigo desenvolver algumas interfaces, manipular arquivos, conexão com banco de dados e etc.</p>
    <p>Está na minha agenda criar um portifólio para apresentar minhas habilidades em .NET (VB e C#) para apresentação pessoal.</p>
    <br><br>`;
    tamConteudoManual = "550px";
    regulaConteudo(tamConteudoManual);
}

function sqll(){
    conhecimento.innerHTML =`<p>SQL</p>
    <p>Possuo um bom conhecimento em banco de dados relacional.</p>
    <p>Criação de tabelas com chaves primárias, chaves estrangeiras, store procedures, triggers e diversos recursos extras.</p>
    <p>Configuração permissões, portas e etc.</p>
    <br><br>`;
    tamConteudoManual = "550px";
    regulaConteudo(tamConteudoManual);
}

function geraiss(){
    conhecimento.innerHTML =`<p>Meus principais conhecimentos em programação são em PHP e JavaScript<br>Clique em algum tópico para saber mais!</p>
    <p>Esta página foi toda desenvolvida a mão, linha por linha, sem "copia e cola", usando meu material próprio, consultando meus próprios códigos e estudando por conta própria.</p>
    <br><br><br><br><br>`;
    tamConteudoManual = "500px";
    regulaConteudo(tamConteudoManual);
}

homestart();