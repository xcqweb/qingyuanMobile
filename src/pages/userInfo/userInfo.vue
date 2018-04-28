<template>
		<div class="box" id="box" :style="{transform:left}">
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
				users:{},
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
			move(){
				this.flag = !this.flag
				let dem = document.getElementById('box')
				let _self = this
				
				if(this.flag){
					let num=0;
					function mover(){
						if(num<-100){
							num-=1;
							window.requestAnimationFrame(mover)
						}else{
							num=-100
						}
						_self.left= `translate3d(${num}%,0,0)`
					}
					window.requestAnimationFrame(mover)
				}else{
					let num=-100;
					function movel(){
						if(num>0){
							num+=1;
							window.requestAnimationFrame(movel)
						}else{
							num=0
						}
						_self.left= `translate3d(${num}%,0,0)`
					}
					window.requestAnimationFrame(movel)
				}
			}
		},
		mounted(){
			
			if(window.localStorage.getItem('users')){
				if(this.$store.state.userInfo.usertype){
					this.users = this.$store.state.userInfo
				}else{
					this.users = JSON.parse(window.localStorage.getItem('users'))
				}
				 
			}else{
				router.replace('login')
			}
			
			
			Bus.$on('hideUser',() => {
				this.move()
			})
			
			Bus.$on('showUser', () => {
				this.move()
			})
			
			Bus.$on('hideU', () => {
				this.move()
			})
			
			
			this.$nextTick( () => {
				let touchItem = document.getElementById('box');
		
				touchItem.addEventListener('touchmove',(e) => {
					 
					if(e.target.className==='userInfo'){
						e.preventDefault()
						e.stopPropagation()
					}
				})
			})
		}
		
	}
</script>

<style scoped lang="less">
.box{
	width: 3.1rem;
	height: 100%;
	position: fixed;
	z-index: 10000;
	top: 0;
	left: 0;
	-webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
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
			position: absolute;
			top: 2.9rem;
			left: 0.78rem;
			width: 1.6rem;	
			color: #fff;
		}
		.userType{
			position: absolute;
			top: 4rem;
			left: 0.78rem;
			width: 1.6rem;
			color: rgba(0,0,0,0.43);
		}
		.exit{
			position: absolute;
			top: 4.98rem;
			left: 0.42rem;
			width: 2.6rem;
			.icon{
				position: absolute;
				left: 0;
				top: 0.06rem;
			}
			.txt{
				color: #fff;
				font-size: 0.3rem;
				position: absolute;
				left: 0.58rem;
				font-weight: 100;
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