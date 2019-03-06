<template>
    <div class="Profesor">
        <div id="outputs" ></div>
        <h1>profesor</h1>
        <b-form-input v-model="text1" id="nombrecur" type="text" placeholder="Enter your name"></b-form-input>
        <p>Value: {{ text1 }}</p>


    </div>
</template>

<script>
    export default {
        name: "Profesor",
        data () {
            return {
                text1: ''
            }
        }
    }

</script>

<style scoped>

</style>