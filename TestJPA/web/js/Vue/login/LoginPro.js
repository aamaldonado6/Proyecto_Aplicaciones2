Vue.component('loginPro',{
    template:`
    <div><h3>Ingrese su usuario</h3>
    <input type="text" v-model="nuevoUsuarioP" class="form-control my-3" mv-placeholder="Nombre de usuario">
    <button @click="initUsuario">Ingresar</button><p></p></div>
    `,
    data(){
        return{
            nuevoUsuarioP: '',
        }
    },
    methods:{
        initUsuario() {
            var usuario=new Object();

            usuario.cod=1;
            usuario.us=this.nuevoUsuarioP;
           iniciarUsuario(usuario);
           this.goBack();
        },goBack () {
            window.history.length > 1
                this.$router.push('/profesor');
        }
}
})