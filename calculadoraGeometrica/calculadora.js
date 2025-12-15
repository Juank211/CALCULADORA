function calcularCuadrado() {
    const lado = parseFloat(document.getElementById('ladoCuadrado').value);
    if (lado > 0) {
        document.getElementById('areaCuadrado').textContent = lado * lado;
        document.getElementById('perimetroCuadrado').textContent = 4 * lado;
    } else {
        alert('Ingresa un valor positivo.');
    }
}
        
function calcularRectangulo() {
    const largo = parseFloat(document.getElementById('largoRectangulo').value);
    const ancho = parseFloat(document.getElementById('anchoRectangulo').value);
    if (largo > 0 && ancho > 0) {
        document.getElementById('areaRectangulo').textContent = largo * ancho;
        document.getElementById('perimetroRectangulo').textContent = 2 * (largo + ancho);
    } else {
        alert('Ingresa valores positivos.');
    }
}
        
function calcularCirculo() {
    const radio = parseFloat(document.getElementById('radioCirculo').value);
    if (radio > 0) {
        document.getElementById('areaCirculo').textContent = (Math.PI * radio * radio).toFixed(2);
        document.getElementById('perimetroCirculo').textContent = (2 * Math.PI * radio).toFixed(2);
    } else {
        alert('Ingresa un valor positivo.');
    }
}
        
function calcularTriangulo() {
    const base = parseFloat(document.getElementById('baseTriangulo').value);
    const altura= parseFloat(document.getElementById('alturaTriangulo').value);
    const lado1 = parseFloat(document.getElementById('lado1Triangulo').value);
    const lado2 = parseFloat(document.getElementById('lado2Triangulo').value);
    const lado3 = parseFloat(document.getElementById('lado3Triangulo').value);    
    if (base > 0 && altura > 0 && lado1 > 0 && lado2 > 0 && lado3 > 0) {
        document.getElementById('areaTriangulo').textContent = ((base * altura) / 2).toFixed(2);
        document.getElementById('perimetroTriangulo').textContent = lado1 + lado2 + lado3;
    } else {
        alert('Todos los valores debe ser positivos.');
    }
}

function calcularRombo() {
    const ladoRombo = parseFloat(document.getElementById('ladoRombo').value);
    const diagonalmRombo = parseFloat(document.getElementById('diagonalmRombo').value);
    const diagonalnRombo = parseFloat(document.getElementById('diagonalnRombo').value);
    if (ladoRombo > 0 && diagonalmRombo > 0 && diagonalnRombo > 0){
        document.getElementById('perimetroRombo').textContent = 4 * ladoRombo;
        document.getElementById('areaRombo').textContent = (diagonalmRombo * diagonalnRombo) / 2;
    } else {
        alert('Todos los valores debe ser positivos.');
    }
}

function calcularPentagono() {
    const ladoPentagono = parseFloat(document.getElementById('ladoPentagono').value);
    const apotemaPentagono = parseFloat(document.getElementById('apotemaPentagono').value);
    if (ladoPentagono > 0 && apotemaPentagono > 0){
        const perimetroPentagono = ladoPentagono * 5 ;
        const areaPentagono = (perimetroPentagono * apotemaPentagono) / 2;
        document.getElementById('perimetroPentagono').textContent = perimetroPentagono;
        document.getElementById('areaPentagono').textContent = areaPentagono;
    } else {
        alert('Todos los valores debe ser positivos.');
    }
}

function calcularHexagono() {
    const ladoHexagono = parseFloat(document.getElementById('ladoHexagono').value);
    const apotemaHexagono = parseFloat(document.getElementById('apotemaHexagono').value);
    if (ladoHexagono > 0 && apotemaHexagono > 0){
        const perimetroHexagono = ladoHexagono * 6 ;
        const areaHexagono = (perimetroHexagono * apotemaHexagono) / 2;
        document.getElementById('perimetroHexagono').textContent = perimetroHexagono;
        document.getElementById('areaHexagono').textContent = areaHexagono;
    } else {
        alert('Todos los valores debe ser positivos.');
    }
}

function calcularTrapecio() {
    const basemTrapecio = parseFloat(document.getElementById('basemTrapecio').value);
    const basenTrapecio = parseFloat(document.getElementById('basenTrapecio').value);
    const altura= parseFloat(document.getElementById('alturaTrapecio').value);
    const ladoI = parseFloat(document.getElementById('ladoiTrapecio').value);
    if (basemTrapecio > 0 && basenTrapecio > 0 && altura > 0 && ladoI > 0 ){
        document.getElementById('perimetroTrapecio').textContent = ladoI + ladoI + basemTrapecio + basenTrapecio;
        document.getElementById('areaTrapecio').textContent = (((basemTrapecio + basenTrapecio) * altura) / 2).toFixed(2);
    } else {
        alert('Todos los valores debe ser positivos.');
    }
}


