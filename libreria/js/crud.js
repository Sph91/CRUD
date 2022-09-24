var nuevoId;
var db=openDatabase("itemDB","1.0","itemDB", 65535)

function limpiar () {
    document.getElementById("item"). value="";
    document.getElementById(importancia). value="";
}

// Funcionalidad de los botones //

$(function () { 
    // crear tabla de ideas
$("#crear").click(function(){
    db.transaction(function(transaction){
        var sql="CREATE TABLE Ideas"+
        "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "+
        "item VARCHAR(100) NOT NULL, "+
        "Importancia ENTERO NOT NULL)";
        transaction.executeSql(sql,undefined, function() {
            alert("Inicio de registro creado exitosamente") ;
        }, function ( _transaction, err ) {
                alert(err.message);
    
        })
        }); 

    });

$("#listar").click(function(){
       //  cargar lista de ideas
cargarDatos();
})

function cargarDatos(){
// funcion para listar y pintar ideas en la pagina wen

    $("#listaIdeas").children().remove;
    db.transaction(function(transaction){
        var sql="SELECT * FROM Ideas ORDER BY id DESC";
        transaction.executeSql(sql,undefined,function(_transaction,result){
            if(result.rows.length){
                $("#listaIdeas").append('<tr><th>Idea</th><th>Importancia</th><th>Ideas</th><th></th><th></th></tr>');
                for(var i=0; i<result.rows.leght; i++){
                    var row=result.rows.item(i);
                    var item=row.item;
                    var id=row.id
                    var Idea=row.Idea;
                    $("#listaIdeas").append('<tr id="fila'+id+'" class="Reg_A'+id+'"><td><span class="mid">A'+id+'</span></td><td><span>'+item+'</span></td>'+Idea+'</span></td><td>Editar</td><td>Eliminar</td></tr>');
                }
            }else{
            $("#listaIdeas").append('<tr><td colspan="5" align="center">No existe registro de idea</td></tr>') ;
            }
        }, function ( _transaction, err ) {
            alert(err.messag)})
        })
    }
})

    //insertar registros



