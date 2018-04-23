<template>
	<div class="box">
		<comtitle
			:titleData='titleData'
		></comtitle>
		<div class="topTitle">
			<span></span>
			<p>接团数据</p>
		</div>
		
		<div class="con">
			<inputs
				class='o'
				:inputData='inputData1'
				@sendVal='getEl'
			></inputs>
			<inputs
				class='t'
				:inputData='inputData2'
				@sendVal='getTw'
			></inputs>
		</div>
		
		<div class="cont">
			<p class="total">接待总人数: {{receviveTotal}}</p>
			<inputs
				class='o'
				:inputData='inputData3'
				@sendVal='getOne'
			></inputs>
			<inputs
				class='t'
				:inputData='inputData4'
				@sendVal='getTwo'
			></inputs>
			<inputs
				class='th'
				:inputData='inputData5'
				@sendVal='getThree'
			></inputs>
		</div>
		
		<div class="topTitle2">
			<span></span>
			<p>组团数据</p>
		</div>
		<div class="con2">
			<inputs
				class='o'
				:inputData='inputData6'
				@sendVal='getThreen'
			></inputs>
			<inputs
				class='t'
				:inputData='inputData2'
				@sendVal='getFourteen'
			></inputs>
		</div>
		<div class="cont2">
			<p class="total">组团总人数: {{groupTotal}}</p>
			<inputs
				class='o'
				:inputData='inputData7'
				@sendVal='getFour'
			></inputs>
			<inputs
				class='t'
				:inputData='inputData8'
				@sendVal='getFive'
			></inputs>
			
			<p class="boardtotal">出境游: {{boardTotal}}</p>
			<inputs
				class='th'
				:inputData='inputData9'
				@sendVal='getSix'
			></inputs>
			<inputs
				class='f'
				:inputData='inputData10'
				@sendVal='getSeven'
			></inputs>
			<inputs
				class='fi'
				:inputData='inputData11'
				@sendVal='getEight'
			></inputs>
			<inputs
				class='s'
				:inputData='inputData12'
				@sendVal='getNine'
			></inputs>
		</div>
		
		<div class="bottomTitle2">
			<span></span>
			<p>营业收入</p>
		</div>
		<inputs
			class='e'
			:inputData='inputData13'
			@sendVal='getTen'
		></inputs>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				rOne:0,
				rTwo:0,
				rThree:0,
				rFour:0,
				rFive:0,
				rSix:0,
				rSeven:0,
				rEight:0,
				rNine:0,
				rten:0,
				rEl:0,
				rTw:0,
				rTheen:0,
				rFeen:0,
				
				titleData:{
		  			title:'2018年春节前一天报表',
		  			bgcolor:'#4E76AC',
		  			showArrow:true,
		  			smallTitle:false
			  	},
			  	inputData1:{
			  		id:1,
			  		name:'接团数',
			  		inputType:'text',
			  		placeHolder:'请输入接团数量',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2.16rem',
			  		maright:'0.96rem'
				},
				inputData2:{
				  		id:1,
				  		name:'一日游',
				  		inputType:'text',
				  		placeHolder:'请输入一日游人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
			  			maright:'0.96rem'
				},
				inputData3:{
				  		id:1,
				  		name:'省外',
				  		inputType:'text',
				  		placeHolder:'游客人数',
				  		boxWidth:'2.06rem',
				  		inputWidth:'1.26rem',
				  		maright:'0.7rem'
				},
				inputData4:{
				  		id:1,
				  		name:'省内',
				  		inputType:'text',
				  		placeHolder:'游客人数',
				  		boxWidth:'2.06rem',
				  		inputWidth:'1.26rem',
				  		maright:'0.7rem'
				},
				inputData5:{
				  		id:1,
				  		name:'国际',
				  		inputType:'text',
				  		placeHolder:'游客人数',
				  		boxWidth:'2.06rem',
				  		inputWidth:'1.26rem',
				  		maright:'0.7rem'
				},
				inputData6:{
			  		id:1,
			  		name:'组团数',
			  		inputType:'text',
			  		placeHolder:'请输入接团数量',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2.16rem',
			  		maright:'0.96rem'
				},
				inputData7:{
				  		id:1,
				  		name:'省内游',
				  		inputType:'text',
				  		placeHolder:'游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem'
				},
				inputData8:{
			  		id:1,
			  		name:'省外游',
			  		inputType:'text',
			  		placeHolder:'请输入接团数量',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2.16rem',
				  	maright:'0.96rem'
				},
				inputData9:{
				  		id:1,
				  		name:'香港游',
				  		inputType:'text',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem'
				},
				inputData10:{
				  		id:1,
				  		name:'澳门游',
				  		inputType:'text',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem'
				},
				inputData11:{
				  		id:1,
				  		name:'出国游',
				  		inputType:'text',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem'
				},
				inputData12:{
				  		id:1,
				  		name:'欧洲游',
				  		inputType:'text',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem'
				},
				inputData13:{
				  		id:1,
				  		name:'营业额(万元)',
				  		inputType:'text',
				  		placeHolder:'请输入当日营业额(单位万元)',
				  		boxWidth:'6.86rem',
				  		inputWidth:'5.1rem',
				  		maright:'1.66rem'
				},
			
		}
	 },
	 methods:{
	 	getOne(val){
	 		this.rOne = val
	 	},
	 	getTwo(val){
	 		this.rTwo = val
	 	},
	 	getThree(val){
	 		this.rThree = val
	 	},
	 	getFour(val){
	 		this.rFour = val
	 	},
	 	getFive(val){
	 		this.rFive = val
	 	},
	 	getSix(val){
	 		this.rSix = val
	 	},
	 	getSeven(val){
	 		this.rSeven = val
	 	},
	 	getEight(val){
	 		this.rEight = val
	 	},
	 	getNine(val){
	 		this.rNive = val
	 	},
	 	getten(val){
	 		this.rTen = val
	 	},
	 	getEl(val){
	 		this.rEl = val
	 	},
	 	getTw(val){
	 		this.rTw = val
	 	},
	 	getThreen(val){
	 		this.rtheen = val
	 	},
	 	getFoureen(val){
	 		this.rFeen = val
	 	}
	 },
	 computed:{
	 	receviveTotal(){
	 		return Number(this.rOne)+Number(this.rTwo)+Number(this.rThree)
	 	},
	 	groupTotal(){
	 		return Number(this.rFour) + Number(this.rFive)
	 	},
	 	boardTotal(){
	 		return Number(this.rSix) + Number(this.rSeven)+Number(this.rEight) + Number(this.rNine)
	 	}
	 },
	}
