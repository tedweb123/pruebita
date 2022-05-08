// JavaScript Document
var proceso;
var factual=11;
var tfotogramas=11;
var estaenmarcha;

var coordenaday=0;
window.onload=terminacarga;
window.onscroll=mirascroll;
window.onresize=recalcula;
		
	function terminacarga() {	
	lanzaanimacion();
	var a=document.querySelector("body");
	
        recalcula();
}

function recalcula(){
    //navegador.style.top=encabezado.offsetHeight+"px";
	var altura1=cuerpo.offsetHeight;
	var altura2=window.innerHeight-encabezado.offsetHeight;
	//navegador.style.height=Math.min(altura1,altura2)+"px";
}   
function mirascroll(){

	if(window.pageYOffset>coordenaday){
		encabezado.style.transform="translateY(-100%)";
	}else{
		encabezado.style.transform="translateY(0px)";
	}
	coordenaday=window.pageYOffset;
}
function muestraencabezado() {
	encabezado.style.transform="translateY(0px)";
}
function escondeencabezado() {
	if (!menuabierto) {
		encabezado.style.transform="translateY(-100%)"
	}
}



	function btn() {
	boton.onclick=arrancaopara;
	//boton.onclick=function() {arrancaopara()};
	lanzaanimacion();
}
	function arrancaopara() {
	if (estaenmarcha) {
		detenanimacion();
		boton.innerHTML="Iniciar";
	} else {
		avanza();
		lanzaanimacion();
		boton.innerHTML="Parar";
	}
}

function lanzaanimacion() {
	avanza();
	detenanimacion();
	proceso=setInterval(avanza,2000);
	estaenmarcha=true;//
}
function detenanimacion() {
	clearInterval(proceso);
	estaenmarcha=false;//
}
function avanza() {
	document.getElementById("foto"+factual).style.opacity="";
	factual++;
	if (factual>tfotogramas) {
		factual=1;
	}
	document.getElementById("foto"+factual).style.opacity="1";
}

	