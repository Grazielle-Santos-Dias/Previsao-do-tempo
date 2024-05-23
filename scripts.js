let chave = "cebcd482eda57fa9a6714c1c2ba91885";

async function colocarNaTela(dados) {
    console.log(dados);

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";

    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";

    document.querySelector(".umidade").innerHTML = "Umidade :" + dados.main.humidity + "%";
}

async function buscarCidade(cidade) {
    let resposta = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade +
    ",&appid=" + chave + "&units=metric");

    let dados = await resposta.json();
    console.log(dados);
    return dados;
}

async function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value;
    let dados = await buscarCidade(cidade);
    colocarNaTela(dados);
}








//AWAIT = ESPERE
//FETCH = FERRAMENTA DO JS PARA ACESSAR SERVIDORES
// THEN = ENTÃO
// JSON = JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JS ENTENDE)
// ASYNC FUNCTION = FUNÇÃO QUE ACESSA UM SERVIDOR
/*Clica no BOTÃO
-> CHAMA A FUNÇÃO cliqueiNoBotao()
->vai no INPUT e pega o que está lá dentro
->PASSAR a cidade para o servidor

MATCH.FLOOR-> ARREDONDAR VALORES
*/
