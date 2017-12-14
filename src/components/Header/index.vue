<template>
  <div id="header">
    <div id="processBar"></div>
  </div>
</template>

<script>
export default {
  name: 'header',
  computed: {}
}
</script>
<style lang="sass">
@import "../../assets/style/reset.scss"
</style>
<style lang="scss">
  #header {
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

  	#processBar {
  		background: #2196F3;
  		height: 2px;
  		position: fixed;
  		z-index: 1000;
  		left: 0;
  		width: 0;
  	}
  }

</style>
