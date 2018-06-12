<template>
	<div class="case-list">
	<case :case-list="contentSix"></case>
	<a href="javascript:;" class="readmore" v-if="load"  @click="loadmore" >{{message}}</a>
	<p v-if="loading">加载中。。。</p>
</div>
</template>
<script >
	import {getProduct} from '../api';
	import Case from './case.vue';
	export default {
		data(){
			return{
				message:"查看更多",
				list:[],
				contentSix:[],
				count:1,
				loading:false
			}
		},
		 async created(){
           
          let {data:list}= await getProduct();
          for (let i = 0; i<list.length; i++) {
          	list[i].titlepic="http://m.shibangchina.com"+list[i].titlepic;
          }
          this.list=list;
          this.contentSix=this.list.slice(0,6);


        },
        methods:{
        	loadmore(){
        		this.message="加载中。。。";
        		setTimeout(()=>{
        			this.count++;
        			this.contentSix=this.list.slice(0,this.count*6);
        			this.message="查看更多";
        		},1000);
            	}
        },
        computed:{
        	load:function(){
        		return this.list.slice(this.count*6,this.count*6+6).length>0?true:false
        	}
        },
         components:{
    		Case
  		},
	}
</script>