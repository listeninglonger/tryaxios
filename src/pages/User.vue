<template>
  <div>
    <input type="text" placeholder="请输入要查询的id" v-model.number="userid">
    <router-link :to="`/user/${userid}`" class="btn">click</router-link>
   <router-view></router-view>
  </div>
</template>

<script>

export default {

  data(){
      return {
          userid:""
      }
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.btn{
  width:50px;
  height:30px;
  border-radius: 20px;
  background: rgb(204, 204, 204);
  text-align: center;
  }
</style>