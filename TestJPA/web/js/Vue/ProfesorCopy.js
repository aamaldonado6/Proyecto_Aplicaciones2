Vue.component('profesor',{
    template:`
    <div onload="agregarDatos()">
     <div class="container">
            <div class="row mt-4">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="container">
                                <h3>Profesor:</h3>
                                <h4 id=nombrepro></h4>
                                <hr/>
                                <div class="form-group">
                                    <label>Ingrese un nuevo curso o seleccione uno existente en la siguiente selección</label>
                                    <input type="text" v-model="nuevoCursoP" class="form-control" id="nombrecur" placeholder="Nombre del nuevo curso">
                                    <button class="btn btn-primary"  @click="crearNC()">Crear nuevo curso</button>
                                </div>
                                <div class="form-group">
                                    <label>Seleccione el curso:</label>
                                    <form class="form-control" id="cursostt">

                                    </form>
                                </div>

                            </div>
                            <br>
                            <div class="card-title">
                                <h5>Ingresar numero de respuestas para la pregunta</h5>
                            </div>
                            <div class="form-group">
                                <input type="number" id="idnumres" placeholder="numero de respuestas" class="form-control">
                                <button class="btn btn-primary" @click="cantidadRespuestas()">Crear respuestas</button>
                            
                            </div>
                            <hr>
                            <div class="form-group">
                                <input type="text" id="guardarpregunta" v-model="nuevaPregunta" placeholder="Escriba la pregunta" class="form-control">
                            </div>
                            <div class="form-group" id="numerorespuestas">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-success" @click="enviarRespuestasP()"">
                                    <i class="fas fa-plus-circle"></i>
                                    Enviar respuestas
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    </div>
    `,
    data(){
        return{
            nuevoCursoP: '',
            nuevaPregunta:''

        }
    },
    methods:{
        agregarDatos(){
            cargarCursos();
        },
        crearNC(){
            registrarNcurso("3-"+this.nuevoCursoP);
        },
        cantidadRespuestas(){
            var idnumres = document.getElementById("idnumres").value;
            if (idnumres.length==0) {
                alert("Elemento vacio");
            }else{
                for (var i = 1; i <= idnumres; i++) {
                    this.innerHTMLPre("numerorespuestas",'<input type="text" name="cantidaRes" placeholder="Escriba la respuesta" class="form-control">');
                }

            }},
        innerHTMLPre(id,result){
                return document.getElementById(id).innerHTML+=result;
            },
        enviarRespuestasP(){
            var resultado=[];
            var idnumres=document.getElementsByName("optcur");
            for(var i=0;i<idnumres.length;i++)
            {
                if(idnumres[i].checked)
                    resultado.push(idnumres[i].value);
            }
            var arrayData = resultado;
            console.log("id-curso:!:"+arrayData);
            registrarPreguntasResp(this.nuevaPregunta,arrayData);


        }

    }
})