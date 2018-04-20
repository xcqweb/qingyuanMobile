<template>
  <div id="login">
    <div class="topBar">
    	<p class="title">清远旅游业务统计系统</p>
    	<span class="back"></span>
    </div>
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
    				<input class="btn" type="button" value="登 录" />
    			</p>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
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

.topBar{
	position: relative;
}

.topBar .title{
	font-size: 0.44rem;
	color: #fff;
	text-shadow: 8px 4px rgba(0,0,0,0.1);
	width: 4.4rem;
	height: 0.6rem;
	margin: 0.56rem 0 0 1.56rem;
	
}

.topBar .back{
		display: block;
		width: 0.34rem;
		height: 0.34rem;
		position: absolute;
		top: 0.16rem;
		left: 0.32rem;
		background: url(../../assets/images/login/back1.png) no-repeat 0.02rem;
		background-size: cover;
	}
	
	
	.middle{
		margin-top: 2.1rem;
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
			}
			
			.txt{
				position: absolute;
				top: 0.05rem;
				left: 0.48rem;
				width: 0.8rem;
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
				position: absolute;
				top: 0rem;
				left: 1.56rem;
				width: 2rem;
				height: 0.78rem;
				color: #898989;
				font-size: 0.3rem;
				//background: linear-gradient(left #5EC240 50% #7FD826);
				background: #5EC240;
				border: none;
				border-radius: 0.2rem;
				color: #fff;
			}
		}
		
	}
</style>
