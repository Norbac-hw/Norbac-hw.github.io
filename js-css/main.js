var changelogVolumen = 'Version 1.0.0 \nEl calculador de volúmen Norbac ya está en funcionamiento\n\nVersion 1.1.0 \nSe agregaron unas cosas para la mayor comodidad de uso.\n\nVersión 1.2.0\nOptimización del código\n\nVersión 1.3.0\nMejora de la interfaz web.';
var changelogCalculadora = 'Versión 1.0.0 \nLa calculadora de Norbac está en funcionamiento con solo operaciones básicas';
var changelogArea = 'Version 1.0.0 \nEl calculador de área y perímetro de Norbac ya está en funcionamiento.';
//Volumen
function PrismaTriangular() {
	var base = parseFloat(document.getElementById('base').value);
	var lado2 = parseFloat(document.getElementById('l2pt').value);
	var lado3 = parseFloat(document.getElementById('l3pt').value);
	var haltura = parseFloat(document.getElementById('apt').value);
	var altura = parseFloat(document.getElementById('hpt').value);
	var risoltptvo = '';
	var risoltptal = '';
	var risoltptat = '';
	risoltptal = (base + lado2 + lado3) * altura;
	risoltptvo = ((base * haltura)/2)* altura;
	risoltptat = risoltptal + (base * haltura);
	document.getElementById('resultadoprismatriangular').innerHTML = 'volumen: ' + risoltptvo.toFixed(10) + "<br>" + 'area lateral: ' + risoltptal.toFixed(10) + "<br>" + 'area total: ' + risoltptat.toFixed(10);
}

function PrismaCuadrangular() {
	var base = parseFloat(document.getElementById('l1pc').value);
	var altura = parseFloat(document.getElementById('l2pc').value);
	var haltura = parseFloat(document.getElementById('hpc').value);
	risoltpcal = '';
	risoltpcat = '';
	risoltpcvo = '';
	risoltpcal = ((2 * base) + (2 * altura)) * haltura;
	risoltpcvo = base * altura * haltura;
	risoltpcat = risoltpcal + (2 * base * altura);
	document.getElementById('resultadoprismacuadrangular').innerHTML = 'volumen: ' + risoltpcvo.toFixed(10) + "<br>" + 'area lateral: ' + risoltpcal.toFixed(10) + "<br>" + 'area total: ' + risoltpcat.toFixed(10);
}

function PrismaMasCuatroLados(){
	var nl = parseFloat(document.getElementById('nlprm').value);
	var lado = parseFloat(document.getElementById('lpm').value);
	var apotema = parseFloat(document.getElementById('aprm').value);
	var haltura = parseFloat(document.getElementById('hpm').value);
	risoltprmal = '';
	risoltprmat = '';
	risoltprmvo = '';
	risoltprmal = nl * lado * haltura;
	risoltprmvo = ((nl * lado * apotema)/2) * haltura; 
	risoltprmat = risoltprmal + (nl * lado * apotema)
	document.getElementById('resultadoprismamascuatrolados').innerHTML = 'volumen: ' + risoltprmvo.toFixed(10) + "<br>" + 'area lateral: ' + risoltprmal.toFixed(10) + "<br>" + 'area total: ' + risoltprmat.toFixed(10);
}

function PiramideTriangular() {
	var base = parseFloat(document.getElementById('basepit').value);
	var lado2 = parseFloat(document.getElementById('l2pit').value);
	var lado3 = parseFloat(document.getElementById('l3pit').value);
	var haltura = parseFloat(document.getElementById('apit').value);
	var altura = parseFloat(document.getElementById('hpit').value);
	var apotema = parseFloat(document.getElementById('appit').value);
	var risoltpitvo = '';
	var risoltpital = '';
	var risoltpitat = '';
	risoltpital = ((base + lado2 + lado3) * apotema)/2;
	risoltpitvo = (((base * haltura)/2)* altura)/3;
	risoltpitat = risoltpital + ((base * haltura)/2);
	document.getElementById('resultadopiramidetriangular').innerHTML = 'volumen: ' + risoltpitvo.toFixed(10) + "<br>" + 'area lateral: ' + risoltpital.toFixed(10) + "<br>" + 'area total: ' + risoltpitat.toFixed(10);
}

