


/* props  ==>
 	titleData:{
		title:'清远旅游业务统计系统',
		bgcolor:'transparent',
		showArrow:false,
		smallTitle:false
	}
 
 */


<template>
	<div class="box" :style="{background:titleData.bgcolor}">
    	<p class="titles" v-if="titleData.smallTitle">{{titleData.title}}</p>
    	<p class="smallTitle" v-else>{{titleData.title}}</p>
    	<span class="back"></span>
    	<span class="exact" v-if="titleData.showArrow"></span>
	</div>
</template>

<script>
	export default{
		name:'titles',
		data(){
			return{
				
			}
		},
		props:['titleData'],
	}
</script>

<style scoped lang="less">
	.box{
		position: relative;
		text-align: center;
		.titles{
			font-size: 0.44rem;
			color: #fff;
			text-shadow: 8px 4px rgba(0,0,0,0.1);
			width: 4.4rem;
			height: 0.6rem;
			margin: 0 0 0 1.56rem;
			padding-top: 0.56rem;
		}
		
		.smallTitle{
			color: #fff;
			text-shadow: 8px 4px rgba(0,0,0,0.1);
			width: 4.4rem;
			height: 0.6rem;
			margin: 0 0 0 1.56rem;
			padding-top: 0.56rem;
			font-size: 0.34rem !important;
		}
		.back{
			display: block;
			width: 0.34rem;
			height: 0.34rem;
			position: absolute;
			top: 0.72rem;
			left: 0.32rem;
			background: url(../../assets/images/title/back1.png) no-repeat 0.02rem;
			background-size: cover;
		}
		.exact{
			display: block;
			width: 0.34rem;
			height: 0.34rem;
			position: absolute;
			top: 0.72rem;
			right: 0.32rem;
			background: url(../../assets/images/title/exact.png) no-repeat 0.02rem;
			background-size: cover;
		}
	}
	
   
	
	
	
</style>