<template>
  <div class="wrapper">
     <img src="../../assets/101.gif" alt="" v-if="!Object.keys(newInfo).length">
      <div v-else>
        <p>编号：{{newInfo.newsid}}</p>
      <p>标题：{{newInfo.title}}</p>
      <p>内容：{{newInfo.content}}</p>
      </div>
     
  </div>
</template>

<script>
const news = [
     {newsid:0,title:"东三省限电",content:"迪迦走了 带走了光"},
    {newsid:1,title: "周冬雨过生日",content:"尚硅谷知名老师......"},
    {newsid:2,title: "尚硅谷上市了",content: "尚硅谷每个老师分了100w"},
]
export default {
    props:["newsid"],
  components: {},
  data() {
    return {
        newInfo:{}
    };
  },
  computed: {},
  methods: {},
  mounted() {
      // console.log(this.newsid);
    
  },
  watch:{
      newsid:{
          handler(){
             this.newInfo = {}
             setTimeout(() => {
                  this.newInfo = news.filter(item=>item.newsid===+this.newsid)[0] 
             }, 2000);
          },
          immediate:true
      }
  }
};
</script>
<style scoped>
</style>