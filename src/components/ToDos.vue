<template>
  <div class="container">
    <div clas="list">
      <form @submit.prevent="addTask">
        <input type="text" placeholder="Add task..." v-model="task" v-validate="'min:5'" name="skill">
        
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
        </transition>
        <br>{{ task }}
      </form>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in tasks" :key="index">
            {{ data.task }}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>

      <p> You have {{tasks.length}} tasks </p>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Tasks',
  data() {
    return {
      task: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      this.$validator.validateAll().then((result) => {
        if(result) {
          this.tasks.push({task: this.task});
          this.task = ""
        } else {}
      }) 
    },
    remove(id) {
      this.tasks.splice(id, 1);
    }
  }
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css";
  
  .list {
    background: #fff;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: rgb(110, 84, 204);
  }

  .alert {
    background: #eb5c68;
    color: white;
    font-weight: bold;
    font-size: 10px;
    display: inline-block;
    padding: 5px;
    margin-top: -30px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid rgb(89, 54, 212);
    color: #3E5252;
  }

  ul li i {
    float: right;
    cursor: pointer;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px rgb(89, 54, 212);
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);      
    }
  }
  </style>
