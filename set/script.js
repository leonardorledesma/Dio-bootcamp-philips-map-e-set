/* são estruturas que armazenam valore unicos, não pode ter valores repetidos;
em vez da propriedade length,consulta-se os registros pela propriedade "size";
não possui os metodos map, filter e reduce;

    ###Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.###
    */

    const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];
    function valoresUnicos(arr){
    const mySet = new Set(arr);

    return[...mySet]; /*utilizamos os "3 pontos (...)" para fazer o spread,  cria se um array vazio
                        e cada elemento so set é colocado dentro deste array, se não colocar os 3 pontos cria-se
                        apenas um set dentro do array.*/
    }
    console.log(valoresUnicos(meuArray));