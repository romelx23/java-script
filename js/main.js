//Seleccionando elementos de la tabla
const table=document.getElementById('title')

const id=document.getElementById('id')
const name=document.getElementById('name')
const tam=document.getElementById('tamanio')
const edad=document.getElementById('edad')

//Seleccionando elementos del formulario

const nombre=document.getElementById('in-nombre')
const tamanio=document.getElementById('in-tamanio')
const inedad=document.getElementById('in-edad')

const ingresar=document.getElementById('in-ingresar')

const form=document.getElementById("form");
//tamanio.setAttribute('type','date')

//Añadir clases a un elemento

// nombre.classList.add('table-nombre')
// nombre.classList.remove('nombre')

// if(nombre.classList.contains('nombre')) console.log('nombre tiene la clase nombre')
// else console.log('nombre no tiene la clase nombre')

// console.log(name.innerHTML);
// console.log(name.textContent);

// console.log(tamanio.value);

//Añdir un evento ==========//

ingresar.addEventListener("click", ()=> {
    name.textContent=nombre.value
    tam.textContent=tamanio.value
    edad.textContent=inedad.value
})
//Para ver los nodos hijos de un elemento
//Sirve para buscar alguna rpopiedad
console.log(inedad.childNodes)
ingresar.addEventListener("keyup",(e)=>{

})

