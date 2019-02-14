Vue.component('loginAlu',{
    template:`
    <div><h3>Ingrese su nombre</h3>
    <input type="text" v-model="nuevoUsuarioA" class="form-control my-3" mv-placeholder="Nombre de usuario">
    <button @click="cargarAll">cargar cursos</button>
    <div class="container" id="all">
    
    </div>
    <button @click="initUsuarioA">Ingresar</button><p></p></div>
    `,
    data(){
        return{
            nuevoUsuarioA: '',

        }
    },
    methods:{
        initUsuarioA() {
            var resultadoA=[];
            var idnumresA=document.getElementsByName("optcurA");
            for(var i=0;i<idnumresA.length;i++)
            {
                if(idnumresA[i].checked)
                    resultadoA.push(idnumresA[i].value);
            }
            var arrayDataA = resultadoA;
            console.log("id-curso:!:"+arrayDataA);
            iniciarUsuarioA("5-"+this.nuevoUsuarioA+"-"+arrayDataA);
            this.goBack();
        },goBack () {
            window.history.length > 1
            this.$router.push('/alumno');
        },
        cargarAll(){
            iniciarUsuarioA("6-c");
        },
    }
})