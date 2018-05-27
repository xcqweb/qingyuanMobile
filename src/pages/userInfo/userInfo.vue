<template>
		<div class="box" id="box">
			<div class="userInfo">
				<p class="userImg">
					<img src="../../assets/images/user/user.png" alt="头像" width="78"/>
				</p>
				<p class="userName">{{users.companyname}}</p>
				<p class="userType">{{users.usertype}}</p>
				<p class="exit"  @click="exit">
					<img class="icon" src="../../assets/images/user/exit.png" width="15" />
					<span class="txt">安全退出</span>
				</p>
			</div>
		</div>
</template>

<script>
	import router from '@/router'
	import Bus from '@/common/bus'
	
	
	export default{
		data(){
			return{
				left:'',
				flag:true
			}
		},
		computed:{
			
		},
		methods:{
			exit(){
				this.$store.commit('COMMIT_TIPS',{tips:'确定退出该账号?',status:true})
				this.$store.commit('COMMIT_SHOWALERT',true)
				this.$store.commit('COMMIT_EXIT',true)
			},
		},
		computed:{
			users(){
				if(this.$store.state.userInfo.usertype){
					return this.$store.state.userInfo
				}else if(window.sessionStorage.getItem('users')){
					return JSON.parse(window.sessionStorage.getItem('users'))
				}else{
					return JSON.parse(getCookie('users'))||{companyname:'',usertype:''}
				}
			}
		},
		mounted(){
			
			this.$nextTick( () => {
				let touchItem = document.getElementById('box');
				if(!touchItem){
					return
				}
				touchItem.addEventListener('touchmove',(e) => {
					e.preventDefault()
				})
			})
		}
		
	}
</script>

<style scoped lang="less">
.box{
	width: 3.1rem;
	height: 100vh;
	/*position: absolute;*/
	overflow: hidden;
	z-index: 10000;
	top: 0;
	left: 0;
	/*-webkit-transform: translate3d(-100%,0,0);*/
    /*transform: translate3d(-100%,0,0);*/
	.userInfo{
		width: 3.1rem;
		height: 100%;
		background-color: #4E76AC;
		position: relative;
		text-align: center;
		font-size: 0.24rem;
		font-weight: bold;
		.userImg{
			position: absolute;
			top: 1.28rem;
			left: 0.78rem;
			width: 1.56rem;
			height: 1.56rem;
		}
		.userName{
			padding-top: 2.9rem;
			padding-left: 0.78rem;
			width: 1.6rem;	
			color: #fff;
		}
		.userType{
			position: absolute;
			padding-top: 0.2rem;
			padding-left: 0.78rem;
			width: 1.6rem;
			color: rgba(0,0,0,0.8);
		}
		.exit{
			position: absolute;
			top: 5.36rem;
			left: 0.42rem;
			width: 2.6rem;
			.icon{
				position: absolute;
				left: 0;
				top: 0.06rem;
				&:active{
					background-color: rgba(0, 0, 0, 0.42)
				}
			}
			.txt{
				color: #fff;
				font-size: 0.3rem;
				position: absolute;
				left: 0.58rem;
				font-weight: 100;
				-webkit-user-select: none;
				-ms-user-select: none;
				-moz-user-select: none;
				&:active{
					background-color: rgba(0, 0, 0, 0.42)
				}
			}
		}
	}
}

.left-enter-active {
  transition: all .8s ease;
  transform: translateX(-100%);
}
.left-leave-active {
  transition: all .8s ease;
}
.left-enter-to{
  transform: translateX(0%);
  opacity: 1;
}

 .left-leave-to{
  transform: translateX(-100%);
  opacity: 0;
}
</style>