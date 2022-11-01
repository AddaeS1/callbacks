let tempoIni10 = 10 ;
let alarmIni = 5;
let tempoSoneca = 5 ;
let numSonecas = 4 ;  

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

function alarm1 () {
    let msgAlarm = 'Beep beep!';
    let numero = 0;
    
            let alarm1 = () =>{
                console.log(msgAlarm);
                numero++;
                           
            if(numero  === alarmIni){
                clearInterval(id);
                console.log('Soneca ativada, próximo alarme em 10 segundos!');
            }
            
        }   
        let id = setInterval(alarm1, 1000); 
        
};

function alarmSoneca () {
    let msgAlarmSoneca = 'Beep beep!';
    let numero2 = 0;
    
            let alarmSoneca = () =>{
                console.log(msgAlarmSoneca);
                numero2++;
                           
            if(numero2 === numSonecas){
                clearInterval(id2);
            }
            
        }    
        let id2 = setInterval(alarmSoneca, 1000);

}

async function alarmEsoneca() {
    console.log("Timer iniciado, disparando alarme em 10 segundos!");
    
    await delay(tempoIni10);
        alarm1();
        
    await delay(tempoIni10);
        alarmSoneca();
       
};

alarmEsoneca();