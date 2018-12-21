<template>
  <div id="home">
      <Header title='零食商贩'></Header>
      <Banner class="banner" :list='banners'></Banner>
      <div class="theme_contain">
        <div class='title'>精选主题</div>
        <div class='box'>
          <div :class="index==2?'big':'small'" 
                v-for='(item,index) in themes' 
                :key='index'
                @click='goTheme(item)'>
             <img :src="rootpath+item.imgPath" alt="">
          </div>
			  </div>
      </div>
      <ProductList class='new_contain' :products='products'></ProductList>
      <TabBar></TabBar>
  </div>
</template>


<script>
import Banner from './Banner'
import Header from '../../common/Header'
import TabBar from '@/components/common/TabBar'//@代表src;路劲简化可在build文件里配置
import ProductList from 'common/ProductList'

export default {
  name: 'Home',
  components:{Header,TabBar,Banner,ProductList},
  data (){
    return {
      rootpath:'http://47.95.207.1:80',
      themes:[],
      banners:[],
      products:[]
    }
  },
  methods:{
    goTheme(item){
      //themeId 区分三个主题组件页面，传到路由后的动态路由后缀 改变路由hash   
      //name 标题，需要传递的内容
      this.$router.push({name:'theme',params:{themeId:item._id,name:item.name}})
    },
    initData(){
      let url='/xixi/api/getHome';
      this.$axios.get(url)
      .then((res)=>{
        // console.log(res);
        this.themes=res.data.themes;
        this.banners=res.data.banners;
        this.products=res.data.products;
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
  created(){
    this.initData()
  }
}
</script>

<style lang='less' scoped>
@import url('../../../style/main.less');

#home{
	.banner{
		.m_t(45);
  }
  .new_contain{
    .p_b(80);
  }
	.theme_contain{
		.title{
			.fs(18);
			color: @tabSelColor;
			text-align:center;
			.lh(25);
			.h(25);
			padding: 5px 0px;
		}
		.box{
			display: flex;
			flex-wrap: wrap;
			.small{
        margin-right: 3px;
				width: 49.2%;
			}
			.big{
        width: 100%;
        padding-top: 3px;
			}
			img{
				width: 100%;
			}
		}
	}
}

</style>


