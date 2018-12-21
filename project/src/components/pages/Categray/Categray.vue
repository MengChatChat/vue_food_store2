<template>
  <div id="categray">
      {{msg}}
      <TabBar></TabBar>
  </div>
</template>


<script>
import TabBar from '@/components/common/TabBar'

export default {
  name: 'Categray',
  components:{TabBar},
  data (){
    return {
      msg : 'Categray 分类页面'
    }
  }
}
</script>

<style lang='less' scoped>

</style>


