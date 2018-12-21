<template>
  <div id="shopcar">
      {{msg}}
      <TabBar></TabBar>
  </div>
</template>


<script>
import TabBar from '@/components/common/TabBar'

export default {
  name: 'Shopcar',
  components:{TabBar},
  data (){
    return {
      msg : ' 购物车页面'
    }
  }
}
</script>

<style lang='less' scoped>

</style>


