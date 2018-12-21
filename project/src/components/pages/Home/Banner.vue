<template>
  <div id="banner">
    <!-- 引入swiper自定义架构 -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
      
            <div class="swiper-slide" v-for='(item,index) in banners' :key='index'>
              <img :src="root+item.imagePath" alt="">
            </div>

        </div>
    </div>
  </div>
</template>


<script>
//引入swiper第三方插件
import Vue from 'vue'
import Swiper from 'swiper'

export default {
  name: 'Banner',
  data (){
    return {
     root:'http://47.95.207.1:80',
     banners:[]
    }
  },
  props:['list'],
  methods:{
      initswiper(){ 
        this.banners=this.list;
        //nextTick修改完成后，才调用回调函数
        Vue.nextTick(()=>{
            //引入swiper自定义动画函数
            this.mySwiper = new Swiper ('.swiper-container', {
                loop: true,// 循环模式选项      
            }) 
        })         
      }
  },
  watch:{
    list(){
      this.initswiper();
    }
  },
  destroyed(){
    //当页面切换时或刷新页面时，mySwiper会出现多次实例化，所以在组件移除时，清空
    // delete this.mySwiper;
    this.mySwiper==null;
  }
}
</script>

<style lang='less' scoped>
//引入swiper轮播图插件
@import url('../../../../node_modules/swiper/dist/css/swiper.css');
@import url('../../../style/main.less');
#banner{
  .swiper-container{
    .w(375);
    .h(160);
    img{
      width: 100%;
      height: 100%;
    }
  }

}

</style>
