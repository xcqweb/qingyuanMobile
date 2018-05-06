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
				return true
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.loadingBox{
    	width: 100%;
    	height: 100vh;
    	position: fixed;
    	top: 0;
    	bottom: 0;
    	left: 0;
    	right: 0;
    	margin: auto;
    	font-size: 0.2rem;
    	transform: scale(1.2);
    	border-radius: 0.1rem;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	img{
    		display: block;
    	}
    }
</style>