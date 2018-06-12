<template>
	<div class="row">
		<div class="col-xs-6" v-for="(content,key,index) in caseList">
                <a href="{/video/animation/2018-05-30/26.html}">
                    <div class="bcgrey"></div>     
                        <img :src="content.titlepic" class="width-fill">
            <span class="totaltime">{{content.video_time}}</span><span class="play"></span>
                    </a>
                <a href="/video/animation/2018-05-30/26.html" class="title"><span>{{content.title}}</span></a>
 		</div>
	</div>
</template>
<script >
	export default {

		data(){
			return{
				message:"product"
			}
		},
		props:
			['caseList']
	}
</script>