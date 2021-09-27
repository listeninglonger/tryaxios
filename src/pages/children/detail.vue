<template>
  <div>
      
      <h4>详情</h4>
        <p>编号：{{user.userid}}</p>
        <p>姓名：{{user.name}}</p>
  </div>
</template>

<script>
const users =[
    {userid:0,name:"aaa"},
    {userid:1,name:"bbb"},
    {userid:2,name:"ccc"}
]
export default {
  components: {},
  props:["userid","name"],
  data() {
    return {
        user:{}
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  watch:{
      /* $route:{
          handler(){
              //console.log(this.$route.params.userid)
              this.user = users.filter(item=>+item.userid===+this.userid)[0]
          },
          immediate:true,
          deep:true
      } */
      userid:{
          handler(newID){
              //console.log(this.$route.params.userid)
              this.user = users.filter(item=>+item.userid===+newID)[0]
          },
          immediate:true,
          deep:true
      }

  },
  mounted(){
    // console.log(this.userid,this.name)
  }
};
</script>
<style scoped>
</style>