console.log("Timer iniciado, disparando alarme em 10 segundos!");
setTimeout(() => {alarm1()},  10 * 1000)

function alarm1 () {
    let msgAlarm = 'Beep beep!';
    let numero = 0;
    
            let alarm1 = () =>{
                console.log(msgAlarm);
                numero++;
                           
            if(numero  === 5){
                clearInterval(id); 
            }
            
        }   
        let id = setInterval(alarm1, 1000); 
        
};
