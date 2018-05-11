<template>
	<div class="box12" v-show="!$store.state.isLoading">
		<comtitle
			:titleData='computedTitle'
		></comtitle>
		<div class="conBox">
			<div class="con">
				<inputs
					class='o1'
					:inputData='inputData1'
				></inputs>
				<inputs
					class='t1'
					:inputData='inputData2'
				></inputs>
				<p class="total">接待人数(人天): <span>{{t1}}</span></p>
				<inputs
					class='o'
					:inputData='inputData3'
				></inputs>
				<inputs
					class='tw'
					:inputData='inputData4'
				></inputs>
				<inputs
					class='th'
					:inputData='inputData5'
				></inputs>
				<inputs
					class='f'
					:inputData='inputData6'
				></inputs>
				<inputs
					class='fi'
					:inputData='inputData7'
				></inputs>
				<inputs
					class='s'
					:inputData='inputData8'
				></inputs>
				
				<inputs
					class='se'
					:inputData='inputData9'
				></inputs>
				<loading></loading>
			</div>
		</div>
	</div>
</template>

<script>
	import router from '@/router'
	import Bus from '@/common/bus'
	export default{
		data(){
			return{
				companyname:'',
				t1:'',
			  	inputData1:{
			  		id:2,
			  		name:'填报人',
			  		inputType:'text',
			  		placeHolder:'请输入填报人',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  			disable:true,
			  			num:''
				},
				inputData2:{
			  		id:2,
			  		name:'联系电话',
			  		inputType:'Number',
			  		placeHolder:'请输入联系电话',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		right:'-0.2rem',
			  		left:'-0.05rem',
			  			disable:true,
			  			num:''
				},
				inputData3:{
			  		id:3,
			  		name:'国内(人天)',
			  		inputType:'Number',
			  		placeHolder:'请输入接待国内游客人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  			disable:true,
			  			num:''
				},
				inputData4:{
			  		id:3,
			  		name:'国际(人天)',
			  		inputType:'Number',
			  		placeHolder:'请输入接待国际游客人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  			disable:true,
			  			num:''
				},
				inputData5:{
			  		id:3,
			  		name:'营业收入(万元)',
			  		inputType:'Number',
			  		placeHolder:'请输入今日营业收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  			num:''
				},
				inputData6:{
			  		id:3,
			  		name:'平均房价(元)',
			  		inputType:'Number',
			  		placeHolder:'请输入平均房价',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  			num:''
				},
				inputData7:{
			  		id:3,
			  		name:'开房率(%)',
			  		inputType:'Number',
			  		placeHolder:'请输入开房率',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  			num:''
				},
				inputData8:{
			  		id:3,
			  		name:'实际出租客房(间)',
			  		inputType:'Number',
			  		placeHolder:'请输入实际出租客房',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  			num:''
				},
				inputData9:{
			  		id:4,
			  		name:'当日接待情况总体概述',
			  		inputType:'text',
			  		placeHolder:'请输入当日接待情况总体概述',
			  		boxWidth:'6.86rem',
			  		inputWidth:'6.62rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:'暂无'
				},
			}
		},
		methods:{
			getData(params){
				this.$store.commit('COMMIT_LOADING',true)
				this.$axios.get(API_URL+'/mobile/mobileMgr/weekDetail',{params:params}).then( r => {
					if(!r){
						return
					}
					if(r.data.code==='200' || r.data.code===200){
						this.$store.commit('COMMIT_LOADING',false)
						let reData = r.data.data.list
						this.companyname = reData.companyName
						this.inputData1.num = reData.inputer
						this.inputData2.num = reData.contactPhone
						this.inputData3.num = reData.inCountryNum
						this.inputData4.num = reData.outCountryNum
						this.inputData5.num = reData.revenue
						this.inputData6.num = reData.avgHousePrices
						this.inputData7.num = reData.houseUsePersent
						this.inputData8.num = reData.actualRentalQuantity
						this.t1 = reData.totalAcceptNum
					}
				})
			}
		},
		created(){
			window.onload = () => {
				router.replace('golden')
			}
			let params = {
				userType:this.$store.state.skimData.usertype,
				userCode:this.$store.state.skimData.usercode,
				date:this.$store.state.skimData.date,
			}
			this.getData(params)
		},
		computed:{
			computedTitle(){
				return {
			  			title:this.companyname ,
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
.box12{
	.conBox{
		width: 100vw;
		height: 90vh;
		overflow: hidden;
	}
	.con{
		position: relative;
		span{
			margin-left: 0.5rem;
		}
		.total{
			font-size: 0.28rem;
			color: #767676;
			font-weight: bold;
			position: absolute;
			left: 0.32rem;
			top: 1.36rem;
		}
		
		.o1{
			position: absolute;
			left: 0.32rem;
			top: -0.64rem;
		}
		.t1{
			position: absolute;
			left: 3.76rem;
			top: -0.64rem;
		}
		
		.o{
			position: absolute;
			top: 1rem;
			left: 0.32rem;
		}
		.tw{
			position: absolute;
			top: 1.7rem;
			left: 0.32rem;
		}
		.th{
			position: absolute;
			top: 2.4rem;
			left: 0.32rem;
		}
		.f{
			position: absolute;
			top: 3.1rem;
			left: 0.32rem;
		}
		.fi{
			position: absolute;
			top: 3.8rem;
			left: 0.32rem;
		}
		.s{
			position: absolute;
			z-index: 100;
			top: 4.5rem;
			left: 0.32rem;
		}
		.se{
			position: absolute;
			top: 5.42rem;
			left: 0.32rem;
		}
	}
}
</style>