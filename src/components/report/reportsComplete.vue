<template>
	<div class="box10" v-if="datas.status">
		{{datas.title}}
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['datas']
	}
</script>

<style scoped lang="less">
.box10{
	width: 6.86rem;
	height: 1.96rem;
	border: 0.03rem solid #1CB394;
	border-radius: 0.18rem;
	margin-top: 0.32rem;
	margin-left: 0.32rem;
	text-align: center;
	color: #1CB394;
	line-height: 1.96rem;
	font-size: 0.4rem;
}
	
</style>