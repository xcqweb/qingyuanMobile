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
					@sendVal='get1'
				></inputs>
				<inputs
					class='t'
					:inputData='inputData2'
					@sendVal='get2'
				></inputs>
				<inputs
					class='th'
					:inputData='inputData3'
					@sendVal='get3'
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
					@sendVal='get4'
				></inputs>
				
				<inputs
					class='t'
					:inputData='inputData5'
					@sendVal='get5'
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
					@sendVal='get6'
				></inputs>
				
				<inputs
					class='t'
					:inputData='inputData7'
					@sendVal='get7'
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
					@sendVal='get8'
				></inputs>
				
				<inputs
					class='t'
					:inputData='inputData9'
					@sendVal='get9'
				></inputs>
				
				<inputs
					class='th'
					:inputData='inputData10'
					@sendVal='get10'
				></inputs>
				
				<inputs
					class='f'
					:inputData='inputData11'
					@sendVal='get11'
				></inputs>
				<inputs
					class='fi'
					:inputData='inputData12'
					@sendVal='get12'
				></inputs>
				
				<inputs
					class='six'
					:inputData='inputData13'
					@sendVal='get13'
				></inputs>
				<inputs
					class='seven'
					:inputData='inputData14'
					@sendVal='get14'
				></inputs>
			</div>
			
			<div class="topTitlefi">
				<span></span>
				<p>景(区)点</p>
			</div>
			<div class="con4">
				<inputs
					class='o'
					:inputData='inputData15'
					@sendVal='get15'
				></inputs>
				
				<inputs
					class='t'
					:inputData='inputData16'
					@sendVal='get16'
				></inputs>
				
				<inputs
					class='th'
					:inputData='inputData17'
					@sendVal='get17'
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
				r1:'',
				r2:'',
				r3:'',
				r4:'',
				r5:'',
				r6:'',
				r7:'',
				r8:'',
				r9:'',
				r10:'',
				r11:'',
				r12:'',
				r13:'',
				r14:'',
				r15:'',
				r16:'',
				r17:'',
				t11:0,
				t22:0,
				t33:0,
			  	inputData1:{
			  		id:3,
			  		name:'接待总人数(万人次)',
			  		inputType:'number',
			  		placeHolder:'请输入当日接待总人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData2:{
			  		id:3,
			  		name:'旅游总收入(亿)',
			  		inputType:'number',
			  		placeHolder:'请输入当日旅游总收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData3:{
			  		id:3,
			  		name:'其中外汇收入(万美金)',
			  		inputType:'number',
			  		placeHolder:'请输入当日美金收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData4:{
			  		id:3,
			  		name:'接待总人数(万人次)',
			  		inputType:'number',
			  		placeHolder:'请输入接待总人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData5:{
			  		id:3,
			  		name:'旅游总收入(亿)',
			  		inputType:'number',
			  		placeHolder:'请输入当日旅游总收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData6:{
			  		id:3,
			  		name:'接待总人数(万人次)',
			  		inputType:'number',
			  		placeHolder:'请输入接待总人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData7:{
			  		id:3,
			  		name:'旅游总收入(亿)',
			  		inputType:'number',
			  		placeHolder:'请输入当日旅游总收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData8:{
			  		id:3,
			  		name:'接待总人数(万人次)',
			  		inputType:'number',
			  		placeHolder:'请输入过夜总人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData9:{
			  		id:3,
			  		name:'其中国内人数(万人次)',
			  		inputType:'number',
			  		placeHolder:'请输入国内总人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData10:{
			  		id:3,
			  		name:'其中境外总人数(万人次)',
			  		inputType:'number',
			  		placeHolder:'请输入境外总人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData11:{
			  		id:3,
			  		name:'直报系统中宾馆数(家)',
			  		inputType:'number',
			  		placeHolder:'请输入直报系统中宾馆数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData12:{
			  		id:3,
			  		name:'接待人数(万人)',
			  		inputType:'number',
			  		placeHolder:'请输入接待人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData13:{
			  		id:3,
			  		name:'其他社会宾馆数(家)',
			  		inputType:'number',
			  		placeHolder:'请输入其他社会宾馆数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData14:{
			  		id:3,
			  		name:'接待人数(万人)',
			  		inputType:'number',
			  		placeHolder:'请输入接待人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData15:{
			  		id:3,
			  		name:'接待总人数(万人)',
			  		inputType:'number',
			  		placeHolder:'请输入接待总人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData16:{
			  		id:3,
			  		name:'其中国内人数(万人)',
			  		inputType:'number',
			  		placeHolder:'请输入国内人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData17:{
			  		id:3,
			  		name:'其中境外人数(万人)',
			  		inputType:'number',
			  		placeHolder:'请输入境外人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'3.48rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
			}
		},
		watch:{
		},
		methods:{
			sendData(params){
				this.$store.commit('COMMIT_LOADING',true)
				this.$axios.post(API_URL+'/mobile/areaTourism/add',params).then( r => {
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
							router.replace('/golden')
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
							router.replace('/golden')
						},2000)
					}
				})
			},
			send(){
				
				let users = JSON.parse(window.sessionStorage.getItem('users')) || JSON.parse(getCookie('users'))
				let params = new FormData()
				let dates = this.$store.state.commitDate.split('-');
				let y = dates[0];
				let md = dates[1]+'-'+dates[2]
				this.t11 = (Number(this.r2)*10000/Number(this.r1?this.r1:1)).toFixed(2)
				this.t22 = (Number(this.r5)*10000/Number(this.r4?this.r4:1)).toFixed(2)
				this.t33 = (Number(this.r7)*10000/Number(this.r6?this.r6:1)).toFixed(2)
		  		params.append('travelRecPersonSum',this.r1)
		  		params.append('travelRecIncomeSum',this.r2)
		  		params.append('travelRecOutIncome',this.r3)
		  		params.append('travelRecCostAvg',this.t11)
		  		
		  		params.append('oneDayPersonSum',this.r4)
		  		params.append('oneDayIncomeSum',this.r5)
		  		params.append('oneDayCostAvg',this.t22)
		  		
		  		params.append('passNightPersonSum',this.r6)
		  		params.append('passNightIncomeSum',this.r7)
		  		params.append('passNightCostAvg',this.t33)
		  		
		  		
		  		params.append('hotelPersonSum',this.r8)
		  		params.append('hotelInSum',this.r9)
		  		params.append('hotelOutSum',this.r10)
		  		params.append('hotelSum',this.r11)
		  		params.append('hotelRecSum',this.r12)
		  		params.append('hotelOtherSum',this.r13)
		  		params.append('hotelOtherRecSum',this.r14)
		  		params.append('scenicPersonSum',this.r15)
		  		params.append('scenicInSum',this.r16)
		  		params.append('scenicOutSum',this.r17)
		  		
		  		
		  		params.append('userType',users.usertype)
		  		params.append('userCode',users.username)
		  		params.append('selDate',md)
		  		params.append('dataYear',y)
		  		params.append('userName',users.companyname)
		  		params.append('type',this.$store.state.type)
				this.sendData(params)
			},
			get1(val){
				if(val!=0){
					this.r1 = val
				}else{
					this.r1 =1
				}
			},
			get2(val){
				this.r2 = val
//				this.r1 = 1
			},
			get3(val){
				this.r3 = val
			},
			get4(val){
				if(val!=0){
					this.r4 = val
				}else{
					this.r4 =1
				}
				
			},
			get5(val){
				this.r5 = val
			},
			get6(val){
				if(val!=0){
					this.r6 = val
				}else{
					this.r6 =1
				}
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
			get10(val){
				this.r10 = val
			},
			get11(val){
				this.r11 = val
			},
			get12(val){
				this.r12 = val
			},
			get13(val){
				this.r13 = val
			},
			get14(val){
				this.r14 = val
			},
			get15(val){
				this.r15 = val
			},
			get16(val){
				this.r16 = val
			},
			get17(val){
				this.r17 = val
			},
		},
		mounted(){
			Bus.$on('sendData',() => {
				this.send()
			})
			
			Bus.$on('checkData',() => {
				if(this.r1===''||this.r2===''||this.r3===''||this.r4===''||this.r5===''||this.r6===''||this.r7===''||this.r8===''||this.r9===''||this.r10===''||this.r11===''||this.r12===''||this.r13===''||this.r14==='' || this.r15==='' || this.r16==='' || this.r17===''){
					//填写未完成时记录状态
					this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'填写未完成!',err:true})
					if(timer){
						clearTimeout(timer)
					}
					var timer = setTimeout ( () => {
						this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'填写未完成!',err:true})
					},1000)
					return;
				}else{
					if(!this.$store.state.confirm){ //点击确认后提交
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'填写未完成!',err:false})
							return
						}
				}
			})
			
			
			window.onload = () => {
				router.replace('golden')
			}
		},
		beforeDestroy(){
			this.$off('sendData')
			this.$off('checkData')
		},
		computed:{
			t1(){
				
				let n = (Number(this.r2)*10000/Number(this.r1?this.r1:1)).toFixed(2)
				return n
				
				
			},
			t2(){
				let n = (Number(this.r5)*10000/Number(this.r4?this.r4:1)).toFixed(2)
					return n
			},
			t3(){
				let n = (Number(this.r7)*10000/Number(this.r6?this.r6:1)).toFixed(2)
					return n
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