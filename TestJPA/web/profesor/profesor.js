
//guardar nuevo curso


//obtener datos cursos
function mostrarCursos(){
  var dbRef= firebase.database();
    var task = dbRef.ref('academia/profesor/cursos');
    task.on("child_added",function(data){
        var taskvalue = data.val();
        innerHTMLPre("cursostt",'<label><input type="radio" name="optcur"value="'+taskvalue.nombrecur+'">'+taskvalue.nombrecur+'</label>');
    });
}

function cantidadRespuestas(){
  var idnumres = getID("idnumres");
  if (idnumres.length==0) {
      alert("Elemento vacio");
  }else{

    for (var i = 1; i <= idnumres; i++) {
      innerHTMLPre("numerorespuestas",'<input type="text" name="cantidaRes" placeholder="Escriba la respuesta" class="form-control">');
    }
      
  }}

function guardarRespuestaPro(){
  var resultadoP=[]
  var seleccionCurso=[];
  var c =document.getElementsByName("optcur");
      for(var i=0;i<c.length;i++)
      {
          if(c[i].checked)
              seleccionCurso.push(c[i].value);
      }
  resultadoP.push(seleccionCurso[0]); 
  var res=document.getElementsByName("cantidaRes");
      for(var j=0;j<res.length;j++)
      {
              resultadoP.push(res[j].value);
      }
  
      console.log(resultadoP);
}
