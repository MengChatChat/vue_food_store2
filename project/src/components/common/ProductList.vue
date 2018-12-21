<template>
  <div id="product">
    <div class="new_contain">
        <div class="box">
            <div class="item" v-for='(item,index) in products' :key='index'>
                <img :src="root+item.imgPath" alt="">
                <span>{{item.name}}</span>
                <span>{{item.price}}</span>
            </div>
        </div>   
    </div>
  </div>
</template>


<script>
export default {
  name: 'ProductList',
  data (){
    return {
      root:'http://47.95.207.1:80',
    }
  },
  props:['products']
}
</script>

<style lang="less" scoped>
@import url('../../style/main.less');

  .box{
    width: 95%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item{
      .w(175);
      .h(175);
      .m_t(5);
      display: flex;
      flex-direction: column;
      align-items: center;
      background: @itemBg;
      border-radius: 7px;
      img{
           width: 70%;
         }
      .fs(18);
    }
  }


</style>
