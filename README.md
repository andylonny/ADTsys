O projeto foi feito com  [Create React App](https://github.com/facebook/create-react-app).

# Objetivo
Teste realizado para a vaga de desenvolvedor júnior na empresa ADTSys.

<b>Desafio:</b> Pesquisar uma cidade consumindo uma API de clima e também outra API de Pokémons. Exibir os resultados de acordo com os critérios estabelecidos.

<u>Os critérios são:</u>

Lugares onde a temperatura for menor que 5ºC, deve-se retornar um pokémon de gelo.
Lugares onde a temperatura estiver entre 5ºC e 10ºC, deve-se retornar um pokémon do tipo água.
Lugares onde a temperatura estiver entre 12ºC e 15ºC, deve-se retornar um pokémon do tipo grama.
Lugares onde a temperatura estiver entre 15ºC e 21ºC, deve-se retornar um pokémon do tipo terra.
Lugares onde a temperatura estiver entre 23ºC e 27ºC, deve-se retornar um pokémon do tipo inseto.
Lugares onde a temperatura estiver entre 27ºC e 33ºC inclusive, deve-se retornar um pokémon do tipo pedra.
Lugares onde a temperatura for maior que 33ºC, deve-se retornar um pokémon do tipo fogo.
Para qualquer outra temperatura, deve-se retornar um pokémon do tipo normal.
E, no caso em que esteja chovendo na região um pokémon elétrico deve ser retornado, independente da temperatura.
Após a consulta deve-se exibir na tela:
Temperatural atual da cidade em graus Celsius;
Se está chovendo ou não;
Nome do Pokémon seguindo as regras acima.

<b>OBS:</b> Implementei uma condição para que somente Pokémons com imagem sejam exibidos na pesquisa.


# Procedimentos

Acessar a aplicação através deste link:

https://adtsys-pokemon.herokuapp.com/

Ou para executar a aplicação é necessário ter o node instalado na máquina, no terminal ir até a pasta do projeto e digitar o seguinte comando:

### `npm start`

Executa o aplicativo no modo de desenvolvimento. <br>
Digite http://localhost:3000 para visualizá-lo no navegador.

# Tecnologias Utilizadas

## Back-end: `ReactJS`
## Front-end: `React Bootstrap`
## Http Request: `Axios`