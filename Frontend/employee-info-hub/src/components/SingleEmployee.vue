<template>
  <div  id="singleEmployeediv">
    <p id="name">{{ employee.employeeName }}</p>
    <p id="id">{{ employee.employeeID }}</p>
    <p id="email">{{ employee.email }}</p>
    <button @click="showDetails" class="details-btn">Show Details</button> 
    <EmployeeDetailsModal :employee=employee v-if="showModal" @close="closeModal" />
  </div>
</template>
<script>
import EmployeeDetailsModal from './EmployeeDetailsModal.vue';
export default {
  name: 'SingleEmployee',
  props: {
    employee: Object
  },
  components: {
    EmployeeDetailsModal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    showDetails() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>
<style scoped>
#singleEmployeediv{
    border:transparent;
    border-radius:4px;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    color: black;
    padding: 20px;
    margin: 10px;
    text-align: center;
    font-family: "Lora", serif;
    font-weight:500;
    width:95%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
#name{
  width:20%
}

#id{
  width:20%
}
#email{
  width:20%
}
.details-btn{
  border: transparent;
  border-radius:5px;
  padding:10px;
  cursor:pointer;
  background-color:#72A0C1;
  opacity:0.8;
  color:white;
  
}
</style>