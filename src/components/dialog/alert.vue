<template>
	<div class="box9">
		<div class="con">
			<div class="top"><p>{{alerts.tips}}</p></div>
			<div class="bottom">
				
				<p class="confirmt" @click='confirm($event)' v-show="!alerts.status">确定</p>
				
				<p class="cancel" @click='cancel($event)' v-show="alerts.status">取消</p>
				<p class="confirm" @click='confirm($event)' v-show="alerts.status">确定</p>
				
			</div>
		</div>
	</div>
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
		methods:{
			confirm(e){
				
				this.$store.commit('COMMIT_SHOWALERT',false)
				
				
				if(this.$store.state.save){
					this.$store.commit('COMMIT_SUBMIT',true)
					this.$store.commit('COMMIT_SAVE',false)
					Bus.$emit('sendData')
				}
				if(this.$store.state.isBack){
					router.replace('golden')
				}
				if(this.$store.state.exit){
					this.$store.commit('COMMIT_EXIT',false)
					window.localStorage.removeItem('userInfo')
					window.localStorage.removeItem('users')
					this.$store.commit('COMMIT_ShOWINFO',false)
					Bus.$emit('hideUser')
					router.replace('login')
					//window.location.href = 'localhost:8080/login'

				}
			},
			cancel(e){
				this.$store.commit('COMMIT_SAVE',false)
				this.$store.commit('COMMIT_ISBACK',false)
				this.$store.commit('COMMIT_SUBMIT',false)
				this.$store.commit('COMMIT_SHOWALERT',false)
				
				if(!this.$store.state.exit){
					Bus.$emit('showUser')
					Bus.$emit('hideUser')
					this.$store.commit('COMMIT_ShOWINFO',false)
				}else{
					this.$store.commit('COMMIT_EXIT',false)
//					this.$store.commit('COMMIT_ShOWINFO',false)
				}
			}
		}
	}
</script>

<style scoped lang='less'>
.box9{
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	background-color: rgba(0,0,0,0.15);
	z-index: 1000000;
	.con{
		width: 5.46rem;
		height: 2.42rem;
		background-color: #fff;
		position: absolute;
		top: 260/1344*100vh;
		left: 0;
		right: 0;
		margin: auto;
		border-radius: 0.12rem;
		font-size: 0.32rem;
		.top{
			width: 4.54rem;
			height: 1.46rem;
			border-bottom: 0.03rem solid rgba(104,104,104,0.245);
			margin: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			p{
				color: #686868;
				line-height: 0.44rem;
			}
		}
		.bottom{
			display: flex;
			flex-direction: row;
			text-align: center;
			line-height: 0.92rem;
			
			.confirm{
				flex: 1;
				color: #686868;
			}
			.confirmt{
				flex: 1;
				color: #686868;
				font-size: 0.32rem;
				font-weight: bold;
			}
			.cancel:after{
				content: '';
				display: block;
				position: absolute;
				bottom: 0.22rem;
				height: 0.72rem;
				width: 2.7rem;
				border-right: 0.03rem solid rgba(104,104,104,0.245);
			}
			.cancel{
				flex: 1;
				color: #FB5050;
			}
		}
	}
}
</style>