//Codigo del Cuadrado
console.group("Cuadrados")

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

/* const perimetroCuadrado = ladoCuadrado *4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm"); */

function perimetroCuadrado(lado){
    return lado * 4
}

perimetroCuadrado()

/* const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2"); */

function areaCuadrado(lado){
    return lado * lado;
}

areaCuadrado()

console.groupEnd()

//Codigo del Triangulo
console.group("Triangulos")
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " 
+ baseTriangulo + "cm, " 
+ ladoTriangulo2 + "cm, " 
+ ladoTriangulo1 + "cm"
); */

/* const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm"); */

/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm"); */

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}


/* const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
console.log("El area del triángulo es: " + areaTriangulo + "cm");
 */
function areaTriangulo(base,altura){
    return (base + altura) /2
}
console.groupEnd();
// Codigo del Circulo

console.group("Circulos")

//Radio

/* const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo) + "cm"; */


//Diametro
/* const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo) + "cm"; */
function diametroCirculo(radio){
    return radio*2
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencias
/* const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Circulo es: " + perimetroCirculo + "cm"); */

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

//Area
/* const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del Circulo es: " + areaCirculo + "cm"); */
function areaCirculo(radio){
    return (radio*radio)*PI
}
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const area = areaCuadrado(value)
    alert(area)
}