<template>
	<div class="loadingBox" v-show="isLoading">
		<img src="../../assets/images/loading/loading.gif" v-show="isLoading"/>
	</div>
</template>

<script>
	export default{
		name:'loading',
		computed:{
			isLoading(){
				return this.$store.state.isLoading
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.loadingBox{
    	width: 100%;
    	height: 100%;
    	position: fixed;
    	top: 0;
    	bottom: 0;
    	left: 0;
    	right: 0;
    	margin: auto;
    	font-size: 0.2rem;
    	/*box-shadow: 2px 2px rgba(200,200,200,0.8);*/
    	/*background-color: rgba(200,200,200,0.16);*/
    	transform: scale(1.2);
    	border-radius: 0.1rem;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }
</style>