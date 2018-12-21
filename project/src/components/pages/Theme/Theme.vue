<template>
  <div id="theme">
    <Header back=1 :title='title'></Header>
    <div class="top">
        <img :src="root+topimg" alt="">
    </div>
    <!-- 引入mint-ui无限加载结构，将ProductList组件嵌入进去 -->
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0">
      <ProductList :products='products'></ProductList>
    </ul>
  </div>
</template>


<script>
import Header from 'common/Header'
import ProductList from 'common/ProductList'


export default {
  name: 'Theme',
  components: {Header,ProductList},
  data (){
    return {
      root:'http://47.95.207.1:80',
      title:'零食商贩',
      topimg:'/static/img/1@theme-head.png',
      products:[],
      page:1
    }
  },
  methods:{
    loadMore() {
      this.loading = true;
      this.page+=1;
      this.loadmore(this.$route.params.themeId,this.page);
    },
    loadmore(id,page){
      this.$axios.get(`/xixi/api/getThemeById?themeid=${id}&page=${page}`)
      .then((res)=>{
        this.loading = false;
        //与前页数组拼接
        this.products=this.products.concat(res.data.products)
        
      })
    },
    initData(id,page){
      this.$axios.get(`/xixi/api/getThemeById?themeid=${id}&page=${page}`)
      .then((res)=>{
        // console.log(res);
        this.topimg=res.data.topimg;
        this.products=res.data.products;
        this.loading = false;
      })
    }
  },
  created(){
      // console.log(this);
      // console.log(this.$route);
    //通过Home页的路由传参，用 this.$route.params 来接收标题name 
      this.title=this.$route.params.name;
      this.initData(this.$route.params.themeId,1);
  }
  
}
</script>

<style lang='less' scoped>
@import url('../../../style/main.less');

.top{
    .w(375);
    .m_t(45);
    img{
        .w(375);
    }
}
</style>
