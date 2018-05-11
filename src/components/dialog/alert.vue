<template>
	<div class="box9" id="alertBox">
		<div class="con">
			<div class="top"><p>{{alerts.tips}}</p></div>
			<div class="bottom">
				
				<p class="confirmt" @click='confirm($event)' v-if="!alerts.status">确定</p>
				
				<p class="cancel" @click='cancel($event)' v-show="alerts.status">取消</p>
				<p class="confirm" v-if="alerts.status" @touchstart='confirm($event)'>确定</p>
				
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
		mounted(){
			this.$nextTick( () => {
				let b = document.getElementById('alertBox')
				b.addEventListener('touchmove',function(e){
					e.preventDefault()
				},false)
			})
		},
		methods:{
			confirm(e){
				this.$store.commit('COMMIT_LOADING',false)
				this.$store.commit('COMMIT_SHOWALERT',false) //关闭提示框
				
				if(this.$store.state.save){
					this.$store.commit('COMMIT_SUBMIT',true) //记录确认状态
					this.$store.commit('COMMIT_SAVE',false)
					if(!this.$store.state.tipTxt.err){//填写正确时继续提交
						Bus.$emit('sendData')
					}
				}
				if(this.$store.state.isBack){ //点击返回按钮
					router.push('golden')
				}
				if(this.$store.state.exit){ //点击退出按钮
					this.$store.commit('COMMIT_EXIT',false)
					window.sessionStorage.removeItem('userInfo')
					window.sessionStorage.removeItem('users')
					this.$store.commit('COMMIT_ShOWINFO',false)
					Bus.$emit('hideUser')
					router.replace('login')
					//window.location.href = API_URLS
				}
				e.preventDefault()
				e.stopPropagation()
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
				}
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
		width: 5.46rem;
		height: 2.42rem;
		background-color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
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
				&:active{
					background-color: rgba(0, 0, 0, 0.42)
				}
			}
			.confirmt{
				flex: 1;
				color: #686868;
				font-size: 0.32rem;
				font-weight: bold;
				&:active{
					background-color: rgba(0, 0, 0, 0.42)
				}
			}
			.cancel:after{
				content: '';
				display: block;
				position: absolute;
				bottom: 0.22rem;
				height: 0.72rem;
				width: 2.7rem;
				border-right: 0.03rem solid rgba(104,104,104,0.245);
				&:active{
					background-color: rgba(0, 0, 0, 0.42)
				}
			}
			.cancel{
				flex: 1;
				color: #FB5050;
				&:active{
					background-color: rgba(0, 0, 0, 0.42)
				}
			}
		}
	}
}
</style>