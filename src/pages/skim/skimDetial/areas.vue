<template>
	<div class="box1">
		<comtitle
			:titleData='computedTitle'
		></comtitle>
		<div class="conBox">
			<div class="topTitle">
				<span></span>
				<p>旅游接待总人数和总收入</p>
			</div>
			<div class="info">
				<p class="total">人均消费(元): <span>{{t1}}</span></p>
				<inputs
					class='o'
					:inputData='inputData1'
				></inputs>
				<inputs
					class='t'
					:inputData='inputData2'
				></inputs>
				<inputs
					class='th'
					:inputData='inputData3'
				></inputs>
			</div>
			<div class="topTitles">
				<span></span>
				<p>一天游情况</p>
			</div>
			<div class="con">
				<p class="total">人均消费(元): <span>{{t2}}</span></p>
				<inputs
					class='o'
					:inputData='inputData4'
				></inputs>
				
				<inputs
					class='t'
					:inputData='inputData5'
				></inputs>
			</div>
			<div class="topTitleth">
				<span></span>
				<p>过夜游</p>
			</div>
			<div class="con2">
				<p class="total">人均消费(元): <span>{{t3}}</span></p>
				<inputs
					class='o'
					:inputData='inputData6'
				></inputs>
				
				<inputs
					class='t'
					:inputData='inputData7'
				></inputs>
			</div>
			
			<div class="topTitlef">
				<span></span>
				<p>酒店和社会旅馆</p>
			</div>
			<div class="con3">
				<inputs
					class='o'
					:inputData='inputData8'
				></inputs>
				
				<inputs
					class='t'
					:inputData='inputData9'
				></inputs>
				
				<inputs
					class='th'
					:inputData='inputData10'
				></inputs>
				
				<inputs
					class='f'
					:inputData='inputData11'
				></inputs>
				<inputs
					class='fi'
					:inputData='inputData12'
				></inputs>
				
				<inputs
					class='six'
					:inputData='inputData13'
				></inputs>
				<inputs
					class='seven'
					:inputData='inputData14'
				></inputs>
			</div>
			
			<div class="topTitlefi">
				<span></span>
				<p>酒店和社会旅馆</p>
			</div>
			<div class="con4">
				<inputs
					class='o'
					:inputData='inputData15'
				></inputs>
				
				<inputs
					class='t'
					:inputData='inputData16'
				></inputs>
				
				<inputs
					class='th'
					:inputData='inputData17'
				></inputs>
				<loading></loading>
			</div>
		</div>
	</div>
</template>

