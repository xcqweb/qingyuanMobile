<template>
	<div class="goldweek">
		<comtitle
			:titleData='titleData'
		></comtitle>
		<div class="topTitle">
			<span></span>
			<p>黄金周日报</p>
		</div>
		
		<type-select
			:dateData='dateData'
		></type-select>
		<date-select
			:goldData='goldData'
			class='typeSelect'
		></date-select>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			titleData:{
	  			title:'清远旅游统计报送分析系统',
	  			bgcolor:'#4E76AC',
	  			showArrow:false,
	  			smallTitle:false
		  	},
		  	goldData:{
		  		titles:'报表类型',
		  		list:[],
		  	},
		  	dateData:{
		  		titles:'年份',
		  		list:[],
		  	}
				
			}
		},
		props:[]
	}
</script>

<style scoped lang="less"> 
.goldweek{
	width: 100%;
	.topTitle{
		margin: 0.4rem 0 0 0.32rem;
		position: relative;
		p{
			font-size: 0.28rem;
			color: #3C3C3C;
			position: absolute;
			left: 0.16rem;
			top: 0;
			font-weight: bold;
		}
		span{
			display: block;
			width: 0.06rem;
			height: 0.26rem;
			background-color: #1CB394;
			position: absolute;
			left: 0;
			top: 0.06rem;
		}
	}
	.typeSelect{
		margin-left: 4.7rem;
	}
}
</style>