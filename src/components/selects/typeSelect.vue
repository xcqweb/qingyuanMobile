<template>
	<div class="box">
		<div class="titles">报表类型</div>
		<div class="selectBox">
			<p class="title" @touchstart='showList'>春节
				<span class="up"></span>
				<span class="down"></span>
			</p>
			<ul class="list" v-show="status">
				<li v-for="item in 6" @touchstart='choseType'>1</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				status:false,
			}
		},
		props:['goldData'],
		methods:{
			choseType(){
				this.status = false;
			},
			showList(){
				this.status = !this.status;
			}
		},
		mounted(){
			document.addEventListener('touchstart',(e) => {
				//给当前组件绑定事件 当点击元素不在组件内时 隐藏下拉框
				if(!this.$el.contains(e.target)){
					this.status = false;
				}
			})
		}
	}
</script>

<style scoped lang='less'>
.box{
	color: #797979;
	margin-top: 1.16rem;
	margin-left: 0.32rem;
	position: relative;
	.titles{
		position: absolute;
		font-size: 0.28rem;
		line-height: 0.5rem;
		font-weight: bold;
	}
	.selectBox{
		position: absolute;
		left: 1.5rem;
		width: 1.3rem;
		height: 0.5rem;
		border: 0.02rem solid #C4C4C4;
		border-radius: 0.06rem;
		padding-right: 0.16rem;
		box-sizing: border-box;
		.title{
			width: 100%;
			height: 100%;
			line-height: 0.5rem;
			font-size: 0.24rem;
			text-align: center;
			position: relative;
			.up{
				position: absolute;
				right: 0;
				bottom: 0.05rem;
				display: block;
				border-width: 0.08rem;
				border-color: #3C3C3C transparent transparent transparent;
				border-style: solid;
				opacity:0.6881;
			}
			.down{
				position: absolute;
				right: 0;
				top: 0.05rem;
				display: block;
				border-width: 0.08rem;
				border-color: transparent transparent #3C3C3C transparent; 
				border-style: solid;
				opacity:0.6881;
			}
		}
		.list{
			font-size: 0.24rem;
			width: 1.3rem;
			background-color: #eee;
			li{
				text-align: center;
				line-height: 0.36rem;
			}
			
			li:hover{
				background-color: #fff;
			}
		}
	}
	
}
</style>