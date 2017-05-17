//1. Crear el elemento
//2. Crear el nodo de texto
//3. Añadir el nodo de texto al elemento
//4. Agregar atributos al elemento
//5. Agregar el elemento al documento(primero buscar donde va a estar, luego incrustar el elemento)

	var nuevoInput= function(){
		var crearInput = document.createElement("input");
		var contenidoinput = document.createTextNode("Esta es una nueva lista");
		crearInput.appendChild(contenidoinput);
		crearInput.setAttribute("id", "input-creado");
		document.getElementById("contenedor-anadir-lista").appendChild(crearInput);
	};

	var nuevoBoton= function(){
		var crearBoton = document.createElement("button");
		var contenidoboton = document.createTextNode("Este es un botón");
		crearBoton.appendChild(contenidoboton);
		crearBoton.setAttribute("id", "boton-creado");
		document.getElementById("contenedor-anadir-lista").appendChild(crearBoton);
	};

	/*var mostrarTarea = function(){
		var valorInput = document.getElementById("input-creado").value;
		document.getElementById("lista-input").appendChild(valorInput);
	};*/



		//funcion añadir una lista al presionar click
		function anadirLista(nuevoInput, nuevoBoton) {
			var aLista = document.getElementById("anadir_lista");
			aLista.addEventListener("click", nuevoInput);
			aLista.addEventListener("click", nuevoBoton);		
		};
		anadirLista();

		function presionBoton(){
			var input= document.getElementById("input-creado").value;
			var padre=document.getElementById("lista-input");
			var texto= document.createTextNode(input);
			var hijo = document.createElement("p");
			hijo.classList.add("box-hijo");
			hijo.appendChild(texto);
			padre.appendChild(hijo);

		}
	presionBoton()




		//funcion para mostrar lo que tiene el input al presionar el botón
		/*function presionBoton(){
			var traerBoton = document.getElementById("boton-creado");
			traerBoton.addEventListener("click", function(){
			var valorInput = document.getElementById("input-creado").value;
			var nodo = document.createTextNode(valorInput);
			document.getElementById("lista-input").appendChild(nodo);
			});
		};*/













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
