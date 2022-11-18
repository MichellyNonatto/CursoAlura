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

const idadeComprador = 5;
estaAcompanhada = false;
const passagemComprada = true;

console.log("\n\n");
if(idadeComprador < 0){
    console.log("Não existem pessoas com idade negativa");
}else if (idadeComprador > 18 || +estaAcompanhada) {

    listaDeCidades.splice(1, 1);
    console.log("A compra foi efetuada com sucesso.");
    console.log("\n\n");
    console.log(listaDeCidades);
} else{
    console.log("Não pode ser efetuado a compra.");
    console.log("\n\n");
    console.log(listaDeCidades);
} 

console.log("\nEmbarque: \n");
if(+passagemComprada && (idadeComprador < 18 || +estaAcompanhada)){
    console.log("Passageiro poderá embarcar. Tenhe uma boa viajem");
}else console.log("Passageiro não poderá embarcar no voo");



//condicionais
console.log(idadeComprador < 18);
console.log(idadeComprador > 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);





