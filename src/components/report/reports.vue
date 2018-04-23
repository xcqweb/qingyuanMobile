<template>
	<div class="box">
		<p class="title">{{dataList.title}}</p>
		<p class="type">{{dataList.type}}</p>
		<router-link to='/golden' tag='p' class="report">点此上报</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			dataList:Object
		}
	}
</script>

<style scoped lang="less">
.box{
	width: 6.86rem;
	height: 1.96rem;
	border: 0.02rem solid #1CB394;
	border-radius: 0.18rem;
	margin-top: 0.32rem;
	margin-left: 0.32rem;
	text-align: center;
	.title{
		font-size: 0.32rem;
		color: #1CB394;
		height: 0.44rem;
		line-height: 0.44rem;
		margin-top: 0.3rem;
	}
	.type{
		font-size: 0.24rem;
		margin-top: 0.14rem;
		height: 0.34rem;
	}
	.report{
		font-size: 0.16rem;
		color: #1CB394;
		margin-top: 0.16rem;
	}
	.report:active{
		color: #f00;
	}
}
	
</style>