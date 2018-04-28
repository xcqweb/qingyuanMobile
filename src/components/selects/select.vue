<template>
	<div id="box">
		<!--<div class="con">
			<ul @touchstart='ts($event)' @touchmove='tm($event)' @touchend='te($event)'>
				<span class="cancel">取消</span>
				<span class="confirm">确定</span>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
				<li>2012</li>
			</ul>
		</div>
		<p class="choose"></p>-->
	</div>
</template>

<script>
	import MobileSelect from 'byted-mobile-select'
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			var mySelect = new MobileSelect({
			    trigger: '#box', 
			    wheels: [
			                {data:['周日','周一','周二','周三','周四','周五','周六']},
			                {data:['08:00','09:00','10:00','11:00','12:00','13:00','14:00']}
			            ],
			    position:[1,1] //初始化定位 两个轮子都选中在索引1的选项
			})
		},
		methods:{
//			ts(){
//			},
//			tm(){
//			},
//			te(){
//			}
		}
	}
</script>

<style scoped lang="less">
#box{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.1);
	.con{
		ul{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 4rem;
			background-color: rgba(255,255,255,.7);
			font-size: 0.36rem;
			text-align: center;
			overflow-y: scroll;
			//color: rgba(255,255,255,0.8);
			.cancel{
				position: absolute;
				left: 0.1rem;
				top: 0.1rem;
				color: #eee;
				z-index: 10000;
			}
			.confirm{
				position: absolute;
				right: 0.1rem;
				top: 0.1rem;
				color: #eee;
				z-index: 10000;
			}
			li{
				height: 0.8rem;
				line-height: 0.8rem;
				
			}
		}
	}
	.choose{
		height: 0.8rem;
		width: 100%;
		line-height: 0.8rem;
		border-top: 0.005rem solid rgba(255,255,255,0.5);
		border-bottom: 0.005rem solid rgba(255,255,255,0.5);
		position: absolute;
		bottom: 1.6rem;
		/*color: rgba(0,0,0,0.9);*/
		font-size: 0.36rem;
		text-align: center;
	}
}

			ul::-webkit-scrollbar{
			    width: 0.04rem;
			    height: 0.2rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			ul::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,1);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			ul::-webkit-scrollbar-thumb{
			    width: 1px;
			    height: 0.5rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #C4C4C4;
			    background-color: #0F2059;
			}
</style>