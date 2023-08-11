/* Solicitar ao usuário que digite um número inteiro, o programa irá verificar se o nnúmero atende aos critérios abaixo, sem exceção:
Ser um número par;
Ser um número positivo (maior que zero);
Ser um número menor que 100.
O programa irá imprimir a mensagem: "O número atende aos critérios", se atender a todos os critérios citados, caso contrário, deverá imprimir a mensagem: "O número não atende aos critérios".
 */

var numero = parseInt(prompt('Digite um número inteiro:'));


if (numero % 2 === 0 && numero > 0 && numero < 100){
   
    alert("O número atende aos critérios.");


} else {
    alert("O número não atende aos critérios.");
}
