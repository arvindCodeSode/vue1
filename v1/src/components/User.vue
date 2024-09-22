<script>
export default {
    name:'User',
    data(){
        return{
            val: 10,
            getName:function(name){
                return name
            },
            name:'Arvind',
            fname:null,
            lname:null,
            lang:[],
            show:true
        }
    },
    methods:{
        getFullName(fname,lname){
            return this.name+' '+lname
        },
        getFullName1(){
            console.log(this.lang);
            alert(this.fname+' '+this.lname)
        }
    }
}
</script>
<template>

    <div>
        <h1>User component a {{ 10*10-10+val }}</h1>
        <h3>Name {{ getName('Sonu')  }}</h3>
        <h3>Full Name {{ getFullName('Arvind','Parkash')  }}</h3>
        <form action="">
            <input type="text" v-model="fname" placeholder="Enter Name" />
            <input type="text" v-model="lname" placeholder="Enter Name" />
            <br>
            <input type="checkbox" v-model="lang" value="javascript">javascript<br />
            <input type="checkbox" v-model="lang" value="php">php<br />
            <input type="checkbox" v-model="lang" value="nodejs">Node<br />
        </form>
        <button v-on:click="getFullName1('Arvind','Parkash')">Get Name</button>
        <button v-on:click="show = !show">Show And Hide</button>
        <!-- <div v-show="show">Show me|Hide me</div> -->
        <div v-if="show">Show me</div>
        <div v-else>Hide me</div>
        <br><br><br>
        <ul  v-for="item in lang" :key=item>
            <li>
                {{ item }}
            </li>
        </ul>
    </div>
</template>