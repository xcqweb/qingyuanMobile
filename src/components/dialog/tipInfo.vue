<template>
	<transition name='fade'>
		<div class="box9" v-show='alerts.status'>
			<div class="con">
				<p :class="comIcon"></p>
				<p class="txt">{{alerts.txt}}</p>
			</div>
		</div>
	</transition>
</template>

<script>
	export default{
		props:['alerts'],
		computed:{
			comIcon(){
				if(this.$store.state.tipTxt.err){
					return 'icon2'
				}else{
					return 'icon1'
				}
			}
		},
	}
</script>

<style scoped lang='less'>
.box9{
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	background-color: transparent;
	z-index: 1000000;
	overflow: hidden;
	.con{
		width: 3.88rem;
		height: 1.64rem;
		background-color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		border-radius: 0.12rem;
		font-size: 0.3rem;
		border: 1px solid #ccc;
		box-shadow: 1px 1px #C4C4C4;
		.icon1{
			position: absolute;
			left: 0.76rem;
			top: 0.52rem;
			width: 0.61rem;
			height: 0.61rem;
			background-image: url(../../assets/images/tip/sucess.png);
			background-size: cover;
		}
		.icon2{
			position: absolute;
			left: 0.76rem;
			top: 0.52rem;
			width: 0.61rem;
			height: 0.61rem;
			background-image: url(../../assets/images/tip/faile.png);
			background-size: cover;
		}
		.txt{
			position: absolute;
			left: 1.66rem;
			top: 0.6rem;
			color: #686868;
		}
	}
}

.fade-enter-active{
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-o-transition: all 0.5s;
	transform: scale(1); 
	-webkit-transform: scale(1); 
	-ms-transform: scale(1); 
	-o-transform: scale(1); 
	-moz-transform: scale(1); 
	opacity: 1;
}
.fade-leave-active{
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-o-transition: all 0.5s;
	transform: scale(1); 
	-webkit-transform: scale(1); 
	-ms-transform: scale(1); 
	-o-transform: scale(1); 
	-moz-transform: scale(1);  
	opacity: 1;
}

.fade-enter,.fade-leave-to{
	opacity: 0;
	transform: scale(0); 
	-webkit-transform: scale(0); 
	-ms-transform: scale(0); 
	-o-transform: scale(0); 
	-moz-transform: scale(0); 
}
</style>