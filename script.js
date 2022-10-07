// obtener_localStorage();

// function obtener_localStorage(){

//     if (localStorage.getItem("nombre")){

// // se que existe el nombre en el localstorage
//     let nombre = localStorage.getItem("nombre");
//     let persona =JSON.parse(localStorage.getItem("persona"));

//     console.log( nombre );
//     console.log( persona );

//     }else{
//         console.log ("No existe en el localStorage")
//     }

// }
// guardar_localstorage();
// function guardar_localstorage(){
//     let persona ={
//         nombre: "Andres Manuel",
//         apellido: "Lopez Obrador",
//         calificación: "-10"
//     }

//     let nombre = "Amlo";

//     localStorage.setItem("nombre", nombre  );
//     localStorage.setItem("alumno", JSON.stringify(persona));

// }

var selctedRow = null;

// Muestra Alerta
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Limpiar todos los documentos
function clearFields() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#rollNo").value = "";
}

// Agregar Información

document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  //Obtener el valor del formulario
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let rollNo = document.querySelector("#rollNo").value;

  //LOCALSTOR

  obtener_localStorage();

  function obtener_localStorage() {
    if (localStorage.getItem("firstName")) {
      // se que existe el nombre en el localstorage
      let nombre = localStorage.getItem("firstName");
      let persona = JSON.parse(localStorage.getItem("calificación"));

      console.log(firstName);
      console.log(calificación);
    } else {
      console.log("No existe en el localStorage");
    }
  }
  guardar_localstorage();
  function guardar_localstorage() {
    let firstName = {
      nombre: [],
      apellido: [],
    };

    let rollNo = {
      calificación: [],
    };

    localStorage.setItem("calificación", rollNo);
    localStorage.setItem("alumno", JSON.stringify(firstName));
  }

  // Validar
  if (firstName == "" || lastName == "" || rollNo == "") {
    showAlert("Favor de rellenar todos los campos", "danger");
  } else {
    if (selctedRow == null) {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");

      row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>
             <a href="#" class="btn btn-warning btn-sm edit">Editar</a>      
             <a href="#" class="btn btn-danger btn-sm delete">Delete</a>  
        `;
      list.appendChild(row);
      selctedRow = null;
      showAlert("Estudiante agregado", "exitosamente");
    } else {
      selctedRow.children[0].textContent = firstName;
      selctedRow.children[1].textContent = lastName;
      selctedRow.children[2].textContent = rollNo;
      selctedRow = null;
      showAlert("Información del estudiante editada", "info");
    }

    clearFields();
  }
});

// Editar información

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selctedRow = target.parentElement.parentElement;
    document.querySelector("#firstName").value =
      selctedRow.children[0].textContent;
    document.querySelector("#lastName").value =
      selctedRow.children[1].textContent;
    document.querySelector("#rollNo").value =
      selctedRow.children[2].textContent;
  }
});

// Borrar Información

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Estudiante eliminado", "danger");
  }
});

const save = () => {
  console.log("guardar");
  let lista= JSON.parse(localStorage.getItem("lista"))
  if(lista===null){
    lista=[]
  }
  const nuevoUsuario = {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    grade: document.querySelector("#grade").value,
  };
    console.log("*****")
    lista.push(nuevoUsuario)
    console.log(nuevoUsuario)
    localStorage.setItem("lista", JSON.stringify(lista))

};

