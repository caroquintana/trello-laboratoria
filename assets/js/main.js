//1. Crear el elemento
//2. Crear el nodo de texto
//3. Añadir el nodo de texto al elemento
//4. Agregar atributos al elemento (atributos lo cambié a la posición 3)
//5. Agregar el elemento al documento(primero buscar donde va a estar, luego incrustar el elemento)
//function principal(){
	var nuevoInput= function(){
		var crearInput = document.createElement("input");
		var contenidoinput = document.createTextNode(" ");
		crearInput.setAttribute("type", "text");
		crearInput.setAttribute("id", "input-creado");
		crearInput.setAttribute("placeholder", "Nombre de la lista");		
		crearInput.appendChild(contenidoinput);
		document.getElementById("contenedorlista").appendChild(crearInput);
	};

	var nuevoBoton= function(){
		var crearBoton = document.createElement("button");
		var contenidoboton = document.createTextNode("Crear nueva lista");
		crearBoton.setAttribute("id", "boton-creado");
		crearBoton.setAttribute("onclick", "presionBoton()")	
		crearBoton.appendChild(contenidoboton);
		document.getElementById("contenedorlista").appendChild(crearBoton);
	};

	var mostrarTarea = function(){
		var valorInput = document.getElementById("input-creado").value;
		document.getElementById("lista-input").appendChild(valorInput);
	};

		//funcion añadir una lista al presionar click
		function anadirLista() {
			var aLista = document.getElementById("anadir_lista");
			aLista.addEventListener("click", nuevoInput);
			aLista.addEventListener("click", nuevoBoton);		
		};
		anadirLista();


		function presionBoton(){
			var textoNuevaLista= document.getElementById("input-creado").value;
			var textoACaja=document.getElementById("lista-input");
			var textoEnNodo= document.createTextNode(textoNuevaLista);
			var etiquetaTexto = document.createElement("h1");
			var crearSegundoBoton = document.createElement("button");
			var contenidoboton = document.createTextNode("+ Añadir una tarjeta");
			etiquetaTexto.classList.add("box-hijo");
			etiquetaTexto.appendChild(textoEnNodo);
			textoACaja.appendChild(etiquetaTexto);
			crearSegundoBoton.setAttribute("id", "segundo-boton");
			crearSegundoBoton.appendChild(contenidoboton);
			document.getElementById("lista-input").appendChild(crearSegundoBoton);

		};
		

		//funcion para mostrar lo que tiene el input al presionar el botón
		// function presionBoton(){
		// 	var traerBoton = document.getElementById("boton-creado");
		// 	traerBoton.addEventListener("click", mostrarTarea);	

		// };
		




		//function test(){
		//	var boton = document.getElementById("boton-creado");
		//	boton.addEventListener("click",function(){
		//		alert("Funciono");
		//	});
		//}
		
//};

//principal();











/*

**input será el título h1
**desplegar un mensaje clickleable



//indicamos donde  van a estar las nuevas listas
	var contenedor = document.getElementById("contenedor-anadir-lista");



//crear nuevos nodos elementos
	var nuevasListas = document.createElement("div");
	var textoNuevaLista = document.createTextNode(lista);
	var elementoContenedor = document.createElement("span");


//asignamos padres a los nodos
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

*/
