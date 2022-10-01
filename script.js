var selctedRow= null;

// Muestra Alerta 
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Limpiar todos los documentos
function clearFields(){
    document.querySelector("#FirstName").value ="";
    document.querySelector("#lastName").value ="";
    document.querySelector("#rollNo").value ="";
}

// Agregar Información

document.querySelector("student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

//Obtener el valor del formulario
const firtsName = document.querySelector("#firstName").value;
const lastName = document.querySelector("#lastName").value;
const rollNo = document.querySelector("#rollNo").value;



// Validar
if(firstName == ""|| lastName == "" || rollNo ==""){
    showAlert("Favor de rellenar todos los campos", "danger");
}

});


// Borrar Información

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
});

