<template>
  <div id="header">
    <div class="btn" v-if='back' @click='goBack'>《</div>
     <div class="title">{{title}}</div> 
  </div>
</template>


<script>
export default {
  name: 'Header',
  data (){
    return {
      msg : '零食商贩'
    }
  },
  props:['title','back'],//组件传参，抛发title
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang='less' scoped>
@import url('../../style/main.less');
#header{
  .w(375);
  .h(45);
  .lh(45);
  .fs(17);
  color: #fff;
  text-align: center;
  background: @headBg;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  .btn{
    float: left;
  }
}

</style>
