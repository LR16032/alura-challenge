
    lista =['i','imes','a','ai','o','ober','u','ufat','e','enter'];
    texto_encryptado = '';
    let texto = '';
    let textoCopiado ='';
    let contador = 'j';

      function encryptar(){
        // console.log(texto);
        texto_encryptado = '';
        texto = document.querySelector("#texto-encriptar").value;
        for(let i = 0; i<texto.length ;i++){
            console.log(texto[i]);
                if (lista.includes(texto[i])){
                    
            let valor =   lista.indexOf(texto[i])+1;
            //   console.log(valor);
            texto_encryptado += lista[valor];
            console.log(texto_encryptado);
            
               
                }else{
                    texto_encryptado += texto[i];
                }

        }

        styleDisplay(texto_encryptado);
        cleanInput();
    }

    function cleanInput(){
        document.querySelector('#texto-encriptar').value='';
    }

    // copiarTexto function
    function copiarTexto(){
        
        textoCopiado =   document.getElementById("textoStyle").value; 
        console.log('entro aqui a copiar el texto');
        
          
    }

    function pegarTexto(){
    
            document.getElementById("texto-encriptar").value = textoCopiado;
            textoCopiado = '';
        
    }

    function discryptar(){
        texto_encryptado = '';
        texto = document.querySelector("#texto-encriptar").value;
        console.error(texto);
      for(let i = 0; i<texto.length;i++){
        // console.log(texto[i]);
        if((texto[i]=='i')       && 
            (texto[i+1]=='m')    && 
            (texto[i+2]='e')     &&
            (texto[i+3]='s')){
                i=i+3;
                texto_encryptado +='i';
                console.log('entro aqui');
        } else if(    texto[i]=='a' &&
                          texto[i+1]=='i'){
                                texto_encryptado +='a';
                                    //  console.log(texto_encryptado);
                                     i=i+1;
                                     console.log(texto[i]);
                                        
                 }  
                 
                 else if(    texto[i]=='u' &&
                             texto[i+1]=='f' &&
                             texto[i+2]=='a' &&
                             texto[i+3]=='t'
                        ){
                                texto_encryptado +='u';
                                    //  console.log(texto_encryptado);
                                         i=i+3;
                                         
                 }else if(texto[i]=='o' &&
                 texto[i+1]=='b' &&
                 texto[i+2]=='e' &&
                 texto[i+3]=='r'){
                    texto_encryptado +='o';
                    i=i+3;
                    
                 }else if(texto[i]=='e' &&
                 texto[i+1]=='n' &&
                 texto[i+2]=='t' &&
                 texto[i+3]=='e' &&
                 texto[i+4]=='r'){
                        texto_encryptado += 'e';
                        i=i+4;
                 }
                 
                 
                 else{
                    texto_encryptado +=texto[i];
                    console.log(texto_encryptado);
                    cleanInput();
                 }  
                
                 
      }
      console.log(texto_encryptado);
      styleDisplay(texto_encryptado);
}

function styleDisplay(texto_encryptado){
    document.getElementById("mostrarCifrado").style.display = "none";
    document.getElementById("textoStyle").style.display = "inline";
    document.getElementById("copyText").style.display = "inline";
    document.getElementById("textoStyle").value=texto_encryptado;

}



//         La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra 
//encriptada para su versión original.
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"