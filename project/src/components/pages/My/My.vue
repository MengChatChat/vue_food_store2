<template>
  <div id="my">
      {{msg}}
      <TabBar></TabBar>
  </div>
</template>


<script>
import TabBar from '@/components/common/TabBar'

export default {
  name: 'My',
  components:{TabBar},
  data (){
    return {
      msg : 'My页面'
    }
  }
}
</script>

<style lang='less' scoped>

</style>