function PiramideCuadrangular() {
	var base = parseFloat(document.getElementById('basepic').value);
	var altura = parseFloat(document.getElementById('l2pic').value);
	var haltura = parseFloat(document.getElementById('hpic').value);
	var apotema = parseFloat(document.getElementById('appic').value);
	risoltpical = '';
	risoltpicat = '';
	risoltpicvo = '';
	risoltpical = (((2 * base) + (2 * altura)) * apotema)/2;
	risoltpicvo = (base * altura * haltura)/3;
	risoltpicat = risoltpical + (base * altura);
	document.getElementById('resultadopiramidecuadrangular').innerHTML = 'volumen: ' + risoltpicvo.toFixed(10) + "<br>" + 'area lateral: ' + risoltpical.toFixed(10) + "<br>" + 'area total: ' + risoltpicat.toFixed(10);
}

function PiramideMasCuatroLados(){
	var nl = parseFloat(document.getElementById('nlpim').value);
	var lado = parseFloat(document.getElementById('lpim').value);
	var apotema = parseFloat(document.getElementById('apim').value);
	var haltura = parseFloat(document.getElementById('hpim').value);
	var apotemapiramide = parseFloat(document.getElementById('appim').value);
	risoltpimal = '';
	risoltpimat = '';
	risoltpimvo = '';
	risoltpimal = (nl * lado * apotemapiramide)/2;
	risoltpimvo = (((nl * lado * apotema)/2) * haltura)/3; 
	risoltpimat = risoltpimal + ((nl * lado * apotema)/2);
	document.getElementById('resultadopiramidemascuatrolados').innerHTML = 'volumen: ' + risoltpimvo.toFixed(10) + "<br>" + 'area lateral: ' + risoltpimal.toFixed(10) + "<br>" + 'area total: ' + risoltpimat.toFixed(10);
}

function cilindro() {
	var hci = document.getElementById('alturaci').value;
	var raci = document.getElementById('radio').value;
	var pi = document.getElementById('pi').value;
	var risoltcivo = '';
	var risoltcial = '';
	var risoltciat = '';
	risoltcivo = raci * pi * raci * hci;
	risoltcial = 2 * raci * pi * hci;
	risoltciat = risoltcial + (2 * (pi * raci * raci))
	document.getElementById('resultadocilindro'). innerHTML = 'volumen: ' + risoltcivo.toFixed(10) + "<br>" + 'area lateral: ' + risoltcial.toFixed(10) + "<br>" + 'area total: ' + risoltciat.toFixed(10);
}

function cono(){
	var hco = document.getElementById('alturaco').value;
	var raco = document.getElementById('radioco').value;
	var generatriz = document.getElementById('generatriz').value;
	var pi = document.getElementById('pi').value;
	var risoltvoco = '';
	var risoltalco = '';
	var risoltatco = '';
	risoltvoco = (raco * pi * raco * hco)/3;
	risoltalco = (pi * 2 * raco * generatriz)/2;
	risoltatco = risoltalco + (raco * raco * pi);
	document.getElementById('resultadocono').innerHTML = 'volumen: ' + risoltvoco.toFixed(10) + "<br>" + 'area lateral: ' + risoltalco.toFixed(10) + "<br>" + 'area total: ' + risoltatco.toFixed(10);
}

function esfera(){
	var radesf = document.getElementById('radioesf').value;
	var risoltesf;
	var pi = document.getElementById('pi').value;
	risoltesf = (pi * radesf * radesf * radesf * 4)/3;
	document.getElementById('resultadoesfera').innerHTML = 'El volúmen es de: ' + risoltesf.toFixed(10) + " unidades cubicas";
}

//Area Perimetro

function cuadrado(){
	var lado = document.getElementById('ladoCuadrado').value;
	var area = lado * lado;
	var perimetro = lado * 4;
	document.getElementById('resultadoCuadrado').innerHTML = '<br>' + 'El área es: ' + area + 'cm' + '<sup>2</sup>' + 
	'<br>' + 'El Perímetro es: ' + perimetro + 'cm'
}

