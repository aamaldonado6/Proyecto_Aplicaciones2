<template>
    <div class="estudiante">
        <form>
        <b-row>
            <b-col md="3">
                <b-form-input v-model="text1"type="text" placeholder="Enter your name"></b-form-input>
                <p>Value: {{ text1 }}</p>
            </b-col>
            <b-col md="3">
                <b-form-select v-model="select" :options="opciones" class="mb-3"></b-form-select>
                <p>seleccion: {{select}}</p>
            </b-col>
            <b-col md="3">
                <b-form-radio-group id="radio" v-model="selectr" :options="radio" name="radioOpenions">
                </b-form-radio-group>
                <p>radio: {{selectr}}</p>
            </b-col>
            <b-col md="3">
                <b-form-checkbox-group v-model="check" :options="radio">

                </b-form-checkbox-group>
                <p>checl::{{check}}</p>

            </b-col>
        </b-row>
        </form>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                text1: '',
                select: null,
                selectr: null,
                check: [],
                opciones: [
                    {value: null, text: 'selecciones'},
                    {value: 'oer', text: 'ASD'},
                    {value: 'gato', text: 'ssss'},
                    {value: 'oso', text: 'rrr'}
                    ],
                radio: [

                    {value: 'oer', text: 'ASD'},
                    {value: 'gato', text: 'ssss'},
                    {value: 'oso', text: 'rrr'}
                ]
            }
        }
    }
</script>

<!-- form-input-1.vue -->
