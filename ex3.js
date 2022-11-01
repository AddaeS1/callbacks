let jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"] ;
let segTotais = 10000 ;
let divisor = jogadores.length ;
let intervalo = segTotais/divisor ;

function delay(n){
  return new Promise(function(resolve){
      setTimeout(resolve,n*1000);
  });
}

async function msgTErmino () {
  console.log("Rodada terminou !");
}

async function showName() {         
  
  
  jogadores.forEach(
  (el, i) => {
     showN = setTimeout(() => console.log(el), intervalo * i);
    
    
  });
}
  
async function showNameMsg () {
 
  await delay (2);
  showName();

  await delay (11);
  msgTErmino()
}
  


showNameMsg();







