/*
Dicas:
1-Se o <title></title> (no index.html) estiver vazio vai ficar normal(link) o nome da guia.

2-Se tiver border: 1px(px = pixel, quanto maior mais grande será a linha) dashed grey;
(no style.css no canvas(tem que ter dashed se não as linhas separadas não aparecerão))
a tela terá uma borda de riscos separados e você pode colocar uma cor.

3-Se a tela não tiver nada, Só o README.md o que estiver dentro dele vai estar escrito na tela.
(não sei direito como funciona)


*/
var policyText, policyTitle;


function setup() {
    createCanvas(windowWidth, windowHeight);

    policyTitle = createElement("h1");
    policyTitle.position(25, 5)
    policyTitle.html("Política de Privacidade");

    policyText = createElement("h2");
    policyText.position(25, 55);
    policyText.html("Não coletamos nenhum de seus Dados Pessoais, nenhum Dado vinculado À sua Identidade, nenhum Dado.")
    policyText.style('color', 'white');
    policyText.style('background-color', 'black');
    policyText.style('contain', 'content');
    policyText.style('line-break', 'auto');
    policyText.style('margin-right', '25px');
    policyText.style('align-self', 'center');
    policyText.style('align-items', 'center');
    policyText.style('border-radius', '5px');
}

function draw() {
    background("orange");
}