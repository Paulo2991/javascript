function botao(){
	document.getElementById("agredecimento").innerHTML = "<b>Obrigado por clicar</b>";
	//console.log(document.getElementById("agredecimento"));
	//alert("Obrigado por clicar");
}
function redirecionar(){
	window.open("http://www.ufrrj.br/codep/materialcursos/gerenciamento/simuladogabarito.pdf");
	//window.location.href = "http://www.ufrrj.br/codep/materialcursos/gerenciamento/simuladogabarito.pdf";
}
function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
	//alert("Trocar texto");
	elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
	alert("Pagina Carregada");
}
function funcaoChange(elemento){
	console.log(elemento.value);
}
/*
function soma(n1,n2){
	return n1+ n2;
}
*/
/*
let valida = 0;
function validaIdade(idade){
	let valida = true;
	if(idade >= 18){
		valida = true;
	}else{
		valida = false;
	}
	return valida;
	
}
let idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validaIdade(idade));
*/
/*
let d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getDay());

let count = 0;
for(count = 0;count <=5; count++){
	alert(count);
}
let count = 0;
while(count <= 5){
	console.log(count);
	alert(count);
	count = count + 1;
}
let idade = prompt("Qual é sua idade?");
if(idade >= 18){
	alert("Maior De Idade:");
}else{
	alert("Menor De Idade:")
}

let frutas = [{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
//let fruta = {nome:"maça",cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);
//let nome = "Rafael Galleani";
//let idade = 29;
//let idade2 = 10;
//let frase = "Japão é o melhor time do mundo";
//let lista = ["maça","pêra","laranja"];
//lista.push("uva");
//lista.pop();
//alert(lista[1]);
//console.log(lista[0].length);
//console.log(lista.reverse());
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
//alert(nome + "tem "+idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade);
//console.log(idade2);
//console.log(idade * idade2);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));