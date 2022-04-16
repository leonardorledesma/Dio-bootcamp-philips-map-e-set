/* Map é uma coleção de arrays no formato [chave, valor]
pode ser iterado por um loop for of utilizando as palavras "new Map".

Diferença entre Map e Objeto:
    Map pode ter chave de qualquer tipo, ja o objeto só aceita chaves do tipo string;
    Map possuem a propriedade length;
    São mais faceis de iterar;
    Utilizado quando queremos iterar e não conhecemos o valor da chaves;
    Map tem valores do mesmo tipo;

    ### atividade###
    Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

    1. Crie uma função `getAdmins` que recebe um `Map`;
    2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
    3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usuarios
     que são administradores.
     */

function getAdmins(map){
    let admins = [];
    for([key, value] of map){
    if(value ==='Admin'){
    admins.push(key);
    }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));