<script>
	import Bus from '@/common/bus'
	import router from '@/router'
	export default{
		data(){
			return{
				companyname:'',
			  	inputData1:{
			  		id:3,
			  		name:'接待总人数(万人次)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData2:{
			  		id:3,
			  		name:'旅游总收入(亿)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData3:{
			  		id:3,
			  		name:'其中外汇收入(万美金)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData4:{
			  		id:3,
			  		name:'接待总人数(万人次)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData5:{
			  		id:3,
			  		name:'旅游总收入(亿)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData6:{
			  		id:3,
			  		name:'接待总人数(万人次)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData7:{
			  		id:3,
			  		name:'旅游总收入(亿)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData8:{
			  		id:3,
			  		name:'接待总人数(万人次)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData9:{
			  		id:3,
			  		name:'其中国内人数(万人次)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData10:{
			  		id:3,
			  		name:'其中境外总人数(万人次)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData11:{
			  		id:3,
			  		name:'直报系统中宾馆数(家)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData12:{
			  		id:3,
			  		name:'接待人数(万人)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData13:{
			  		id:3,
			  		name:'其他社会宾馆数(家)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData14:{
			  		id:3,
			  		name:'接待人数(万人)',
			  		inputType:'number',
				  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData15:{
			  		id:3,
			  		name:'接待总人数(万人)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData16:{
			  		id:3,
			  		name:'其中国内人数(万人)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData17:{
			  		id:3,
			  		name:'其中境外人数(万人)',
			  		inputType:'number',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
			}
		},
		watch:{

		},
		methods:{
			getData(params){
				this.$store.commit('COMMIT_LOADING',true)
				this.$axios.get(API_URL+'/mobile/mobileMgr/goldenWeekReport',{params:params}).then( r => {
					if(!r){
						return;
					}
					if(r.data.code==='200' || r.data.code===200){
						this.$store.commit('COMMIT_LOADING',false)
						let reData = r.data.data.new
						this.companyname = reData.userName
						this.inputData1.num = reData.travelRecPersonSum
						this.inputData2.num = reData.travelRecIncomeSum
						this.inputData3.num = reData.travelRecOutIncome
						this.inputData4.num = reData.oneDayPersonSum
						this.inputData5.num = reData.oneDayIncomeSum
						this.inputData6.num = reData.passNightPersonSum
						this.inputData7.num = reData.passNightIncomeSum
						this.inputData8.num = reData.hotelPersonSum
						this.inputData9.num = reData.hotelInSum
						this.inputData10.num = reData.hotelOutSum
						this.inputData11.num = reData.hotelSum
						this.inputData12.num = reData.hotelRecSum
						this.inputData13.num = reData.hotelOtherSum
						this.inputData14.num = reData.hotelOtherRecSum
						this.inputData15.num = reData.scenicPersonSum
						this.inputData16.num = reData.scenicInSum
						this.inputData17.num = reData.scenicOutSum
						this.t1 = reData.travelRecCostAvg
						this.t2 = reData.oneDayCostAvg
						this.t3 = reData.passNightCostAvg
					}
				})
			}
		},
		mounted(){
			window.onload= function(){
				router.push('golden')
			}
			console.log(this.$store.state.skimData)
			let params = {
				userType:this.$store.state.skimData.usertype,
				userCode:this.$store.state.skimData.usercode,
				dateYear:this.$store.state.skimData.dataYear,
				selDate:this.$store.state.skimData.selDate,
				dateIndex:this.$store.state.skimData.dateIndex
				
			}
			this.getData(params)
		},
		computed:{
				computedTitle(){
				return {
			  			title:this.companyname,
			  			bgcolor:'#4E76AC',
			  			showArrow:false,
			  			smallTitle:false,
			  			showBack:false,
			  			showUser:false,
			  			skimgoBack:true
				  	}
			}
		}
	}
</script>

<style scoped lang="less">
.box1{
	margin-bottom: 0.2rem;
	width: 100vw;
	height: 90vw;
	.conBox{
		height: 85vh;
		overflow-y: scroll;
		overflow-x: hidden;
	}
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
	
	.topTitles{
		margin: 0 0 0 0.32rem;
		top: 3.5rem;
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
	
	.topTitleth{
		margin: 0 0 0 0.32rem;
		top: 6rem;
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
	
		.topTitlef{
		margin: 0 0 0 0.32rem;
		top: 8.42rem;
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
	
	.topTitlefi{
		margin: 0 0 0 0.32rem;
		top: 14rem;
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
	.info{
		position: relative;
		.total{
			width: 100vw;
			font-size: 0.28rem;
			color: #767676;
			font-weight: bold;
			position: absolute;
			left: 0.32rem;
			top: 2.80rem;
		}
		span{
			margin-left: 1.4rem;
		}
		.o{
			position: absolute;
			left: 0.32rem;
			top: -0.48rem;
		}
		.t{
			position: absolute;
			left: 0.32rem;
			top: 0.24rem;
		}
		.th{
			position: absolute;
			top: 0.98rem;
			left: 0.32rem;
		}
	}
	.con{
		position: relative;
		span{
			margin-left: 1.38rem;
		}
		.total{
			font-size: 0.28rem;
			color: #767676;
			font-weight: bold;
			position: absolute;
			left: 0.32rem;
			top: 5.4rem;
		}
		
		.o{
			position: absolute;
			top: 2.92rem;
			left: 0.32rem;
		}
		.t{
			position: absolute;
			top: 3.66rem;
			left: 0.32rem;
		}
	}
	
	.con2{
		position: relative;
		span{
			margin-left: 1.4rem;
		}
		.total{
			font-size: 0.28rem;
			color: #767676;
			font-weight: bold;
			position: absolute;
			left: 0.32rem;
			top: 7.8rem;
		}
		.o{
			position: absolute;
			top: 5.36rem;
			left: 0.32rem;
		}
		.t{
			position: absolute;
			top: 6.06rem;
			left: 0.32rem;
		}
	}
	
	.con3{
		position: relative;
		span{
			margin-left: 1.4rem;
		}
		.total{
			font-size: 0.28rem;
			color: #767676;
			font-weight: bold;
			position: absolute;
			left: 0.32rem;
			top: 7.8rem;
		}
		.o{
			position: absolute;
			top: 7.9rem;
			left: 0.32rem;
		}
		.t{
			position: absolute;
			top: 8.62rem;
			left: 0.32rem;
		}
		.th{
			position: absolute;
			top: 9.36rem;
			left: 0.32rem;
		}
		.f{
			position: absolute;
			top: 10.06rem;
			left: 0.32rem;
		}
		.fi{
			position: absolute;
			top: 10.76rem;
			left: 0.32rem;
		}
		.six{
			position: absolute;
			top: 11.48rem;
			left: 0.32rem;
		}
		.seven{
			position: absolute;
			top: 12.2rem;
			left: 0.32rem;
		}
	}
	
	.con4{
		position: relative;
		.o{
			position: absolute;
			top: 13.5rem;
			left: 0.32rem;
		}
		.t{
			position: absolute;
			top: 14.2rem;
			left: 0.32rem;
		}
		.th{
			position: absolute;
			top: 14.94rem;
			left: 0.32rem;
		}
	}
}
</style>