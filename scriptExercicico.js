//Crie um array com os anos que o Brasil ganhou a copa
var copasDoBrasil = [1959, 1962, 1970, 1994, 2002];

//Interaja com o array utilizando um loop para mostrar
//no console a seguinte mensagem: 'o Brasil ganhou a copa em ${ano}
for (let i = 0; i < copasDoBrasil.length; i++) {
    console.log(`O Brasil ganhou a copa em ${copasDoBrasil[i]}`); 
    
}

//Interaja com o loop nas frutas abaixo e  pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];
//solução
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if (frutas[i] === 'Pera') {
        break;
    }
    
}

//Coloque a ultima fruta do array em uma variavel
//sem remover a mesma do array
var novaFruta = frutas[frutas.length - 1];
console.log(novaFruta);


//SOME O VALOR 500 AO VALOR DE SCROLL ABAIXO,
//ATRIBUINDO O NOVO VALOR DE SCROOL
var scrool = 1000;

//RESOLUÇÃO
scrool += 500;
console.log(scrool);

//ATRIBUA TRUE PARA A VARIAVEL DARCREDITO
//CASO O CLIENTE POSSUA CARRO E CASA
//E FALSE CASO O CONTRARIO
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);


//POR QUAL MOTIVO O CODIGO ABAIXO RETORNA COM ERROS?
// {
//  var cor = 'preto';
//  const marca = 'Fiat';
//  let portas = 4;
// }
// console.log(cor,marca,porta);

//RESOLUÇAO
/*NAO FUNCIONA PORQUE A CONST E O LET FICAM DENTRO DO ESCOPO
APENAS O VAR SAI PRA FORA, SENDO ASSIM SÓ ELE RETORNA NO CONSOLE*/



//COMO CORRIGIR O ERRO ABAIXO

 //RESOLUÇAO
 const dois = 2;
 //
function somarDois(x){
    //const dois = 2; retira daqui e poe fora
    return x + dois;
}
function DividirDois(x){ 
    return x / dois;
}
console.log(somarDois(4));
console.log(DividirDois(6));

//O QUE FAZER PARA TOTAL RETORNAR 500?
//RESOLUÇAO
const numero = 50;

for(let numero; numero < 10; numero++){
    console.log(numero);
}

const total = 10 * numero;
console.log(total);