function heron(){
	var l1 = parseInt(document.getElementById('ladoUnoTriangulo').value);
	var l2 = parseInt(document.getElementById('ladoDosTriangulo').value);
	var l3 = parseInt(document.getElementById('ladoTresTriangulo').value);
	var perimetro = l1 + l2 + l3;
	var sp = perimetro/2;
	var area = Math.sqrt(sp *(sp - l1) * (sp - l2) * (sp - l3));
	document.getElementById('resultadoHeronTriangulo').innerHTML = '<br>' + 'El área es: ' + area + 'cm' + '<sup>2</sup>' + 
	'<br>' + 'El Perímetro es: ' + perimetro + 'cm';
}

function triangulo(){
	var base = document.getElementById('baseTriangulo').value;
	var altura = document.getElementById('alturaTriangulo').value;
	var area = base * altura/2;
	document.getElementById('resultadoTriangulo').innerHTML = '<br>' + 'El área es: ' + area + 'cm' + '<sup>2</sup>';
}

function rectangulo(){
	var base = document.getElementById('baseRectangulo').value;
	var altura = document.getElementById('alturaRectangulo').value;
	var perimetro = 2 * base + 2 * altura;
	var area = base * altura;
	document.getElementById('resultadoRectangulo').innerHTML = '<br>' + 'El área es: ' + area + 'cm' + '<sup>2</sup>' + 
	'<br>' + 'El Perímetro es: ' + perimetro + 'cm';
}

function poligono(){
	var nl = document.getElementById('numeroLados').value;
	var l = document.getElementById('ladoPoligono').value;
	var ap = document.getElementById('apotemaPoligono').value;
	var perimetro = nl * l;
	var area = (perimetro * ap)/2;
	document.getElementById('resultadoPoligono').innerHTML = '<br>' + 'El área es: ' + area + 'cm' + '<sup>2</sup>' + 
	'<br>' + 'El Perímetro es: ' + perimetro + 'cm';
}

//Calculadora

function suma() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
	document.getElementById('residuos').innerHTML = null;
    document.getElementById('resultado').innerHTML = num1 + '\n' + num2 + '\n' + '<hr>' +(num1 + num2);
}
   
function resta() {
   	var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if(num1 < num2){
    	document.getElementById('resultado').innerHTML = num2 + '\n' + num1 + '\n' + '<hr>' + (num2 - num1) + '<br>' + 'resultado = ' + (num1 - num2);
    }else{
    	document.getElementById('resultado').innerHTML = num1 + '\n' + num2 + '\n' + '<hr>' +(num1 - num2);
    }
	document.getElementById('residuos').innerHTML = null;
}

function multilicacion() {
	const n1 = parseFloat(document.getElementById('num1').value);
	const n2 = parseFloat(document.getElementById('num2').value);
    var num1 = n1;
    var num2 = n2;
	if(num1.toString().includes('.')){
		num1 = num1.toString().split('.')[0] + num1.toString().split('.')[1];
	}
	if(num2.toString().includes('.')){
		num2 = num2.toString().split('.')[0] + num2.toString().split('.')[1];
	}
    var n2l = num2.toString().length;
    var n2rl = n2l - 1;
    var r = '';
    for(var i = n2rl; i >= 0; i--){
    	var n = num2.toString();
    	var am = '';
    	r += (num1 * n[i]).toString();
    	for (var x = 0; x <= (n2rl - i - 1); x++){
    		am += '0';
    	}
    	r += am;
    	r += '\n';
    }
	document.getElementById('residuos').innerHTML = null;
    document.getElementById('resultado').innerHTML = n1 + '\n' + n2 + '\n' + '<hr>' + r + '<hr>' + (n1 * n2);
}

