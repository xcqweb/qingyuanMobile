<template>
	<div class="box4">
		<div class="titles">{{goldData.titles}}</div>
		<div class="selectBox" @click='showList($event)'>
			<p class="title" id="typeBox">{{typeName}}</p>
			<span class="up"></span>
			<span class="down"></span>
		</div>
		

	</div>
</template>

<script>
	import MobileSelect from 'byted-mobile-select'

	export default{
		data(){
			return{
				typeName:'国庆',
				tIndex:0,
				mySelect:null
			}
		},
		props:['goldData'],
		methods:{
			showList(e){
				e.stopPropagation();
				e.preventDefault()
				this.$store.commit('COMMIT_ISSCROLL',true)
				let _self = this
				this.mySelect = new MobileSelect({
			    trigger: '#typeBox', 
			    title:'选择类型',
			    wheels: [
			                {data:this.goldData.list},
			            ],
			    position:[this.tIndex], //初始化定位 两个轮子都选中在索引1的选项
			    callback:function(indexArr, data){
			    	
			    	_self.$store.commit('COMMIT_ISSCROLL',false)
			    	if(!data){
			    		return
			    	}
			            _self.typeName = data[0]
						if(data[0]==='国庆'){
							_self.$emit('types',1)
							_self.$store.commit('COMMIT_TYPE',1)
							this.tIndex = 0
						}else{
							_self.$emit('types',2)
							_self.$store.commit('COMMIT_TYPE',2)
							this.tIndex = 1
						}
			      }
			  })
			},
			
			
		},
		mounted(){
			if(this.$store.state.type===1){
				this.typeName = '国庆'
				this.tIndex = 0
			}else{
				this.typeName = '春节'
				this.tIndex = 1
			}
			
			let _self = this
				this.mySelect = new MobileSelect({
			    trigger: '#typeBox', 
			    title:'选择类型',
			    wheels: [
			                {data:this.goldData.list},
			            ],
			    position:[this.tIndex], //初始化定位 两个轮子都选中在索引1的选项
			    callback:function(indexArr, data){
			    	
			    	_self.$store.commit('COMMIT_ISSCROLL',false)
			    	if(!data){
			    		return
			    	}
			            _self.typeName = data[0]
						if(data[0]==='国庆'){
							_self.$emit('types',1)
							_self.$store.commit('COMMIT_TYPE',1)
							this.tIndex = 0
						}else{
							_self.$emit('types',2)
							_self.$store.commit('COMMIT_TYPE',2)
							this.tIndex = 1
						}
			      }
			  })
		}
	}
</script>

<style scoped lang='less'>
.box4{
	color: #797979;
	margin-top: 1.16rem;
	margin-left: 0.32rem;
	position: relative;
	.titles{
		position: absolute;
		font-size: 0.28rem;
		line-height: 0.5rem;
		font-weight: bold;
		-webkit-user-select: none;
		-ms-user-select: none;
		-moz-user-select: none;
	}
	.selectBox{
		position: absolute;
		left: 1.66rem;
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
			padding-left: 0.3rem;
			position: absolute;
			z-index: 100;
			-webkit-user-select: none;
			-ms-user-select: none;
			-moz-user-select: none;
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
			width: 1.28rem;
			background-color: #fff;
			box-shadow: 0.02rem 0.02rem 0.02rem 0.02rem #c4c4c4;
			border: 0.005rem solid #c4c4c4;
			position: absolute;
			top: 0.5rem;
			left: 0;
			z-index: 100;
			li{
				text-align: center;
				line-height: 0.42rem;
			}
			
			li:hover{
				background-color: #fff;
			}
		}
		&:active{
				background-color: rgba(0, 0, 0, 0.42)
			}
	}
	
}
</style>