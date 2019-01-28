
// Inicializar Firebase
var config = {
  apiKey: "AIzaSyCXt200Wt9hb7cfANBIK5MM-B8fzmF7Yw4",
  authDomain: "aplicacionessocrative.firebaseapp.com",
  databaseURL: "https://aplicacionessocrative.firebaseio.com",
  projectId: "aplicacionessocrative",
  storageBucket: "",
  messagingSenderId: "76358693976"
};
firebase.initializeApp(config);
/*
var app = document.getElementById('app')

var dbRef= firebase.database()

var mensajeRef = dbRef.ref('message')

mensajeRef.once('value').then(function(snapshot){
  app.innerText = snapshot.val()
})*/

//obtener los ids
function getID(id){
  return document.getElementById(id).value;

}
//cambiar los datos a 0 
function inputsTask(id,result){
  return document.getElementById(id).value=result;
}
function arrayJson(id,name,description){
  var data = {
      id:id,
      name : name,
      description : description
  };
  return data;
}
function insertarDatos(){
  var id = getID("id");
  var name = getID("name");
  var description = getID("description");
  console.log(name+id+description);
  if (id.length==0 || name.length==0 || description.name==0) {
      alert("Elemento vacio");
  }else{
    var arrayData = arrayJson(id,name, description);
    console.log(arrayData);
    var dbRef= firebase.database();
    var task = dbRef.ref('task').child(id);
    task.set(arrayData);
    alert("Datos guardados");
    inputsTask("id","");
    inputsTask("name","");
    inputsTask("description","");


  }
}
function innerHTML(id,result){
  return document.getElementById(id).innerHTML+=result;
}
//llenar tabla
function table(id,name,description){

  return '<tr>'+
          '<td>'+name+'</td>'+
          '<td>'+description+'</td>'+
          '<td><i class="fas fa-edit"'+
          ' onclick="editTask('+id+','+name+','+description+')"></i></td>'+
          '<td><i class="fas fa-trash" onclick="remove('+id+')"></i></td>'+
        '</tr>';
}
//obtener datos

function mostrarDatos(){
  var dbRef= firebase.database();
    var task = dbRef.ref('task').child('hola');
    task.on("child_added",function(data){
        var taskvalue = data.val();
        var result= table(taskvalue.respuesta1,taskvalue.respuesta2,taskvalue.pregunta);
        innerHTML("loadTask",result);
    });
    
  
}
//editar
function editTask(id,name,description){
  inputsTask("id",id);
  inputsTask("name",name);
  inputsTask("description",description);
}
//eliminar
function remove(id){
  var dbRef= firebase.database();
  var task = dbRef.ref('task').child(id);
  task.remove();
  location.reload();
  
}
///////////////////////////////
//preguntas
function innerHTMLPre(id,result){
  return document.getElementById(id).innerHTML+=result;
}
//llenar tabla
function rButton(pregunta,respuesta1,respuesta2,respuesta3){

  return '<form name="frmSO"><p>PREGUNTA :'+pregunta+'<br></br>'+
         '<label><input type="radio" name="optradio"value="'+respuesta1+'">RESPUESTA :'+respuesta1+'</label><br></br>'+
         '<label><input type="radio" name="optradio"value="'+respuesta2+'">RESPUESTA :'+respuesta2+'</label><br></br>'+
         '<label><input type="radio" name="optradio"value="'+respuesta3+'">RESPUESTA :'+respuesta3+'</label><br></br>'+
         '</form><hr/>';
}
//obtener datos

function mostrarPreguntas(){
  var dbRef= firebase.database();
    var task = dbRef.ref('task');
    task.on("child_added",function(data){
        var taskvalue = data.val();
        var result= rButton(taskvalue.pregunta, taskvalue.respuesta1,taskvalue.respuesta2,taskvalue.respuesta3);
        innerHTMLPre("preguntas",result);
    });

}

function guardarRespuesta(){
  var resultado=[];
        var porNombre=document.getElementsByName("optradio");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<porNombre.length;i++)
        {
            if(porNombre[i].checked)
                resultado.push(porNombre[i].value);
        }
        document.getElementById("resultado").innerHTML=resultado;
        var arrayData = resultado;
        console.log(arrayData);
        var dbRef= firebase.database();
        var estudiante=document.getElementById("he").innerText;
        var task = dbRef.ref('RespuestaEstudiante').child(estudiante);
        task.set(arrayData);
        alert("Datos guardados");

}
///////////////profesor/////////////////////"
///crear cursos
