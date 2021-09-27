<template>
<div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header"><h2>Router Basic - 01</h2></div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                  <!--   <router-link to="/about" class="list-group-item">About</router-link>
                    <router-link to="/home" class="list-group-item">Home</router-link>
                    <router-link to="/user" class="list-group-item">user</router-link> -->
                    <a href="javascript:;" @click="toAbout" class="list-group-item">About</a>
                    <a href="javascript:;" @click="toHome" class="list-group-item">Home</a>
                    <a href="javascript:;" @click="toUser" class="list-group-item">User</a>
                </div>
            </div>
            <div class="col-xs-6">
                <div  class="col-xs-6">
                    <div  class="panel">
                        <div  class="panel-body">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
 
</template>

<script>

export default{
  name:"App",
  methods:{
      toAbout(){
          this.$router.push("/about")
      },
      toHome(){
          this.$router.push("/home")
      },
      toUser(){
          this.$router.push("/user")
      }
  }
 
}
</script>

<style>

</style>
