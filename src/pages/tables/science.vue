<template>
	<div class="box13">
		<comtitle
			:titleData='computedTitle'
		></comtitle>
		<div class="conBox">
			<div class="con">
				<inputs
					class='o1'
					:inputData='inputData1'
					@sendVal='get1'
				></inputs>
				<inputs
					class='t1'
					:inputData='inputData2'
					@sendVal='get2'
				></inputs>
				<inputs
					class='o'
					:inputData='inputData3'
					@sendVal='get3'
				></inputs>
				<inputs
					class='tw'
					:inputData='inputData4'
					@sendVal='get4'
				></inputs>
				<p class="total">同比: <span>{{t1}}</span></p>
				<inputs
					class='th'
					:inputData='inputData5'
					@sendVal='get5'
				></inputs>
				<inputs
					class='f'
					:inputData='inputData6'
					@sendVal='get6'
				></inputs>
				<p class="totals">同比: <span>{{t2}}</span></p>
				
				<inputs
					class='se'
					:inputData='inputData7'
					@sendVal='get7'
				></inputs>
			</div>
		</div>
		<loading></loading>
	</div>
</template>

<script>
	import Bus from '@/common/bus'
	import router from '@/router'
	export default{
		data(){
			return{
				name:'',
				phone:'',
				r3:'',
				r4:'',
				r5:'',
				r6:'',
				r7:"",
			  	inputData1:{
			  		id:2,
			  		name:'填报人',
			  		inputType:'text',
			  		placeHolder:'请输入填报人',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem'
				},
				inputData2:{
			  		id:2,
			  		name:'联系电话',
			  		inputType:'number',
			  		placeHolder:'请输入联系电话',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2rem',
			  		inputHeight:'0.54rem',
//			  		maright:'0.96rem',
			  		right:'-0.2rem',
			  		left:'-0.05rem'
				},
				inputData3:{
			  		id:3,
			  		name:'当日景区接待人数(人天)',
			  		inputType:'number',
			  		placeHolder:'请输入当日景区接待人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData4:{
			  		id:3,
			  		name:'去年同期人数(人天)',
			  		inputType:'number',
			  		placeHolder:'请输入去年同期人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData5:{
			  		id:3,
			  		name:'当日景区收入(万元)',
			  		inputType:'number',
			  		placeHolder:'请输入当日景区收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData6:{
			  		id:3,
			  		name:'去年同期数(万元)',
			  		inputType:'number',
			  		placeHolder:'请输入去年同期收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
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
				},
			}
		},
		watch:{
			r4:function(val){
				if(val===0){
					this.r4 = 1
				}
			},
			r6:function(val){
				if(val===0){
					this.r6 = 1
				}
			}
		},
		methods:{
			sendData(params){
				this.$store.commit('COMMIT_LOADING',true)
				this.$axios.post(API_URL+'/mobile/science/add',params).then( r => {
					if(!r){
						this.$store.commit('COMMIT_LOADING',false)
						this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'上报失败!',err:true})
						if(timer){
							clearTimeout(timer)
						}
						var timer = setTimeout ( () => {
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'上报失败!',err:true})
						},1000)
						window.setTimeout(() => {
							router.push('/')
						},2000)
						return;
					}
					if(r.data.code==='200' || r.data.code===200){
						this.$store.commit('COMMIT_LOADING',false)
						this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'上报成功!',err:false})
						if(timer){
							clearTimeout(timer)
						}
						var timer = setTimeout ( () => {
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'上报成功!',err:false})
						},1000)
						window.setTimeout(() => {
							router.push('/')
						},2000)
					}
				})
				
			},
			send(){
				let users = JSON.parse(window.sessionStorage.getItem('users'))
				let params = new FormData()
		  		params.append('recPerson',this.r3)
		  		params.append('lastYearRecPerson',this.r4)
		  		params.append('personPercent',Number(this.r3)*100/Number(this.r4))
		  		params.append('income',this.r5)
		  		params.append('lastYearIncome',this.r6)
		  		params.append('incomePercent',Number(this.r5)*100/Number(this.r6))
		  		params.append('description',this.r7)
		  		params.append('userName',users.companyname)
		  		params.append('userCode',users.username)
		  		params.append('date',this.$store.state.commitDate)
		  		params.append('type',this.$store.state.type)
		  		params.append('inputer',this.name)
		  		params.append('contactPhone',this.phone)
				this.sendData(params)
			},
			get1(val){
				this.name = val
			},
			get2(val){
				this.phone = val
			},
			get3(val){
				this.r3 = val
			},
			get4(val){
				this.r4 = val
			},
			get5(val){
				this.r5 = val
			},
			get6(val){
				this.r6 = val
			},
			get7(val){
				this.r7 = val
			},
		},
		mounted(){
			Bus.$on('sendData',() => {
				this.send()
			})
			
			Bus.$on('checkData',() => {
				if(!this.r3||!this.r4||!this.r5||!this.r6||!this.r7||!this.name||!this.phone){
					this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'填写未完成!',err:true})
						if(timer){
							clearTimeout(timer)
						}
						var timer = setTimeout ( () => {
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'填写未完成!',err:true})
						},1000)
						
						return;
					}else{
						if(!this.$store.state.confirm){
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'填写未完成!',err:false})
							return
						}
					}
			})
			
			window.onload = () => {
				router.replace('golden')
			};
		},
		computed:{
			t1(){
				this.r4 = this.r4?this.r4:1
				let n = (Number(this.r3)*100/Number(this.r4)).toFixed(2)
					return n+"%"
			},
			t2(){
				this.r6 = this.r6?this.r6:1
				let n = (Number(this.r5)*100/Number(this.r6)).toFixed(2)
					return n+"%"
			},
			computedTitle(){
				let types = '';
				if(this.$store.state.type===1){
					types = '国庆'
				}else{
					types = '春节'
				}
				return {
			  			title:`${this.$store.state.chooseYear}年${types}${this.$store.state.days}报表` ,
			  			bgcolor:'#4E76AC',
			  			showArrow:true,
			  			smallTitle:false,
			  			showBack:true,
			  			showUser:false
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
		overflow: scroll;
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