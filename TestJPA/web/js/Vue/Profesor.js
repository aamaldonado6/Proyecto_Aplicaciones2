Vue.component('profesor',{
    template:`
    <div>
  <div id="page-container">
    <div id="header-container" style="background-color: #8cb4d2;padding-top: 3em">
      <p id="nombrepro" class="text-center" style="color: cornsilk;padding-bottom: 1em"></p>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <button class="btn btn-sm btn-outline-secondary" type="button">
            <a class="nav-item nav-link active" href="#">Multi opcion </a>
          </button>
          <button class="btn btn-sm btn-outline-secondary" type="button">
            <a class="nav-item nav-link active" href="#">Verdadero/Falso </a>
          </button>
          <button class="btn btn-sm btn-outline-secondary" type="button">
            <a class="nav-item nav-link active" href="#">Respuesta corta </a>
          </button>
        </div>
      </div>
    </nav>
  </div>
  <div id="cuerpo" style="padding-top: 7em" class="card text-center">
    <div class="preg" style="">
      <div class="col-md-8 mx-auto">
        <div class="card">
          <div class="card-body">
            {{pregunta}} <input class="inputCurso" type="text" v-model="nuevCur">
            <div class="mt-4" v-for="(item, index) of preguntasP">
              <div class="alert alert-primary" role="alert">
                <div class="d-flex justify-content-between align-items-center">
                  <div><p>Pregunta opcion multiple.Nro: {{contP}}</p>
                    <input class="inputPMO" type="text">
                  </div>
                  <div>
                    <a href="#" class="btn btn-primary" @click="agregarMultiRes">Agregar respuesta</a>
                  </div>
                </div>


              </div>
              <div class="mt-2" v-for="a of respuestasP">
              <div class="alert alert-danger" role="alert">
                <div class="d-flex justify-content-between align-items-center">
                  <div><p>Ingrese la respuesta <input class="inputRMO" type="text"></p>
                    
                  </div>
                  <div>
                    <p>Respuesta correcta<input class="radioMO" type="radio" ></p>
                  </div>
                </div>
              </div>

              </div>
              <a href="#" class="btn btn-success" @click="GuardarTT">Guardar Pregunta</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <hr/><hr/>
    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <i class="fas fa-check-square"></i>
            <h5 class="card-title">Opcion de pregunta</h5>
            <a href="#" class="btn btn-primary" @click="agregarMulti">Multi opcion</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <i class="fas fa-stream"></i>
            <h5 class="card-title">Opcion de pregunta</h5>
            <a href="#" class="btn btn-primary">Verdadero/Falso</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <i class="fas fa-file-signature"></i>
            <h5 class="card-title">Opcion de pregunta</h5>
            <a href="#" class="btn btn-primary">Respuesta corta</a>
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
            nuevaPregunta:'',
            respuestasP: [],
            preguntasP: [],
            pregunta: 'Ingrese el nombre del curso',
            nuevCur: '',
            nuevaRes: '',
            contP: 0

        }
    },
    methods:{
        agregarMultiRes: function(){
            this.respuestasP.push({
            });

        },
        agregarMulti: function(){
            this.contP++
            this.limpiar();
            this.preguntasP.push({
            });
        },
        GuardarTT(){
            var classP = document.getElementsByClassName("inputPMO");
            var classR = document.getElementsByClassName("inputRMO");
            var classC = document.getElementsByClassName("inputCurso");
            var classU = document.getElementById("nombrepro");
            var arrPMO=[];
            var jazz= new Object();
            console.log("YY="+classC[0].value);
            //arrPMO.push({curso: classC[0].value,pregunta: classP[0].value});
            jazz.curso=classC[0].value;
            jazz.pregunta=classP[0].value;
            jazz.cod=2;
            for(var i=0;i<classR.length;i++)
            {
                arrPMO.push({
                    respuesta: classR[i].value
                });

                console.log("ohohoho="+classR[i].value);
            }
            jazz.res=arrPMO;
            console.log("tttttttttttttttttttt=");
            doSend(jazz);
            this.limpiar();

        },
        limpiar(){
            this.preguntasP=[];
            this.respuestasP=[];
        },
        agregarDatos(){
            cargarCursos();
        },
        crearNC(){
            registrarNcurso("3-"+this.nuevoCursoP);
        },
        cantidadRespuestas(){
                    this.innerHTMLPre("numerorespuestas",'<input type="text" name="cantidaRes" placeholder="Escriba la respuesta" class="form-control">');

            },
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