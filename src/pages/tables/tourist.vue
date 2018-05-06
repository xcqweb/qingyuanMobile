 <template>
	<div class="box14">
		<comtitle
			:titleData='computedTitle'
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
		<loading></loading>
	</div>
</template>

<script>
	import router from '@/router'
	import Bus from '@/common/bus'
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
				receviceTotal:0,
				groupTotals:0,
				leaveTotal:0,
			  	inputData1:{
			  		id:1,
			  		name:'接团数',
			  		inputType:'number',
			  		placeHolder:'请输入接团数量',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2.16rem',
			  		maright:'0.96rem'
				},
				inputData2:{
				  		id:1,
				  		name:'一日游',
				  		inputType:'number',
				  		placeHolder:'请输入一日游人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
			  			maright:'0.96rem'
				},
				inputData3:{
				  		id:1,
				  		name:'省外',
				  		inputType:'number',
				  		placeHolder:'游客人数',
				  		boxWidth:'2.06rem',
				  		inputWidth:'1.26rem',
				  		maright:'0.7rem'
				},
				inputData4:{
				  		id:1,
				  		name:'省内',
				  		inputType:'number',
				  		placeHolder:'游客人数',
				  		boxWidth:'2.06rem',
				  		inputWidth:'1.26rem',
				  		maright:'0.7rem'
				},
				inputData5:{
				  		id:1,
				  		name:'国际',
				  		inputType:'number',
				  		placeHolder:'游客人数',
				  		boxWidth:'2.06rem',
				  		inputWidth:'1.26rem',
				  		maright:'0.7rem'
				},
				inputData6:{
			  		id:1,
			  		name:'组团数',
			  		inputType:'number',
			  		placeHolder:'请输入接团数量',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2.16rem',
			  		maright:'0.96rem'
				},
				inputData7:{
				  		id:1,
				  		name:'省内游',
				  		inputType:'number',
				  		placeHolder:'游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem'
				},
				inputData8:{
			  		id:1,
			  		name:'省外游',
			  		inputType:'number',
			  		placeHolder:'请输入接团数量',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2.16rem',
				  	maright:'0.96rem'
				},
				inputData9:{
				  		id:1,
				  		name:'香港游',
				  		inputType:'number',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem'
				},
				inputData10:{
				  		id:1,
				  		name:'澳门游',
				  		inputType:'number',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem'
				},
				inputData11:{
				  		id:1,
				  		name:'出国游',
				  		inputType:'number',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem'
				},
				inputData12:{
				  		id:1,
				  		name:'欧洲游',
				  		inputType:'number',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem'
				},
				inputData13:{
				  		id:1,
				  		name:'营业额(万元)',
				  		inputType:'number',
				  		placeHolder:'请输入当日营业额(单位万元)',
				  		boxWidth:'6.86rem',
				  		inputWidth:'5.1rem',
				  		maright:'1.66rem'
				},
			
		}
	 },
	 methods:{
	 	getOne(val){
	 		this.r1 = val
	 	},
	 	getTwo(val){
	 		this.r2 = val
	 	},
	 	getThree(val){
	 		this.r3 = val
	 	},
	 	getFour(val){
	 		this.r4 = val
	 	},
	 	getFive(val){
	 		this.r5 = val
	 	},
	 	getSix(val){
	 		this.r6 = val
	 	},
	 	getSeven(val){
	 		this.r7 = val
	 	},
	 	getEight(val){
	 		this.r8 = val
	 	},
	 	getNine(val){
	 		this.r9 = val
	 	},
	 	getTen(val){
	 		this.r10 = val
	 	},
	 	getEl(val){
	 		this.r11 = val
	 	},
	 	getTw(val){
	 		this.r12 = val
	 	},
	 	getThreen(val){
	 		this.r13 = val
	 	},
	 	getFourteen(val){
	 		this.r14 = val
	 	},
	 	sendData(params){
	 		this.$store.commit('COMMIT_LOADING',true)
				this.$axios.post(API_URL+'/mobile/agenct/add',params).then( r => {
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
						},1500)
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
						},1500)
					}
				})
		},
		send(){
				this.receviceTotal = Number(this.r1)+Number(this.r2)+Number(this.r3)
				this.groupTotals = Number(this.r4)+Number(this.r5)
				this.leaveTotal = Number(this.r6)+Number(this.r7)+Number(this.r8)+Number(this.r9)
				let users = JSON.parse(window.sessionStorage.getItem('users'))
				let params = new FormData()
		  		params.append('groupReceptionNum',this.r11)
		  		params.append('personReceptionNum',this.receviceTotal)
		  		params.append('outProvinces',this.r1)
		  		params.append('inProvinces',this.r2)
		  		params.append('internationalNum',this.r3)
		  		params.append('personOneDayNum',this.r14)
		  		params.append('groupNum',this.r13)
		  		params.append('acceptGroupNum',this.groupTotals)
		  		params.append('groupOutProvincesNum',this.r4)
		  		params.append('groupInProvincesNum',this.r5)
		  		params.append('leaveTheCountryNum',this.leaveTotal)
		  		params.append('hongkongNum',this.r6)
		  		params.append('macauNum',this.r7)
		  		params.append('outCountryNum',this.r8)
		  		params.append('europeNum',this.r9)
		  		params.append('groupOneDayNum',this.r12)
		  		params.append('revenue',this.r10)
		  		params.append('companyName',users.companyname)
		  		params.append('userCode',users.username)
		  		params.append('date',this.$store.state.commitDate)
		  		params.append('type',this.$store.state.type)
				this.sendData(params)
			},
	 },
	 mounted(){
			Bus.$on('sendData',() => {
				this.send()
			});
			
			Bus.$on('checkData',() => {
				if(!this.r1 || !this.r2 ||!this.r3||!this.r4||!this.r5||!this.r6||!this.r7||!this.r8||!this.r9||!this.r10||!this.r11||!this.r12||!this.r13||!this.r14){
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
			});
			
			window.onload = () => {
				router.replace('golden')
			};
		},
	 computed:{
	 	receviveTotal(){
	 		return Number(this.r1)+Number(this.r2)+Number(this.r3)
	 	},
	 	groupTotal(){
	 		return Number(this.r4) + Number(this.r5)
	 	},
	 	boardTotal(){
	 		return Number(this.r6) + Number(this.r7)+Number(this.r8) + Number(this.r9)
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
	 },
	}
</script>

<style scoped lang="less">
.box14{
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	.topTitle{
		margin: 0.4rem 0 0 0;
		left: 0.32rem;
		width: 100vw;
		position: absolute;
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
		top: 0.8rem;
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
		top: 2.66rem;
		.total{
			font-size: 0.28rem;
			color: #3C3C3C;
			font-weight: bold;
			position: absolute;
			left: 0.32rem;
			top: -0.10rem;
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
		margin: 3.1rem 0 0 0;
		width: 100vw;
		left: 0.32rem;
		position: absolute;
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
		top: 3.6rem;
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
		top: 5.48rem;
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
		top: 9.26rem;
		left: 0.32rem;
		width: 100vw;
		position: absolute;
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
		top: 8.9rem;
	}
}
</style>