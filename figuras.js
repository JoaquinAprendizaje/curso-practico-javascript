//Código del cuadrado
console.group("Cuadrado")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "unidades");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "unidades");

function areaCuadrado(lado) {
    return lado*lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "unidades^2");
console.groupEnd();
//End of código del cuadrado

//Codigo del triangulo
// console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "unidades, " + ladoTriangulo2 + "unidades, " + baseTriangulo + "unidades");
// console.log("La altura del triangulo es de " + alturaTriangulo);
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "unidades");
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "unidades^2");
// console.groupEnd();

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return base * altura / 2;
}

// End of codigo del triangulo

// Codigo del circulo
// console.group("Circulos");
// const radioCirculo = 4;
// console.log("El radio del circulo mide: " + radioCirculo + "unidades");
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo mide " + diametroCirculo + "unidades")
// const PI = Math.PI;
// console.log("Pi mide " + PI)
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo mide " + perimetroCirculo + "unidades")
// const areaCirculo = PI * radioCirculo * radioCirculo;
// console.log("El area del circulo mide " + areaCirculo + "unidades^2")

function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return radio*radio * PI;
}

console.groupEnd();

//Interaccion con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo3");
    const inputAltura = document.getElementById("InputTriangulo4");
    const value = input.value;
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(value, valueAltura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function calcularAlturaTrianguloIsosceles() {
    const input = document.getElementById("InputIsosceles1");
    const input2 = document.getElementById("InputIsosceles2");
    const value = input.value;
    const value2 = input2.value;
    alert(Math.sqrt(value*value - ((value2*value2)/4)))
}

function validateAndCalculateIsoscelesTriangle(side1, side2, base) {
    if (side1 != side2) {
        return -1;
    }
    return Math.sqrt(side1*side2 - ((base*base)/4))
}