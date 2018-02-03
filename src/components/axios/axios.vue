<template>
  <div class="view">

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {

    },
    mounted(){
      this.$post('/login/app/login',{account: '20030145',password: '12345678'}).then(res => {
        console.log(res);
      });
    },
    methods: {

    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">

</style>
