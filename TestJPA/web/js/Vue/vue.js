const Login ={template:'<div><loginPro></loginPro></div>'}
const newp ={template:'<div><h3>Ingrese el nuevo mobre de usuario</h3><input type="text" class="form-control" id="nuevopr" placeholder="Nombre del nuevo usuario">\n    ' +
        '<button @click="$router.go(-1)">atras</button></div>'}
const pro ={template:'<div><profesor></profesor></div>'}
const routes=[
    {path:'/login',component:Login},
    {path:'/newusuario',component:newp},
    {path:'/profesor',component:pro}
]
const router=new VueRouter({routes})
new Vue({
    el: '#app',
    router,
    data: {
        datos: [],
        nombreUsuario: '',

    },
    methods:{
        verga(){
            this.holi="asd";
        }




    }
});