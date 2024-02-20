const edad=prompt("Ingresa tu edad");
const lugarNacimiento=prompt("Ingresa tu lugar de nacimiento");
const fecha=prompt("Ingresa tu fecha de nacimiento");
const comidaFavorita=prompt("Ingresa tu comida favorita");
const carrera=prompt("Ingresa tu carrera");
const diaFavorito=prompt("Ingresa tu dia favorito");

//Construye una lista con la informacion solicitada
const lista=document.createElement("ul");

//Agrega cada dato como elemento de lista
const agregarDato=(etiqueta, valor)=>{
    const elementoLista=document.createElement("li");
    elementoLista.innerHTML=`<strong>${etiqueta}:</strong> ${valor}`;
    lista.appendChild(elementoLista);


};
agregarDato("Nombre", '${nombre} ${apellido}');
agregarDato("Edad", edad);
agregarDato("Lugar de nacimiento", lugarNacimiento);
agregarDato("Fecha de Nacimiento", fecha);
agregarDato("Comida favorita ", comidaFavorita);
agregarDato("carrera", carrera);
agregarDato("Dia favorito de la semana", diafavorito);

//crea un contenedor div para mostrar la lista
const resultadoDiv = document.createElement("div");
resultadoDiv.appendChild(lista);

//agrega el nuevo div al cuerpo del documento
document.body.appendChild(resultadoDiv);



