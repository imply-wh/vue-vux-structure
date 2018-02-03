<template>
  <div id="app">
    <router-view></router-view>
    <toast v-model="$store.state.ToastOK" :time="2000">{{$store.state.OKText}}</toast>
    <toast v-model="$store.state.ToastERR" type="warn" :time="2000">{{$store.state.ERRText}}</toast>
    <loading :show="$store.state.LoadShow" :text="'加载中...'"></loading>
  </div>
</template>

<script>
  import Toast from 'vux/src/components/toast/index.vue'
  import Loading from 'vux/src/components/loading/index.vue'

export default {
  name: 'App',
  components: {
    Toast,
    Loading
  },
  mounted() {
    this.$store.state.ToastOK = true;
    this.$store.state.OKText = 'true';
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