function calcularParalelogramo() {
    const baseParalelogramo = parseFloat(document.getElementById('baseParalelogramo').value);
    const alturaParalelogramo = parseFloat(document.getElementById('alturaParalelogramo').value);
    const ladoiParalelogramo = parseFloat(document.getElementById('ladoiParalelogramo').value);
    if (baseParalelogramo > 0 && alturaParalelogramo > 0 && ladoiParalelogramo > 0) {
        document.getElementById('areaParalelogramo').textContent = baseParalelogramo * alturaParalelogramo;
        document.getElementById('perimetroParalelogramo').textContent = 2 * (baseParalelogramo + ladoiParalelogramo);
    } else {
        alert('Ingresa valores positivos.');
    }
}

function calcularCubo() {
    const ladoCubo = parseFloat(document.getElementById('ladoCubo').value);
    if (ladoCubo > 0) {
        document.getElementById('areaCubo').textContent = 6 * (ladoCubo * ladoCubo);
        document.getElementById('volumenCubo').textContent = ladoCubo * ladoCubo * ladoCubo;
    } else {
        alert('Ingresa un valor positivo.');
    }
}

function calcularPrisma() {
    const largoPrisma = parseFloat(document.getElementById('largoPrisma').value);
    const anchoPrisma = parseFloat(document.getElementById('anchoPrisma').value);
    const alturaPrisma = parseFloat(document.getElementById('alturaPrisma').value);
    if (largoPrisma > 0 && anchoPrisma > 0 && alturaPrisma > 0) {
        document.getElementById('areaPrisma').textContent = (2 * (largoPrisma * anchoPrisma + largoPrisma * alturaPrisma + anchoPrisma * alturaPrisma));
        document.getElementById('volumenPrisma').textContent = (largoPrisma * anchoPrisma) * alturaPrisma;
    } else {
        alert('Ingrese un valor positivo.');
    }
}

function calcularPiramide() {
    const basePiramide = parseFloat(document.getElementById('basePiramide').value);
    const alturaPiramide = parseFloat(document.getElementById('alturaPiramide').value);
    if (basePiramide > 0 && alturaPiramide > 0) {
        const areabPiramide = basePiramide ** 2;
        const catetoPiramide = basePiramide / 2;
        const apotemaPiramide = (Math.sqrt(alturaPiramide ** 2 + catetoPiramide ** 2));
        const caraPiramide = ((basePiramide * apotemaPiramide) / 2);
        const arealPiramide = 4 * caraPiramide;
        const totalcPiramide = areabPiramide + arealPiramide;
        const volumenPiramide = (1/3) * areabPiramide * alturaPiramide;
        document.getElementById('areaPiramide').textContent = totalcPiramide.toFixed(2) ;
        document.getElementById('volumenPiramide').textContent = volumenPiramide.toFixed(2);
    } else {
        alert('Ingrese un valor positivo.');
    }
}

function calcularCilindro() {
    const radioCilindro = parseFloat(document.getElementById('radioCilindro').value);
    const alturaCilindro = parseFloat(document.getElementById('alturaCilindro').value);
    if (radioCilindro > 0  && alturaCilindro > 0) {
        document.getElementById('areaCilindro').textContent = (2 * Math.PI * radioCilindro * (alturaCilindro + radioCilindro)).toFixed(2);
        document.getElementById('volumenCilindro').textContent = (Math.PI * radioCilindro ** 2 * alturaCilindro).toFixed(2);
    } else {
        alert('Ingresa un valor positivo.');
    }
}

function calcularCono() {
    const radioCono = parseFloat(document.getElementById('radioCono').value);
    const alturaCono = parseFloat(document.getElementById('alturaCono').value);
    if (radioCono > 0  && alturaCono > 0) {
        const generatrizCono = Math.sqrt(radioCono ** 2 + alturaCono ** 2);
        document.getElementById('areaCono').textContent = (Math.PI * radioCono * (radioCono + generatrizCono)).toFixed(2);
        document.getElementById('volumenCono').textContent = (1/3 * Math.PI * radioCono ** 2 * alturaCono).toFixed(2);
    } else {
        alert('Ingresa un valor positivo.');
    }
}

function calcularEsfera() {
    const radioEsfera = parseFloat(document.getElementById('radioEsfera').value);
    if (radioEsfera > 0) {
        document.getElementById('areaEsfera').textContent = (4 * Math.PI * radioEsfera ** 2).toFixed(2);
        document.getElementById('volumenEsfera').textContent = (4/3 * Math.PI * radioEsfera ** 3).toFixed(2);
    } else {
        alert('Ingresa un valor positivo.');
    }
}
