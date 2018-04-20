<template>
  <div id="login">
    <comtitle
			:titleData='titleData'
    ></comtitle>
    <div class="middle">
    	<div class="loginForm">
    			<p class="user">
    				<label for="user" class="icon"></label>
    				<input class="txt" type="text" id="user" value="用户名" />
    			</p>
    			<p class="psw">
    				<label for="psw" class="icon"></label>
    				<input class="txt" type="password" id="psw" value="565656565" />
    			</p>
    			<p class="getPsw">
    				<label for="rio" class="txt">记住密码</label>
    				<input class="ratio" type="checkbox" id="rio" />
    			</p>
    			<p class="loginBtn">
    				<span class="btn">登录</span>
    			</p>
    	</div>
    </div>
    
    <div class="bottom">
    	<div class="scrollBar" id="touch" :style="{left:lefts+'px'}">
    		
    		
    		<div class="list">
    			<div class="title">各区旅游局</div>
    			<div class="con">
    				<ul class="subTitle">
    					<li>单位编码</li>
    					<li>单位名称</li>
    				</ul>
    				<div class="subCon">
    					<ul>
    						<li v-for="i in 10">
	    						<span>1sasa</span>
	    						<span>2sdas</span>
	    					</li>
    					</ul>
    				</div>
    			</div>
    		</div>
    		
    		
    		<div class="list">2</div>
    		<div class="list">3</div>
    		<div class="list">4</div>
    		<div class="list">5</div>
    		<div class="list">6</div>
    	</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
  	return {
  		startX:0,
  		startY:0,
  		endX:0,
  		endY:0,
  		lefts:35,
  		titleData:{
  			title:'清远旅游业务统计系统',
  			bgcolor:'transparent',
  			showArrow:false,
  			smallTitle:true
  		}
  	}
  },
  methods:{
  	
  },
  mounted(){
  	this.$nextTick( () => {
  		let touchItem = document.getElementById('touch');
  		
  		touchItem.addEventListener('touchstart',(e) => {
  			 this.startX = e.changedTouches[0].screenX;
  			 this.startY = e.changedTouches[0].screenY;
  		})
  		
  		touchItem.addEventListener('touchmove',(e) => {
    			 this.endX = e.changedTouches[0].screenX;
    			 this.endY = e.changedTouches[0].screenY;
    			 
    			 if(Math.abs(this.endX-this.startX)>=20){
    			 		this.lefts += 319+"px"
    			 }
  		})
  		
  		
  		
  	})
  },
 
}
</script>

<style scoped="scoped" lang="less">
#login {
  width: 100%;
  height: 13.34rem;
  background: url(../../assets/images/login/login.png) no-repeat;
  background-size: contain;
  overflow: hidden;
}

	
	.middle{
		margin-top: 0.96rem;
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
			border: 0.02rem solid rgba(0,0,0,0.15);
			border-radius: 0.08rem;
			left: 0.5rem;
			top: 0.6rem;
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
			border: 0.02rem solid rgba(0,0,0,0.15);
			border-radius: 0.08rem;
			left: 0.5rem;
			top: 1.58rem;
			.icon{
				width: 0.74rem;
				height: 0.66rem;
				position: absolute;
				left: 0;
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
			height: 0.68rem;
			left: 0.5rem;
			bottom: 0.64rem;
			color: #898989;
		
			.btn{
				display: block;
				position: absolute;
				top: 0rem;
				left: 1.56rem;
				width: 2rem;
				text-align: center;
				line-height: 0.78rem;
				height: 0.78rem;
				color: #898989;
				font-size: 0.3rem;
				//background: linear-gradient(left #5EC240 50% #7FD826);
				background: #5EC240;
				border: none;
				border-radius: 0.2rem;
				color: #fff;
			}
			
			.btn:active{
				background: #7FD826;
			}
		}
		
	}
	
	.bottom{
			width: 100%;
			overflow-x: scroll;
			margin-top: 0.7rem;
			.scrollBar{
				height: 100%;
				width: 39.6rem;
				float: left;
				position: relative;
				left: 0.7rem;
				.list{
					height: 5.6rem;
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
						border-bottom: 0.01rem solid rgba(77,77,77,0.52);
						width: 5.54rem;
						margin: auto;
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
		
</style>
