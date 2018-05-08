<template>
	<transition name='fade'>
		<div class="box8" :style="{background:combg}" id="ttt">
			{{tipsTitle}}
		</div>
	</transition>
</template>

<script>
	export default{
		computed:{
			tipsTitle(){
				return this.$store.state.tipInfo.title
			},
			combg(){
				switch(this.$store.state.tipInfo.type){
					case 'sucess':
					return '#72B372';
					case 'warning':
					return '#F7A736';
					case 'error':
					return '#C85C57';
				}
			}
		},
		mounted(){
			this.$nextTick( () => {
				let t = document.getElementById('ttt');
				t.addEventListener('touchmove',function(e){
					e.preventDefault();
				},false)
			})
		}
	}
</script>

<style scoped lang="less">
.box8{
	max-width: 3rem;
	height: 0.6rem;
	line-height: 0.6rem;
	text-align: center;
	border-radius: 0.08rem;
	color: #fff;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	font-size: 0.24rem;
	opacity: 0;
	z-index: 100000;
	display: none;
}


  .fade-leave-active{
	  animation: s 2s ease;
	}
	.fade-leave-to{
		opacity: 0;
	}
	
	/*.fade-enter-to{
		opacity: 0;
	}
	 .fade-enter-active {
	 	animation: s 2s ease;
	 }*/
	
	@-webkit-keyframes s{
		0%{
			opacity: 0;
	  		transform: translateY(0);
		}
		50%{
			opacity: 1;
		}
		100%{
			opacity: 0;
	  		transform: translateY(-1.5rem);
		}
	}
	@-ms-keyframes s{
		0%{
			opacity: 0;
	  		transform: translateY(0);
		}
		50%{
			opacity: 1;
		}
		100%{
			opacity: 0;
	  		transform: translateY(-1.5rem);
		}
	}
	
	@-moz-keyframes s{
		0%{
			opacity: 0;
	  		transform: translateY(0);
		}
		50%{
			opacity: 1;
		}
		100%{
			opacity: 0;
	  		transform: translateY(-1.5rem);
		}
	}
	
	@keyframes s{
		0%{
			opacity: 0;
	  		transform: translateY(0);
		}
		50%{
			opacity: 1;
		}
		100%{
			opacity: 0;
	  		transform: translateY(-1.5rem);
		}
	}
</style>