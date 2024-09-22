<script>
export default{
    name:"Child",
    methods:{
        
    },
    props:{
        name:String,
        getName:Function
    }
}

</script>

<template>
    <div>
        <h1>Child Element {{ name }}</h1>
        <button v-on:click="getName('Sonu')">Get Name</button>
    </div>

</template>