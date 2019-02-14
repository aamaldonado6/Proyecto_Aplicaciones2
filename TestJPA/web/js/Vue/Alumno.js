Vue.component('hijo',{
    template: `
    <div>
    <h4>componen hi {{numero}}</h4>
    <h4>nombre: {{nombre}}</h4>
</div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'alva'
        }
    },
    mounted(){
      this.$emit('nombreHijo',this.nombre);
    },
});