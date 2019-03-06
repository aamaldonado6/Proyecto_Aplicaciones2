const LoginA ={template:'<div><loginAlu></loginAlu></div>'}
const newp ={template:'<div><h3>Ingrese el nuevo mobre de usuario</h3><input type="text" class="form-control" id="nuevopr" placeholder="Nombre del nuevo usuario">\n    ' +
        '<button @click="$router.go(-1)">atras</button></div>'}
const alumno ={template:'<div><alumno></alumno></div>'}
const routes=[
    {path:'/loginA',component:LoginA},
    //{path:'/newusuario',component:newp},
    {path:'/alumno',component:alumno}
]
const router=new VueRouter({routes})
new Vue({
    el: '#app1',
    router,
    data: {
        datos: [],
        nombreUsuario: '',

    },
    methods:{

    }
});