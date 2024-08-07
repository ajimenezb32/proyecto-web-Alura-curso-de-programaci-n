const letras = ["a","e","i","o","u"];
const marcareemplazos = ["§", "¤", "†", "‰", "¶"];
const reemplazos = ["ai","enter","imes","ober", "ufat"];

function codificar(texto) {
    let ret = texto;
    
    for (let i = 0; i < letras.length; i++) {
        let regex = new RegExp(letras[i], "g");
        ret = ret.replace(regex, marcareemplazos[i]);
        console.log("ret: " + ret);
    }
    
    for (let i = 0; i < reemplazos.length; i++) {
        let regex = new RegExp(marcareemplazos[i], "g");
        ret = ret.replace(regex, reemplazos[i]);
        console.log("ret codificado: " + ret);
    }
    
    return ret;
}

function decodificar(texto) {
    let ret = texto;
    
    for (let i = 0; i < reemplazos.length; i++) {
        let regex = new RegExp(reemplazos[i], "g");
        ret = ret.replace(regex, marcareemplazos[i]);
        console.log("ret decodificado: " + ret);
    }
    
    for (let i = 0; i < letras.length; i++) {
        let regex = new RegExp(marcareemplazos[i], "g");
        ret = ret.replace(regex, letras[i]);
        console.log("ret decodificado 2: " + ret);
    }
    
    return ret;
}

function codificarstart() {
    let input = document.getElementById("textInput");
    let textResultHeader = document.getElementById("textResultHeader");
    let textResultContent = document.getElementById("textResultContent");
    let muecoIcon = document.getElementById("muecoIcon");

    if (textResultHeader && textResultContent) {
        let texto = input.value;
        let codificado = codificar(texto);

        input.value = codificado;
        textResultHeader.textContent = "Mensaje encriptado:";
        textResultContent.textContent = codificado;

        if (muecoIcon) {
            muecoIcon.style.display = 'none'; // Hide the icon
        }
    } else {
        console.error("Elementos de resultado no encontrados.");
    }
}

function decodificarstart() {
    let input = document.getElementById("textInput");
    let textResultHeader = document.getElementById("textResultHeader");
    let textResultContent = document.getElementById("textResultContent");
    let muecoIcon = document.getElementById("muecoIcon");

    if (textResultHeader && textResultContent) {
        let texto = input.value;
        let decodificado = decodificar(texto);

        input.value = decodificado;
        textResultHeader.textContent = "Mensaje desencriptado:";
        textResultContent.textContent = decodificado;

        if (muecoIcon) {
            muecoIcon.style.display = 'none'; // Hide the icon
        }
    } else {
        console.error("Elementos de resultado no encontrados.");
    }
}