function division(){
	
	const n1 = parseFloat(document.getElementById('num1').value);
	var num1 = parseFloat(document.getElementById('num1').value);
	const n1l = num1.toString().length - 1;
	var num2 = parseFloat(document.getElementById('num2').value);
	if(n1.toString().includes('.') || num2.toString().includes('.')){
		document.getElementById('residuos').innerHTML = null;
		document.getElementById('resultado').innerHTML = 'Lee las notas.';
	}else{
	var residuos = [];
	num1 = num1.toString().substr(0, num2.toString().length);
	for(var ontoy = num2.toString().length; ontoy <= n1l; ontoy++){
		var on = n1.toString()[ontoy];
		console.log(on);
		if(on != undefined && on.includes('.')){
			on = on.split('.')[0] + on.split('.')[1];
		}
		num1 = num1 % num2;
		num1.toString();
		num1 += on;
		num1 = parseFloat(num1);
		residuos.push(num1);
	}
	residuos.push(n1 % num2);
	var r = '';
	for(var y = 0; y <= residuos.length - 1; y++){
		r += residuos[y];
		r += '<br>';
	}
	document.getElementById('resultado').innerHTML =  Math.floor(n1/num2) + '<br>' + num2 + '|' + 
    n1;
	document.getElementById('residuos').innerHTML = r;

}
}

/*function raizcuadrada() {
	var derecha = [];
	var izquierda = [];	
	var n1 = document.getElementById('num1').value;
	var sqrt = Math.sqrt(n1).toFixed(5);
	derecha.push(sqrt);
	izquierda.push(n1);
	if(n1.toString().includes('.')){
		n1 = n1.toString().split('.')[0] + n1.toString().split('.')[1];
	}
	for(var i = 0; i < n1.length; i++){
		
	}
	document.getElementById('residuos').innerHTML = null;
}*/

function mcm(n1,n2) {
	if(n1.toString().includes('.') || n2.toString().includes('.')){
		document.getElementById('residuos').innerHTML = null;
		document.getElementById('resultado').innerHTML = 'Ingresa un número entero.';
	}else{
		var dv = 2;
	var divisores = [];
	var numeros_unos = [n1];
	var numeros_dos = [n2];
	var operacion = '';
 	while(n1>1 || n2>1){
 		if (n1 % dv ===0 || n2 % dv ===0) {
 			divisores.push(dv);
       		if (n1 % dv == 0){
           		n1=n1/dv;
				numeros_unos.push(n1);
       		}
       		if (n2 % dv == 0) {
       			n2=n2/dv;
				   numeros_dos.push(n2);
       		}
       	} else {
       		dv++;
          }
	}
	for(var x = 0; x <= numeros_unos.length - 1; x++){
		operacion += numeros_unos[x] + ' ' + numeros_dos[x] + ' | ' + divisores[x] + '\n';
	}
	document.getElementById('residuos').innerHTML = null;
	document.getElementById('resultado').innerHTML = operacion + '\n'+ 'MCM = ' + productoArray(divisores);	
	}
	
}

function mcd(n1, n2){
	if(n1.toString().includes('.') || n2.toString().includes('.')){
		document.getElementById('residuos').innerHTML = null;
		document.getElementById('resultado').innerHTML = 'Ingresa un número entero.';
	}else{
    var dv = 2;
    var divisores= [];
	var numeros_unos = [n1];
	var numeros_dos = [n2];
	var operacion = '';
    while(dv <= n1 || dv <= n2){
    	if(n1 % dv == 0 && n2 % dv == 0) {
            divisores.push(dv);
            n1 /= dv;
            n2 /= dv;
    		numeros_unos.push(n1);
			numeros_dos.push(n2);
        }else{
            dv++;
        }
    } 
	for(var x = 0; x <= numeros_unos.length - 1; x++){
		if(divisores[x] != undefined){
			operacion += numeros_unos[x] + ' ' + numeros_dos[x] + ' | ' + divisores[x] + '\n';
		}else{
			operacion += numeros_unos[x] + ' ' + numeros_dos[x] + ' | ' + ' ';
		}
		
	}
	document.getElementById('residuos').innerHTML = null;
    document.getElementById('resultado').innerHTML = operacion + '\n'+ 'MCD = ' + productoArray(divisores);
}
}

function productoArray(array){
	var producto = 1; 
 	var contador = 0;
 	while(contador< array.length){
 		producto = producto * array[contador];
 		contador ++;
 	}
 	return producto;
}