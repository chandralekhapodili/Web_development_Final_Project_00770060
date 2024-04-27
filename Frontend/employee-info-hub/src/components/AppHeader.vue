<template>
    <div id=headercontainer>
        <h1 id=titlename> {{Title}} </h1>
    </div>
</template>

<script>
export default{ // Exporting Default Object
    name:'AppHeader',
    props:{ 
        Title:String,
    }
}
</script>

<style scoped>

#headercontainer{
    text-align: center;
    background-color:#72A0C1;
    opacity:0.8;
    padding: 10px;
    font-family: "Lora", serif;
    font-weight:500;
}

#titlename{
    color:white;
    font-style:italic;
}
</style>