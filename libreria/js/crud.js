var nuevoId;
var db=openDatabase("itemDB","1.0","itemDB", 65535)

function limpiar () {
    document.getElementById("item"). value="";
    document.getElementById(importancia). value="";
}

// Funcionalidad de los botones //

$(function () { 
$("#crear").click(function(){
    db.transaction(function(transaction){
        var sql="CREATE TABLE Idea"+
        "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "+
        "item VARCHAR(100) NOT NULL, "+
        "Importancia ENTERO NOT NULL)";
        transaction.executeSql(sql,undefined, function() {
            alert("Inicio de registro creado exitosamente") ;
        }, function ( transaction, err ) {
                alert(err.message);
    
        })
        }); 

    });

})