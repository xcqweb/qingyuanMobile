<template>
  <div id="login">
    <comtitle
			:titleData='titleData'
    ></comtitle>
    <div class="middle">
    	<div class="loginForm">
    			<p class="user" :class="{error:isError}">
    				<label for="user" class="icon"></label>
    				<input class="txt" type="text" id="user" value="用户名" v-model="loginInfo.username" @focus="focu"/>
    			</p>
    			<p class="psw"  :class="{error:isError}">
    				<label for="psw" class="icon"></label>
    				<input class="txt" type="password" id="psw" v-model="loginInfo.password" @focus="focu"/>
    			</p>
    			<!--<p class="getPsw">
    				<label for="rio" class="txt">记住密码</label>
    				<input class="ratio" type="checkbox" id="rio" v-model="loginInfo.memory"/>
    			</p>-->
    			<p class="loginBtn" @touchstart='start($event)' v-show="status">
    				<button class="btn"  id="loginBtn">登 录</button>
    			</p>
    				<p class="loginBtn" @click='login($event)' v-show="!status">
    				<button class="btn"  id="loginBtn">登 录</button>
    			</p>
    	</div>
    </div>
    
    <div class="bottom">
    	<div class="scrollBar" id="touch">
    		
    		
    		<div class="list" v-for="items in reData">
    			<div class="title">{{items[0].user_type==='景点'?'景区'+items[0].user_type:items[0].user_type ||"重点"+items[0].userType}}</div>
    			<div class="con">
    				<ul class="subTitle">
    					<li>单位编码</li>
    					<li>单位名称</li>
    				</ul>
    				<div class="subCon">
    					<ul>
    						<li v-for="item in items">
	    						<span>{{item.user_code || item.userCode}}</span>
	    						<span>{{item.user_name ||item.userName}}</span>
	    					</li>
    					</ul>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <loading></loading>
  </div>
</template>

<script>
	import router from '@/router'
	import Bus from '@/common/bus'
