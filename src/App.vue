<template>
  <div id="app">
    <router-view style="height: 100%;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
body {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fbf9fe;
}
#app {
  height: 100%;
}
</style>
