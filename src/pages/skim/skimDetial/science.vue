<template>
	<div class="box13" v-show="!$store.state.isLoading">
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
				<inputs
					class='o'
					:inputData='inputData3'
				></inputs>
				<inputs
					class='tw'
					:inputData='inputData4'
				></inputs>
				<p class="total">同比: <span>{{t1}}</span></p>
				<inputs
					class='th'
					:inputData='inputData5'
				></inputs>
				<inputs
					class='f'
					:inputData='inputData6'
				></inputs>
				<p class="totals">同比: <span>{{t2}}</span></p>
				
				<inputs
					class='se'
					:inputData='inputData7'
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
				t1:'',
				t2:'',
				companyname:'',
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
			  		right:'-0.2rem',
			  		left:'-0.05rem',
			  		disable:true,
			  		num:''
				},
				inputData3:{
			  		id:3,
			  		name:'当日景区接待人数(人天)',
			  		inputType:'Number',
			  		placeHolder:'请输入当日景区接待人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData4:{
			  		id:3,
			  		name:'去年同期人数(人天)',
			  		inputType:'Number',
			  		placeHolder:'请输入去年同期人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData5:{
			  		id:3,
			  		name:'当日景区收入(万元)',
			  		inputType:'Number',
			  		placeHolder:'请输入当日景区收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData6:{
			  		id:3,
			  		name:'去年同期数(万元)',
			  		inputType:'Number',
			  		placeHolder:'请输入去年同期收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData7:{
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
						this.companyname = reData.userName
						this.inputData1.num = reData.inputer
						this.inputData2.num = reData.contactPhone
						this.inputData3.num = reData.recPerson
						this.inputData4.num = reData.lastYearRecPerson
						this.inputData5.num = reData.income
						this.inputData6.num = reData.lastYearIncome
						this.inputData7.num = reData.description
						this.t1 = reData.personPercent
						this.t2 = reData.incomePercent
					}
				})
		  		
			}
		},
		mounted(){
			let params = {
				userType:this.$store.state.skimData.usertype,
				userCode:this.$store.state.skimData.usercode,
				date:this.$store.state.skimData.date,
			}
			this.getData(params)
			
			window.onload = () => {
				router.replace('golden')
			};
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
.box13{
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
			top: 2.76rem;
		}
		.totals{
			font-size: 0.28rem;
			color: #767676;
			font-weight: bold;
			position: absolute;
			left: 0.32rem;
			top: 4.9rem;
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
			top: 0.36rem;
			left: 0.32rem;
		}
		.tw{
			position: absolute;
			top: 1.06rem;
			left: 0.32rem;
		}
		.th{
			position: absolute;
			top: 2.36rem;
			left: 0.32rem;
		}
		.f{
			position: absolute;
			top: 3.06rem;
			left: 0.32rem;
		}
		.se{
			position: absolute;
			top: 4.6rem;
			left: 0.32rem;
		}
	}
}
</style>