export default {
  name: 'login',
  data(){
  	return {
  		startX:0,
  		startY:0,
  		endX:0,
  		endY:0,
  		reData:[],
  		isError:false,
  		loginInfo:{
  			username:'',
  			password:'',
  		},
  		titleData:{
  			title:'清远旅游统计报送分析系统',
  			bgcolor:'transparent',
  			showArrow:false,
  			smallTitle:true,
  			showBack:false
  		}
  	}
  },
  methods:{
  	getData(){
  		this.$store.commit('COMMIT_LOADING',true)
  		this.$axios.get(API_URL+'/mobile/interface/login/html').then( r => {
  			if(r.data.code==='200' || r.data.code===200){
  				this.$store.commit('COMMIT_LOADING',false)
  				let re = r.data.data;
  				for(var i=1; i<=5; i++){
  					let str = `list${i}`
  					if(i===1){
  						re[str] = re[str].splice(1)
  					}
    					this.reData.push(re[str])
  				}
  			}else{
  				return
  			}
  		})
  	},
  	start(e){
  		e.preventDefault()
  		this.login()
  	},
  	focu(){
  		this.isError = false
  	},
  	login(e){
  		
  		if(!this.loginInfo.password && this.loginInfo.username){
  			this.$store.commit('COMMIT_TIPS',{tips:'密码不能为空!',status:false})
				this.$store.commit('COMMIT_SHOWALERT',true)
  			return;
  		}else if(!this.loginInfo.password && !this.loginInfo.username){
  			this.$store.commit('COMMIT_TIPS',{tips:'账号密码不能为空!',status:false})
				this.$store.commit('COMMIT_SHOWALERT',true)
  			return;
  		}else if(!this.loginInfo.username&&this.loginInfo.password){
  			this.$store.commit('COMMIT_TIPS',{tips:'账号不能为空!',status:false})
				this.$store.commit('COMMIT_SHOWALERT',true)
  			return;
  		}else{
  			this.$store.commit('COMMIT_LOADING',true)
  		}
  		let params = new FormData()
  		params.append('username',this.loginInfo.username)
  		params.append('password',this.loginInfo.password)
  		this.$axios.post(API_URL+'/mobile/interface/login',params).then( r => {
  			if(!r){
						this.$store.commit('COMMIT_LOADING',false)
						this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'登录失败!',err:true})
						if(timer){
							clearTimeout(timer)
						}
						var timer = setTimeout ( () => {
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'登录失败!',err:true})
						},3000)
  				return
  			}
  			
  			let reData = r.data.data;
  			if(reData.e_no==="0" || reData.e_no===0){
  				this.loginInfo = {
		  			username:'',
		  			password:'',
		  		}
  				this.$store.commit('COMMIT_LOADING',false)
					this.$store.commit('COMMIT_USERINFO',{companyname:reData.companyName,usertype:reData.userType})				
		   window.sessionStorage.setItem('users',JSON.stringify({'username':reData.userName,'usertype':reData.userType,'companyname':reData.companyName}))
		  	
				  	router.replace({path:'/'})
		  				
  			}else{
  				this.isError = true
  				this.$store.commit('COMMIT_TIPS',{tips:'账号或密码错误!',status:false})
					this.$store.commit('COMMIT_SHOWALERT',true)
					return;
  			}
  		})
  	},
  	
  	getUser(){
  		let users = JSON.parse(window.sessionStorage.getItem('userInfo'))
  		if(users){
  			this.loginInfo.username = users.username
  			this.loginInfo.password = users.password
  			this.loginInfo.memory = users.memory
  		}else{
  			return
  		}
  		
  	}
  	
  },
  computed:{
  	status(){
  		let flag
  		if (/UCBrowser/i.test(navigator.userAgent)) { //判断uc
	  		flag = true
			} else {  
				flag = false
			}
			return flag
  	}
  },
  created(){
  	this.getData()
  },
  mounted(){
  	this.ver = /version\/9.0/i.test(navigator.userAgent)
  },
 
}
</script>

