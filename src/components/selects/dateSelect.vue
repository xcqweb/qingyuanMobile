<template>
	<div class="box5">
		<div class="titles">{{dateData.titles}}</div>
		<div class="selectBox" @click='showList($event)'>
			<p class="title" id="dateBox">{{currentYear}}</p>
			<span class="up"></span>
			<span class="down"></span>
		</div>
	</div>
</template>

<script>
	import MobileSelect from 'byted-mobile-select'
	let year =  new Date().getFullYear()
	export default{
		data(){
			return{
				currentYear:year,
				dIndex:0,
				mySelect:null
			}
		},
		props:['dateData'],
		methods:{
			showList(e){
				let _self = this
				this.mySelect = new MobileSelect({
			    trigger: '#dateBox', 
			    title:'选择时间',
			    wheels: [
			                {data:this.dateData.list},
			            ],
			    position:[this.dIndex], //初始化定位 两个轮子都选中在索引1的选项
			    callback:function(indexArr, data){
			    	_self.$store.commit('COMMIT_ISSCROLL',false)
			    	if(!data){
			    		return
			    	}
			    		if(year===data[0]){
			    			this.dIndex = 0
			    		}else{
			    			this.dIndex = year-data[0]
			    		}
			    		
			            _self.$store.commit('COMMIT_YEAR',data[0])
						_self.currentYear = data[0]
						_self.$emit('dates',data[0])
			      } 
			})
			}
		},
		mounted(){
			if(year===this.$store.state.chooseYear){
				this.dIndex = 0
			}else{
				this.dIndex = year-this.$store.state.chooseYear
			}
			this.currentYear = this.$store.state.chooseYear
		}
	}
</script>

<style scoped lang='less'>
.box5{
	color: #797979;
	margin-top: 1.16rem;
	margin-left: 0.32rem;
	position: relative;
	.titles{
		position: absolute;
		font-size: 0.28rem;
		line-height: 0.5rem;
		margin-left: 0.2rem;
		font-weight: bold;
	}
	.selectBox{
		position: absolute;
		left: 1.2rem;
		width: 1.3rem;
		height: 0.5rem;
		border: 0.03rem solid #C4C4C4;
		border-radius: 0.06rem;
		box-sizing: border-box;
		z-index: -1;

		.title{
			width: 100%;
			height: 100%;
			line-height: 0.5rem;
			font-size: 0.24rem;
			text-align: left;
			padding-left: 0.2rem;
			position: absolute;
			z-index: 100;
		}
		.up{
				position: absolute;
				right: 0.1rem;
				bottom: 0.05rem;
				display: block;
				border-width: 0.08rem;
				border-color: #3C3C3C transparent transparent transparent;
				border-style: solid;
				opacity:0.6881;
				z-index: -1;
			}
			.down{
				position: absolute;
				right: 0.1rem;
				top: 0.05rem;
				display: block;
				border-width: 0.08rem;
				border-color: transparent transparent #3C3C3C transparent; 
				border-style: solid;
				opacity:0.6881;
				z-index: -1;
			}
		.list{
			font-size: 0.24rem;
			width: 1.26rem;
			background-color: #fff;
			height: 2rem;
			overflow-y: scroll;
			border-radius: 0.04rem;
			box-shadow: 0.03rem 0.03rem 0 0.03rem #c4c4c4;
			position: absolute;
			top: 0.5rem;
			left: 0;
			li{
				text-align: center;
				line-height: 0.42rem;
			}
			
			li:hover{
				background-color: #fff;
			}
		}
	}
	
}


			.list::-webkit-scrollbar{
			    width: 0.04rem;
			    height: 0.2rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.list::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,1);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.list::-webkit-scrollbar-thumb{
			    width: 1px;
			    height: 0.5rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #C4C4C4;
			    background-color: #0F2059;
			}
</style>