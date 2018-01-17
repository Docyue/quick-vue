<template>
  <div id="demo">
    this is {{data}}
    <br>
  </div>
</template>

<script>
import $ from '@/utils'

export default {
  name: 'Demo',
  computed: {
    data () {
      return this.$store.state.demoText
    }
  },
  methods: {},
  beforeMount () {
    $.setDocTitle(`Demo`)
  },
  mounted () {},
  destroyed () {}
}
</script>

<style scoped lang="scss">
  #demo{
  	background: blue;
  	color: #fff;
  }
</style>
