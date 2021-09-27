<template>
  <div msg="atguigu">
    <h2>home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li><router-link to="/home/news" class="">News</router-link></li>
        <li>
          <router-link to="/home/message" class="router-link-exact-active active">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style scoped>
*{
    text-align: center;
}
</style>