</script>

<style scoped lang="less">
.box{
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
	.con{
		width: 100%;
		height: 0.58rem;
		position: absolute;
		top: 1.2rem;
		.o{
			position: absolute;
			left: 0.32rem;
		}
		.t{
			position: absolute;
			right: 0.32rem;
		}
	}
	.cont{
		height: 1.06rem;
		width: 100%;
		position: absolute;
		top: 3.06rem;
		.total{
			font-size: 0.28rem;
			color: #3C3C3C;
			font-weight: bold;
			position: absolute;
			left: 0.32rem;
		}
		.o{
			position: absolute;
			left: 0.32rem;
			top: -0.48rem;
			
		}
		.t{
			position: absolute;
			left: 2.72rem;
			top: -0.48rem;
		}
		.th{
			position: absolute;
			right: 0.32rem;
			top: -0.48rem;
		}
	}
	
	.topTitle2{
		margin: 3.24rem 0 0 0.32rem;
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
	.con2{
		width: 100%;
		height: 0.58rem;
		position: absolute;
		top: 4.10rem;
		.o{
			position: absolute;
			left: 0.32rem;
		}
		.t{
			position: absolute;
			right: 0.32rem;
		}
	}
	.cont2{
		height: 1.06rem;
		width: 100%;
		position: absolute;
		top: 5.88rem;
		.total{
			font-size: 0.28rem;
			color: #3C3C3C;
			font-weight: bold;
			position: absolute;
			left: 0.32rem;
		}
		.o{
			position: absolute;
			left: 0.32rem;
			top: -0.42rem;
		}
		.t{
			position: absolute;
			right: 0.32rem;
			top: -0.42rem;
		}
		
		.boardtotal{
			font-size: 0.28rem;
			color: #3C3C3C;
			font-weight: bold;
			position: absolute;
			left: 0.32rem;
			top: 1.4rem;
		}
		 .th{
				position: absolute;
				left: 0.32rem;
				top: 0.92rem;
			}
			.f{
				position: absolute;
				right: 0.32rem;
				top: 0.92rem;
			}
			
			.fi{
				position: absolute;
				left: 0.32rem;
				top: 1.92rem;
			}
			
			.s{
				position: absolute;
				right: 0.32rem;
				top: 1.92rem;
			}
	}
	
	.bottomTitle2{
		margin: 8.5rem 0 0 0.32rem;
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
	.e{
		position: absolute;
		right: 0.32rem;
		top: 9.36rem;
	}
}
</style>