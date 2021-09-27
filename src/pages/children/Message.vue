<template>
  <div>
      <img src="../../assets/094.gif" alt="" v-if="!titles.length">
        <ul v-else>
         <!--  <li>
            <a href="#/home/message/messageDetail/1" class="">
              message01
              <input type="button" value="push" />
              <input type="button" value="replace"
            /></a>
          </li> -->
          <li v-for="item in titles" :key="item.id">
            <a href="javascript:;" @click="toNewsDetail(item.id)">{{item.msg}}</a>
            
          </li>
        </ul>
        <router-view></router-view>
          
      </div>
</template>

<script>
  const titles = [
    {id:0,msg:"东三省限电"},
    {id:1,msg: "周冬雨过生日"},
    {id:2,msg: "尚硅谷上市了"},
  ]
export default {
  components: {},
  data() {
    return {
      titles:{}
    };
  },
  computed: {},
  methods: {
    toNewsDetail(newsid){
            //  console.log(newsid);
       this.$router.push(`/home/message/${newsid}`)
    }
  },
  mounted() {
  setTimeout(()=>{
    this.titles = titles
  },1000)
  }
};
</script>
<style scoped>
</style>