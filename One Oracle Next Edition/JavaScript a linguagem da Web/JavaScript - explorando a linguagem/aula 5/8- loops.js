console.log(`Trabalhando com listas`);

const cidades = [`Salvador`, `São Paulo`, `Rio de Janeiro`, `Belo Horizonte`, `Balneário Camburiu`];

const listaDeCidades = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
    `Balneário Camburiu`,
    `Curitiba`
);
listaDeCidades.push(`Paraná`);

//Trabalhando com condicionais a partir ad lista

const idadeComprador = 19;
const passagemComprada = true;
const destino = "Balneário Camburiu";
const estaAcompanhada = false;
const podeComprar = idadeComprador > 18 || estaAcompanhada == true;

let contador = 0;
let destinoExite = false;

for (contador = 0; contador < 6; contador++); {
    if (listaDeCidades[contador] == destino) {
        destinoExite = true;
        contador = 6;
    }

}

if (podeComprar && destinoExite) console.log("Boa Viagem");
else console.log("Desculpe, obtivemos um erro");

console.log("Destino existe: ", destinoExite);






