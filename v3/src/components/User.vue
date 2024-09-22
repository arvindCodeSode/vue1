<script>
import { useRoute } from 'vue-router';
export default {
    name:"Home",
    data(){
        return {
            name:null
        }
    },
    mounted(){
        let routes = new useRoute();
        this.name = routes.params.name;
        console.log(routes.params) 
    }
}

</script>
<template>

    <h1>Hello World {{ name }}</h1>
</template>