<style scoped="scoped" lang="less">
#login {
  width: 100%;
  height: 13.34rem;
  background: url(../../assets/images/login/login.png) no-repeat;
  background-size: cover;
  overflow: hidden;
}

	
	.middle{
		margin-top: 0.5rem;
		height: 4.58rem;
	}
	
	.middle .loginForm{
		width: 6.1rem;
		height: 4.58rem;
		margin:0 0 0 0.7rem;
		background: rgba(255,255,255,0.9);
		border-radius: 0.2rem;
	}
	
	.loginForm{
		position: relative;
		
		.user{
			position: absolute;
			width: 5.12rem;
			height: 0.66rem;
			border: 0.03rem solid rgba(0,0,0,0.15);
			border-radius: 0.08rem;
			left: 0.5rem;
			top: 0.82rem;
			.icon{
				width: 0.74rem;
				height: 0.66rem;
				position: absolute;
				left: 0;
				background-image: url(../../assets/images/login/user1.png);
				background-repeat: no-repeat;
				background-position: 0.24rem 0.20rem;
			}
			
			.txt{
				position: absolute;
				left: 0.48rem;
				width: 4.38rem;
				height: 0.68rem;
				border: none;
				background-color: transparent;
				outline: none;
				padding-left: 0.2rem;
				box-sizing: border-box;
				font-size: 0.28rem;
				color: #898989;
			}
		}
		
		
		
		.psw{
			position: absolute;
			width: 5.12rem;
			height: 0.68rem;
			border: 0.03rem solid rgba(0,0,0,0.15);
			border-radius: 0.08rem;
			left: 0.5rem;
			top: 1.8rem;
			.icon{
				width: 0.74rem;
				height: 0.66rem;
				position: absolute;
				left: 0;
				z-index: 10000;
				background-image: url(../../assets/images/login/psw1.png);
				background-repeat: no-repeat;
				background-position: 0.24rem 0.20rem;
			}
			
			.txt{
				position: absolute;
				left: 0.48rem;
				width: 4.38rem;
				height: 0.66rem;
				border: none;
				background-color: transparent;
				outline: none;
				padding-left: 0.2rem;
				box-sizing: border-box;
				font-size: 0.28rem;
				color: #898989;
			}
		}
		
		.error{
				border: 0.03rem solid rgba(255,0,0,0.5) !important;
			}
			
		.getPsw{
			position: absolute;
			width: 5.12rem;
			height: 0.68rem;
			left: 0.5rem;
			top: 2.56rem;
			color: #898989;
			.ratio{
				width: 0.26rem;
				height: 0.26rem;
				position: absolute;
				top: 0;
				left: 0;
				background-color: #3B99FC;
				color: #3B99FC;
			}
			
			.ratio:before{
				content: "";
				width: 0.26rem;
				height: 0.26rem;
				background-color: #f00;
			}
			
			.txt{
				position: absolute;
				top: 0.05rem;
				left: 0.48rem;
				width: auto;
				height: 0.28rem;
				line-height: 0.28rem;
				color: #898989;
				font-size: 0.2rem;
			}
		}
		
		.loginBtn{
			position: absolute;
			width: 5.12rem;
			height: 0.7rem;
			left: 0.5rem;
			bottom: 0.86rem;
			color: #898989;
		
			.btn{
				display: block;
				position: absolute;
				top: 0rem;
				left: 0rem;
				-moz-user-select: none;
				-ms-user-select: none;
				-webkit-user-select: none;
				width: 5.12rem;
				text-align: center;
				line-height: 0.78rem;
				height: 0.78rem;
				color: #898989;
				font-size: 0.3rem;
				background: linear-gradient(to right, #5EC240, #7FD826);
				border: none;
				border-radius: 0.2rem;
				color: #fff;
			}
			
			.btn:active{
				background: #CCCCCC;
				outline: none;
				border: none;
			}
		}
		
	}
	
	.bottom{
			width: 100%;
			overflow-x: scroll;
			overflow-y: hidden;
			margin-top: 0.7rem;
			.scrollBar{
				height: 100%;
				width: 33rem;
				float: left;
				position: relative;
				left: 0.7rem;
				.list{
					height: 5.7rem;
					width: 6.1rem;
					float: left;
					border-radius: 0.2rem;
					margin-right: 0.42rem;
					background:rgba(255,255,255,0.8);
					overflow: hidden;
					.title{
						font-size: 0.4rem;
						color: #4D4D4D;
						text-align: center;
						font-weight: bold;
						padding-top: 0.36rem;
						padding-bottom: 0.16rem;
						border-bottom: 0.03rem solid rgba(77,77,77,0.52);
						width: 5.54rem;
						margin: auto;
						letter-spacing: 0.03rem;
					}
					.con{
						  font-size: 0.28rem;
							color: #4D4D4D;
						.subTitle{
							display: flex;
							margin-top: 0.16rem;
							li{
								flex: 1;
								text-align: center;
							}
						}
						.subCon{
							overflow-y: scroll;
							height: 4rem;
							ul li{
								display: flex;
								margin-top: 0.16rem;
								span{
									flex: 1;
									text-align: center;
								}
							}
						}
					}
				}
			}
			
		}
		
		
		 .subCon::-webkit-scrollbar{
			    width: 2px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.subCon::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.subCon::-webkit-scrollbar-thumb{
			    width: 0.2rem;
			    height: 1rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #ccc;
			    background-color: rgba(0,0,0,1);
			}
			
			.bottom::-webkit-scrollbar{
			    width: 2px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.bottom::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.9);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.bottom::-webkit-scrollbar-thumb{
			    width: 0px;
			    height: 3rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #ccc;
			    background-color: #0F2059;
			}
</style>
