<template>
  <div class="modal">
    <div class="modal-content">
       <span class="close" @click="closeModal">&times;</span>
      <h2 id=headingcolor>Employee Details</h2>
      <br/>
      <div class="employee_grid">
        <div id="div1">
          <p>Employee Name: {{ employee.employeeName }}</p>
          <p>Employee ID: {{ employee.employeeID }}</p>
          <p>Email: {{ employee.email }}</p>
        </div>
        <div id="div2">
          <img :src=employee.image alt="Employee photo"/>
        </div>
        <div class="flex-container" id="div3">
          <h3>Department</h3>
          <h3>Role</h3>&nbsp;
          <h3>Reporting To</h3>
          <h3>Employment Status</h3>
          <h3>Salary</h3>
        </div>
        <div class="flex-container" id="div4">
          <p>{{ employee.department }}</p>
          <p>{{ employee.role }}</p>
          <p>{{ employee.reportingTo }}</p>
          <p>{{ employee.employmentStatus }}</p>
          <p>{{ employee.salary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeDetailsModal',
  props: {
    employee: Object
  },
  methods: {
   closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
  line-height:2rem;
  font-family: "Lora", serif;
  font-weight:500;
}
#headingcolor{
  color:lightblue;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.employee_grid{
  display:grid;
  grid-template-columns: auto auto;
  grid-template-rows:auto auto auto;
  grid-template-areas:
    "div1 div2"
    "div3 div3"
    "div4 div4";
  gap: 10px;
}

#div1{
  grid-area: div1;
  align-items:left;
}

#div2{
  grid-area: div2;
}

#div2 img{
  width:120px;
  height:120px;
  border: 1px solid black;
  border-radius:100px;
}

#div3{
  grid-area: div3;
}

#div4{
  grid-area: div4;
}
#div4{
  border:transparent;
    border-radius:4px;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    color: black;
    padding: 20px;
    margin:10px;
    text-align: center;
    background:lightblue;
}

.flex-container{
  display:flex;
  justify-content:space-around;
  align-items:left;
}
</style>
