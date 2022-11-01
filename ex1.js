let multiplicar = (numero, callback) => {
     
let multiplicador = 0;
let resultado = '';

for(i = 0; i <= 10; i++){
    resultado += `${numero} x ${i} = ${numero * i} \n`;
    multiplicador++;        
    
};
    callback(resultado);
    
};

let showResultado = (resultado) => {
    console.log(resultado);
}

multiplicar(4,(resultado => {
    console.log(resultado);
}));