const inputTexto=document.querySelector(".inputTexto");
const mensaje=document.querySelector(".mensaje");
const imagen=document.querySelector(".lock");

/*

Encriptación y desencriptación del mensaje

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/


/*
Función de encriptación
*/
function btnEncriptar(){
    const textoEncriptado=encriptar(inputTexto.value)
    mensaje.value=textoEncriptado;
    inputTexto.value=""; /*Borrar texto en cuadro de escritura*/
    imagen.src="imagen/lock_close.png"; /*Cambio de imagen*/
}

function encriptar(stringEncriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase();

    for(let i=0;i< matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

/*
Función de desencriptación
*/

function btnDesencriptar(){
    const TextoDesencriptado=desencriptar(inputTexto.value)
    mensaje.value=TextoDesencriptado;
    inputTexto.value=""; /*Borrar texto en cuadro de escritura*/
    imagen.src="imagen/lock_open.png"; /*Cambio de imagen*/
}

function desencriptar(stringDesencriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase();

    for(let i=0;i< matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;

}
/*
Función de copiar
*/

 function btnCopiar(){
    copy=document.querySelector(".mensaje")
    navigator.clipboard.writeText(copy.value);
    copy.value="";/*Borrar texto en cuadro de salida de mensaje*/
    imagen.src="imagen/keys.png"; /*Cambio de imagen*/
 }
