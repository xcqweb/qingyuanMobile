<template>
	<div class="box12">
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
				<p class="total">接待人数(人天): <span>{{reciviceTotal}}</span></p>
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
				<inputs
					class='fi'
					:inputData='inputData7'
					@sendVal='get7'
				></inputs>
				<inputs
					class='s'
					:inputData='inputData8'
					@sendVal='get8'
				></inputs>
				
				<inputs
					class='se'
					:inputData='inputData9'
					@sendVal='get9'
				></inputs>
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
				name:'',
				phone:'',
				r3:'',
				r4:'',
				r5:'',
				r6:'',
				r7:'',
				r8:'',
				r9:'',
				totalCount:0,
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
			  		maright:'0.96rem',
			  		right:'-0.2rem',
			  		left:'-0.05rem'
				},
				inputData3:{
			  		id:3,
			  		name:'国内(人天)',
			  		inputType:'number',
			  		placeHolder:'请输入接待国内游客人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData4:{
			  		id:3,
			  		name:'国际(人天)',
			  		inputType:'number',
			  		placeHolder:'请输入接待国际游客人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData5:{
			  		id:3,
			  		name:'营业收入(万元)',
			  		inputType:'number',
			  		placeHolder:'请输入今日营业收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData6:{
			  		id:3,
			  		name:'平均房价(元)',
			  		inputType:'number',
			  		placeHolder:'请输入平均房价',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData7:{
			  		id:3,
			  		name:'开房率(%)',
			  		inputType:'number',
			  		placeHolder:'请输入开房率',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData8:{
			  		id:3,
			  		name:'实际出租客房(间)',
			  		inputType:'number',
			  		placeHolder:'请输入实际出租客房',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
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
				},
			}
		},
		methods:{
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
			get8(val){
				this.r8 = val
			},
			get9(val){
				this.r9 = val
			},
			sendData(params){
				let _self = this
				this.$axios.post(API_URL+'/mobile/hotel/add',params).then( r => {
					if(r.data.code==='200' || r.data.code===200){
						this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'上报成功!',err:false})
						if(timer){
							clearTimeout(timer)
						}
						var timer = setTimeout ( () => {
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'上报成功!',err:false})
						},1000)
						window.setTimeout(() => {
							router.push('/')
						},1500)
					}
				})
			},
			send(){
				this.totalCount = Number(this.r3)+Number(this.r4)
				let users = JSON.parse(window.sessionStorage.getItem('users'))
				let params = new FormData()
		  		params.append('totalAcceptNum',this.totalCount)
		  		params.append('inCountryNum',this.r3)
		  		params.append('outCountryNum',this.r4)
		  		params.append('revenue',this.r5)
		  		params.append('avgHousePrices',this.r6)
		  		params.append('houseUsePersent',this.r7)
		  		params.append('actualRentalQuantity',this.r8)
		  		params.append('companyName',users.companyname)
		  		params.append('userCode',users.username)
		  		params.append('date',this.$store.state.commitDate)
		  		params.append('type',this.$store.state.type)
		  		params.append('inputer',this.name)
		  		params.append('contactPhone',this.phone)
		  		
				this.sendData(params)
			},
		},
		mounted(){
			Bus.$on('sendData',() => {
					this.send()
			})
			
			Bus.$on('checkData',() => {
				if(this.r3===''||this.r4===''||this.r5===''||this.r6===''||this.r7===''||this.r8===''||this.r9===''||this.name===''||this.phone===''){
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
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'',err:false})
							return
						}
					}
			})
			
			window.onload = () => {
				router.replace('golden')
			}
		},
		computed:{
			reciviceTotal(){
				return Number(this.r3)+Number(this.r4)
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
.box12{
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