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
	import router from '@/router'
	import Bus from '@/common/bus'
	export default{
		data(){
			return{
				
			}
		},
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
		methods:{
			confirm(e){
				e.preventDefault()
				e.stopPropagation()
			},
			cancel(e){
				e.preventDefault()
				e.stopPropagation()
			}
		}
	}
</script>

<style scoped lang='less'>
.box9{
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	background-color: rgba(0,0,0,0.15);
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
		.icon1{
			position: absolute;
			left: 0.76rem;
			top: 0.52rem;
			width: 0.6rem;
			height: 0.6rem;
			background-image: url(../../assets/images/tip/sucess.png);
			background-size: cover;
		}
		.icon2{
			position: absolute;
			left: 0.76rem;
			top: 0.52rem;
			width: 0.6rem;
			height: 0.6rem;
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
	
}
</style>