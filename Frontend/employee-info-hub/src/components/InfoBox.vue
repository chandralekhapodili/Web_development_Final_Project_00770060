<template>
    <div class="flex-container">
        <h2 id="heading1">Employee Name </h2>
        <h2 id="heading2">Employee ID </h2>
        <h2 id="heading3">Email </h2>
        <img id="logo" src="https://img.icons8.com/?size=160&id=113856&format=png" alt="Company Logo"/>
    </div>
    <div v-for="employee of employeeDetails" :key="employee.id" >
       <SingleEmployee :employee=employee />
    </div>
</template>
<script>
import SingleEmployee from './SingleEmployee.vue'
export default {
    name: 'InfoBox',
    props:{
        employeeDetails: Array
    },
    components:{
        SingleEmployee
    } 
}
</script>
<style scoped>
    .flex-container{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-family: "Lora", serif;
        font-weight:500;
        width:100%;
    }
    #heading1{
        width:30%;
        padding-left:50px;
    }
    #heading2{
        width:30%;
    }
    #heading3{
        width:20%
    }
    #logo {
        width:120px;
        height:100px;
        padding-right:20px;
    }
</style>