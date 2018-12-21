<template>
  <div id="tabbar">
      <ul>
        <router-link 
          active-class='sel'
          v-for='(item,index) in navlist'
          :key='index'
          :to='item.path'
          tag='li'>

          {{item.title}}
        </router-link>
      </ul>
  </div>
</template>


<script>
export default {
  name: 'TabBar',
  data (){
    return {
      navlist:[ {title:'Home',path:'/home',icon:''},
                {title:'Categray',path:'/categray',icon:''},
                {title:'Shopcar',path:'/shopcar',icon:''},
                {title:'My',path:'/my',icon:''}
              ]
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../style/main.less');

#tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    ul{
      .w(375);
      display: flex;
      li{
        background: @tabBg;
        color: @tabDefaultColor;
        width: 25%;
        .h(80);
        .lh(80);
        text-align: center;
        .fs(16);
      }
      .sel{
        color: @tabSelColor;
      }
    }
}

</style>
