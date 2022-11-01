let tabuada = (array, callback) => {
    let resultado;

    array.forEach(indice => {
        let multiplicador = 0;
        for(i = 0; i <= 10; i++){
            let resultado = console.log(indice +' x '+ multiplicador +' = '+ indice*multiplicador );
            multiplicador++;        
        };
            console.log('\n _______________');
    })
            callback(resultado);
};    
        

tabuada([1, 5, 2], (resultado) => {
    
        })
