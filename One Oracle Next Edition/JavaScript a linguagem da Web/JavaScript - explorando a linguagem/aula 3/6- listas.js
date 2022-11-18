console.log(`Trabalhando com listas`);

const cidades = [`Salvador`, `São Paulo`, `Rio de Janeiro`, `Belo Horizonte`, `Balneário Camburiu`];

console.log(`Destinos possíveis ${cidades}`);

const listaDeCidades = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
    `Balneário Camburiu`,
    `Curitiba`
);

console.log(listaDeCidades);

listaDeCidades.push(`Paraná`);//Adicionando um intem na lista
listaDeCidades.splice(1, 1);//Apaga um elemento do Array

console.log(listaDeCidades);
console.log("Dsetino de escolha", listaDeCidades[1]);
