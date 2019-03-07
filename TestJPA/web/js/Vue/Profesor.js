Vue.component('profesor', {
    template: `
    <div>
      <div id="page-container">
        <div id="header-container" style="background-color: #8cb4d2;padding-top: 3em">
          <p id="nombrepro" class="text-center" style="color: cornsilk;padding-bottom: 1em"></p>
          <a class="btn btn-light">Cuestionarios</a>
        </div>
        <br>
        <hr>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a href="#" class="btn btn-primary" @click="abCursos">CURSOS</a>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div>
          <div class="mt-2" v-for="b of abCruArr">
            {{pregunta}} <input type="text" v-model="nuevCur"> <a href="#" class="btn btn-primary" @click="registraCur">Crear Curso</a>
            <div>
            <h3>Seleccione el curso</h3>
            <select class="alert alert-warning" role="alert" v-model="selCur">
              <option v-for="g of curTT">
                {{g.idcurso}}-{{g.nombre_curso}}
              </option>
            </select>
            </div>
          </div>
        </div>
      </div>
      <div id="cuerpo" style="padding-top: 7em" class="card text-center">
        <div class="preg" style="">
          <div class="col-md-8 mx-auto">
            <div class="card">
              <div class="card-body">
                <div class="mt-4" v-for="item of preguntasP">
                  <h3>Llene los datos para registrar la pregunta</h3>
                  <div class="alert alert-primary" role="alert">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <p>Pregunta opcion multiple.Nro: {{contP}}</p>
                        <input class="inputPMO" type="text" v-model="nomPreg">
                      </div>
                      <div>
                        <a href="#" class="btn btn-primary" @click="agregarMultiRes">Agregar respuesta</a>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2" v-for="a of respuestasP">
                    <div class="alert alert-danger" role="alert">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <p>Ingrese la respuesta <input class="inputRMO" type="text"></p>
                        </div>
                        <div>
                          <p>Respuesta correcta<input class="radioMO" type="radio"></p>
                        </div>
                      </div>
                    </div>
    
                  </div>
                  <a href="#" class="btn btn-success" @click="GuardarTT">Guardar Pregunta</a>
                </div>
                <div class="mt-4" v-for="itemVF of preguntasPVF">
                  <h3>Llene los datos para registrar la pregunta</h3>
                  <div class="alert alert-primary" role="alert">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <p>Pregunta Verdadero o Falso</p>
                        <input class="inputPMO" type="text" v-model="nomPreg">
                      </div>
                      <div>
                          <p>Verdadero<input class="radioMO" type="radio"></p>
                          <p>Falso<input class="" type="radio"></p>
                        </div>
                    </div>
                  </div>
                    <a href="#" class="btn btn-success" @click="GuardarVF">Guardar Pregunta</a>
                </div>
                <div class="mt-4" v-for="itemVF of preguntasPRC">
                  <h3>Llene los datos para registrar la pregunta</h3>
                  <div class="alert alert-primary" role="alert">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <p>Pregunta de Respuesta corta</p>
                        <input class="inputPMO" type="text" v-model="nomPreg">
                      </div>
                    </div>
                  </div>
                    <a href="#" class="btn btn-success" @click="GuardarRC">Guardar Pregunta</a>
                </div>
              </div>
            </div>
          </div>
    
        </div>
        <hr />
        <hr />
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
                <a href="#" class="btn btn-primary" @click="agregarVF">Verdadero/Falso</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-file-signature"></i>
                <h5 class="card-title">Opcion de pregunta</h5>
                <a href="#" class="btn btn-primary" @click="agregarRC">Respuesta corta</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
    data() {
        return {
            selCur:'',
            nomPreg:'',
            nuevoCursoP: '',
            nuevaPregunta: '',
            respuestasP: [],
            preguntasP: [],
            preguntasPVF: [],
            preguntasPRC: [],
            curTT: [],
            abCruArr:[],
            pregunta: 'Ingrese el nombre del curso',
            nuevCur: '',
            nuevaRes: '',
            contP: 0

        }
    },
    methods: {
        cargarCurso() {
            var nom = document.getElementById("nopro");
            var cargarc = new Object();
            cargarc.cod = 3;
            cargarc.us = nom.innerText;
            doSend(cargarc);
        },
        registraCur(){
            var regC=new Object();
            regC.cod=4;
            regC.curso=this.nuevCur;
            regC.idp=idpro;
            doSend(regC);
            this.abCursos;

        },
        agregarMultiRes() {
            this.respuestasP.push({});
        },
        agregarRC() {
            this.preguntasPRC.push({});
        },
        agregarVF(){this.preguntasPVF.push({});},
        abCursos(){
            this.abCruArr=[];
            this.abCruArr.push({});
            this.cargarCurso();
            this.curTT=cursos;
        },
        agregarMulti() {
            this.contP++;
            this.limpiar();
            this.preguntasP.push({});
            this.nomPreg="";
        },
        GuardarTT() {
            //datosMultiopcion
            var classR = document.getElementsByClassName("inputRMO");
            var classCh =document.getElementsByClassName("radioMO");
            var guardarD = new Object();
            var separadorC = "-";
            var selCurTT= this.selCur.split(separadorC);
            guardarD.idc=selCurTT[0];
            guardarD.pregunta = this.nomPreg;
            guardarD.cod = 2;
            guardarD.codG="mo";
            for (var i = 0; i < classR.length; i++) {
                    guardarD.respuesta=classR[i].value;
                    guardarD.check=classCh[i].checked;
                    doSend(guardarD);

            }
            this.limpiar();

        },
        GuardarVF() {
            //datosVerdaderoFalso
            var classCh =document.getElementsByClassName("radioMO");
            var guardarD = new Object();
            var separadorC = "-";
            var selCurTT= this.selCur.split(separadorC);
            guardarD.idc=selCurTT[0];
            guardarD.pregunta = this.nomPreg;
            guardarD.cod = 2;
            guardarD.codG="vf";
            guardarD.respuesta=this.nomPreg;
            guardarD.check=classCh[0].checked;
            console.log(guardarD);
            doSend(guardarD);
            this.limpiar();

        },
        GuardarRC() {
            //datosVerdaderoFalso
            var guardarD = new Object();
            var separadorC = "-";
            var selCurTT= this.selCur.split(separadorC);
            guardarD.idc=selCurTT[0];
            guardarD.pregunta = this.nomPreg;
            guardarD.cod = 2;
            guardarD.codG="rc";
            guardarD.respuesta="";
            guardarD.check=true;
            console.log(guardarD);
            doSend(guardarD);
            this.limpiar();

        },
        limpiar() {
            this.nomPreg='';
            this.preguntasP = [];
            this.respuestasP = [];
            this.respuestasPVF= [];
            this.preguntasPVF= [];

        },
        agregarDatos() {
            cargarCursos();
        },
        crearNC() {
            registrarNcurso("3-" + this.nuevoCursoP);
        },
        cantidadRespuestas() {
            this.innerHTMLPre("numerorespuestas", '<input type="text" name="cantidaRes" placeholder="Escriba la respuesta" class="form-control">');

        },
        innerHTMLPre(id, result) {
            return document.getElementById(id).innerHTML += result;
        },
        enviarRespuestasP() {
            var resultado = [];
            var idnumres = document.getElementsByName("optcur");
            for (var i = 0; i < idnumres.length; i++) {
                if (idnumres[i].checked)
                    resultado.push(idnumres[i].value);
            }
            var arrayData = resultado;
            console.log("id-curso:!:" + arrayData);
            registrarPreguntasResp(this.nuevaPregunta, arrayData);


        }

    }
})