<template>
  <!--Step 3 use the component-->
  <AppHeader Title="Employee Info Hub"/> 
  <InfoBox :employeeDetails=employeeDetails />
</template>

<script>
// Step: 1 Import the components
import AppHeader from './components/AppHeader.vue'
import InfoBox from './components/InfoBox.vue'

export default{
  name: 'App',
  // Step 2: Register the components
  components:{
    AppHeader,
    InfoBox
  },
  data(){
    return {
      employeeDetails: []
    }
  },
  methods:{
    //promoises
    async fetchEmployeeDetails(){
      const res = await fetch("https://chanduweb-node.onrender.com/api");
      const data = await res.json();
      console.log(data[0].EmployeeInfo);
      return data[0].EmployeeInfo;
    }
  },
  async created(){
      this.employeeDetails = await this.fetchEmployeeDetails();
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
