<template>
  <div id="err">
      当前页面不存在
      <!--方法一： <router-link to='/'>点击跳转回首页</router-link> -->
      <span @click='goHome'>点击跳转回首页</span>
  </div>
</template>


<script>
export default {
  name: 'Err',
  data (){
    return {
      msg : 'Err 组件'
    }
  },
  methods:{
      goHome(){
          //点击1.5秒后跳转
          setTimeout(()=>{
            this.$router.push('/home')
          },1500);
         
      }
  }
}
</script>

<style lang='less' scoped>
span{
    color: skyblue;
}

</style>
