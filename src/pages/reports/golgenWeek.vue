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
		<reports 
			class='r1'
			:dataList='reportOne'
		></reports>
		<reports
			:dataList='reportTwo'
		></reports>
		<reports
			:dataList='reportThree'
		></reports>
		<reports
			:dataList='reportFour'
		></reports>
		<reports
			:dataList='reportFive'
		></reports>
		<reports
			:dataList='reportSix'
		></reports>
		<reports
			class='r7'
			:dataList='reportSeven'
		></reports>
		<reports-complete></reports-complete>
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
		  	},
		  	reportOne:{
		  		title:'前一天',
		  		type:'黄金周旅行社日报',
		  	},
		  	reportTwo:{
		  		title:'前二天',
		  		type:'黄金周旅行社日报',
		  	},
		  	reportThree:{
		  		title:'前三天',
		  		type:'黄金周旅行社日报',
		  	},
		  	reportFour:{
		  		title:'前四天',
		  		type:'黄金周旅行社日报',
		  	},
		  	reportFive:{
		  		title:'前五天',
		  		type:'黄金周旅行社日报',
		  	},
		  	reportSix:{
		  		title:'前六天',
		  		type:'黄金周旅行社日报',
		  	},
		  	reportSeven:{
		  		title:'前七天',
		  		type:'黄金周旅行社日报',
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
	
	.r1{
		margin-top: 2rem;
	}
	
	.r7{
		margin-bottom: 0.32rem;
	}
	
}
</style>