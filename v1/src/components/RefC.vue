<script>
export default
{
    name:"RefC",
    methods:{
        getRef(){
            console.log(this.$refs.h1);
        }
    }
}

</script>

<template>

    <div>
        <h2 ref="h1">This is ref exmple</h2>
    <button @click="getRef">GET REF</button>
    </div>
</template>