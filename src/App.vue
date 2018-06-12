<template>
  <div id="container">
   <swiper></swiper>
   <div class="video-class">
     <div class="video-nav">
        <h2>视频分类</h2>
        <ul class="video-cases">
            <li><router-link to="/">工厂装配</router-link></li>
            <li><router-link to="/">办公环境</router-link></li>
            <li><router-link to="/">企业文化</router-link></li>
            <li><router-link to="/">行业会议</router-link></li>
        </ul>
        <div class="icon-choose">

        </div>  

    </div>
     <tab></tab>
     <router-view></router-view>
   </div>
  </div>
</template>

<script>
import tab from './components/tab.vue';
import swiper from './components/swiper.vue';
import css from "./css/video.css"
export default {
  name: 'container',
  data(){
    return{
            list:[
    {},
    {},

    ],
    title:'',
    }
  },
  components:{
    swiper,tab
  }
}
</script>

<style>

</style>
