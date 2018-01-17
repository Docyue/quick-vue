<template>
  <div id="navbar">
  </div>
</template>

<script>
  export default {
    name: 'nav'
  }
</script>
<style lang="sass">
@import "../../assets/style/reset.scss"
</style>
<style lang="scss" scoped>
  #navbar {
    background: #444;
    height: 0;
    line-height: 0;

    a {
      color: #fff;
      background: #666;
      display: inline-block;
      height: 24px;
      margin-right: 24px;
      border-radius: 4px;
      line-height: 24px;
      margin-top: 10px;
      padding: 0px 10px;
      vertical-align: text-bottom;
    }
  }

</style>
