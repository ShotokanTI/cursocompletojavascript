<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário:<strong>{{ inverterNome() }}</strong></p>
    </div>
</template>

<script>
export default {
    props:{
       nome:{
           type:String,
           //default:'Anonimo'
           //required:true,
           default:function(){
               return Array(10).fill(0).join(',')
           }
       }
    },
    data(){
        return{
            nomeAlternativo:''
        }
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
