Vue.component('titulo',{
    template:`
    <div>
    <h1>numero {{numero}}</h1>
    <hijo1></hijo1>
</div>
    `,
    computed:{
        ...Vuex.mapState(['numero'])

    }
});
Vue.component('hijo1',{
    template:`
<div>
    <button @click="aumentar">+</button>
    <button @click="disminuir(2)">-</button>
    <button @click="obtenerCursos">obtener</button>
    <h1>numero {{numero}}</h1>
    <ul v-for="item of cursos">
        <li>{{item.nombre}}</li>
    </ul>
</div>
    `,
    computed:{
        ...Vuex.mapState(['numero'])

    },
    methods:{
        ...Vuex.mapMutations(['aumentar','disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    }
});
const store = new Vuex.Store({
    state: {
        numero: 10,
        cursos: []
    },
    mutations:{
        aumentar(state){
            state.numero ++
        },
        disminuir(state,n){
            state.numero -=n
        },
        llenarcursos(state,cursosAccion){
            state.cursos = cursosAccion
        }
    },
    actions:{
        obtenerCursos: async function ({commit}){
            const data = await fetch('cursos.json');
            const cursos= await data.json();
            commit('llenarcursos',cursos);
        }

    }

});
