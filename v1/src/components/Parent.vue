<script>
import Child from './Child.vue'
export default{
    name:"Parent",
    components:{
        Child
    },
    data(){
        return{
            name:null
        }
    },
    methods:{
        getName(fname){
            this.name=fname
        }
    }
}

</script>

<template>
    <div>
        <h1>Parnet Element {{ name }} </h1>
        <Child name="Arvind" :getName="getName"></Child>
    </div>

</template>