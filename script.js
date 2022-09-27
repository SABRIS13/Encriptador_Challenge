const inputTexto=document.querySelector(".inputTexto");
const mensaje=document.querySelector(".mensaje");
const imagen=document.querySelector(".lock");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/

function btnEncriptar(){
    const textoEncriptado=encriptar(inputTexto.value)
    mensaje.value=textoEncriptado;
    mensaje.style.backgroundImage="none";
    inputTexto.value="";
    imagen.src="/imagen/lock_close.png";
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

function btnDesencriptar(){
    const TextoDesencriptado=desencriptar(inputTexto.value)
    mensaje.value=TextoDesencriptado;
    mensaje.style.backgroundImage="none";
    inputTexto.value="";
    imagen.src="/imagen/lock_open.png";
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


 function btnCopiar(){
    copy=document.querySelector(".mensaje")
    navigator.clipboard.writeText(copy.value);
    copy.value="";
    imagen.src="/imagen/keys.png";
 }
