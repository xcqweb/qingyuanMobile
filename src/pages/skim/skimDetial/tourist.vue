 <template>
	<div class="box14" v-show="!$store.state.isLoading">
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
			></inputs>
			<inputs
				class='t'
				:inputData='inputData2'
			></inputs>
		</div>
		
		<div class="cont">
			<p class="total">接待总人数: {{t1}}</p>
			<inputs
				class='o'
				:inputData='inputData3'
			></inputs>
			<inputs
				class='t'
				:inputData='inputData4'
			></inputs>
			<inputs
				class='th'
				:inputData='inputData5'
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
			></inputs>
			<inputs
				class='t'
				:inputData='inputData14'
			></inputs>
		</div>
		<div class="cont2">
			<p class="total">组团总人数:{{t2}} </p>
			<inputs
				class='o'
				:inputData='inputData7'
			></inputs>
			<inputs
				class='t'
				:inputData='inputData8'
			></inputs>
			
			<p class="boardtotal">出境游: {{t3}}</p>
			<inputs
				class='th'
				:inputData='inputData9'
			></inputs>
			<inputs
				class='f'
				:inputData='inputData10'
			></inputs>
			<inputs
				class='fi'
				:inputData='inputData11'
			></inputs>
			<inputs
				class='s'
				:inputData='inputData12'
			></inputs>
		</div>
		
		<div class="bottomTitle2">
			<span></span>
			<p>营业收入</p>
		</div>
		<inputs
			class='e'
			:inputData='inputData13'
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
				companyname:'',
				t1:'',
				t2:'',
				t3:'',
			  	inputData1:{
			  		id:1,
			  		name:'接团数',
			  		inputType:'Number',
			  		placeHolder:'请输入接团数量',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2.16rem',
			  		maright:'0.96rem',
			  		disable:true,
			  		num:''
				},
				inputData2:{
				  		id:1,
				  		name:'一日游',
				  		inputType:'Number',
				  		placeHolder:'请输入一日游人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
			  			maright:'0.96rem',
			  			disable:true,
			  			num:''
				},
				inputData3:{
				  		id:1,
				  		name:'省外',
				  		inputType:'Number',
				  		placeHolder:'游客人数',
				  		boxWidth:'2.06rem',
				  		inputWidth:'1.26rem',
				  		maright:'0.7rem',
			  			disable:true,
			  			num:''
				},
				inputData4:{
				  		id:1,
				  		name:'省内',
				  		inputType:'Number',
				  		placeHolder:'游客人数',
				  		boxWidth:'2.06rem',
				  		inputWidth:'1.26rem',
				  		maright:'0.7rem',
			  			disable:true,
			  			num:''
				},
				inputData5:{
				  		id:1,
				  		name:'国际',
				  		inputType:'Number',
				  		placeHolder:'游客人数',
				  		boxWidth:'2.06rem',
				  		inputWidth:'1.26rem',
				  		maright:'0.7rem',
			  			disable:true,
			  			num:''
				},
				inputData6:{
			  		id:1,
			  		name:'组团数',
			  		inputType:'Number',
			  		placeHolder:'请输入接团数量',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2.16rem',
			  		maright:'0.96rem',
		  			disable:true,
		  			num:''
				},
				inputData7:{
				  		id:1,
				  		name:'省内游',
				  		inputType:'Number',
				  		placeHolder:'游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem',
			  			disable:true,
			  			num:''
				},
				inputData8:{
			  		id:1,
			  		name:'省外游',
			  		inputType:'Number',
			  		placeHolder:'请输入接团数量',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2.16rem',
				  	maright:'0.96rem',
		  			disable:true,
		  			num:''
				},
				inputData9:{
				  		id:1,
				  		name:'香港游',
				  		inputType:'Number',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem',
			  			disable:true,
			  			num:''
				},
				inputData10:{
				  		id:1,
				  		name:'澳门游',
				  		inputType:'Number',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem',
			  			disable:true,
			  			num:''
				},
				inputData11:{
				  		id:1,
				  		name:'出国游',
				  		inputType:'Number',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem',
			  			disable:true,
			  			num:''
				},
				inputData12:{
				  		id:1,
				  		name:'欧洲游',
				  		inputType:'Number',
				  		placeHolder:'请输入游客人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
				  		maright:'0.96rem',
			  			disable:true,
			  			num:''
				},
				inputData13:{
				  		id:1,
				  		name:'营业额(万元)',
				  		inputType:'Number',
				  		placeHolder:'请输入当日营业额(单位万元)',
				  		boxWidth:'6.86rem',
				  		inputWidth:'5.1rem',
				  		maright:'1.66rem',
			  			disable:true,
			  			num:''
				},
				inputData14:{
				  		id:1,
				  		name:'一日游',
				  		inputType:'Number',
				  		placeHolder:'请输入一日游人数',
				  		boxWidth:'3.26rem',
				  		inputWidth:'2.16rem',
			  			maright:'0.96rem',
			  			disable:true,
			  			num:''
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
					this.inputData1.num = reData.groupReceptionNum
					this.inputData2.num = reData.groupOneDayNum
					
					this.inputData3.num = reData.outProvinces
					this.inputData4.num = reData.inProvinces
					
					this.inputData5.num = reData.internationalNum
					
					this.inputData6.num = reData.groupNum
					
					this.inputData7.num = reData.groupOutProvincesNum
					
					this.inputData8.num = reData.groupInProvincesNum
					this.inputData9.num = reData.hongkongNum
					this.inputData10.num = reData.macauNum
					
					this.inputData11.num = reData.outCountryNum
					this.inputData12.num = reData.europeNum
					
					this.inputData13.num = reData.revenue
					this.inputData14.num = reData.personOneDayNum
					
					this.t1 = reData.personReceptionNum
					this.t2 = reData.acceptGroupNum
					this.t3 = reData.leaveTheCountryNum
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
				date:this.$store.state.skimData.date,
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
		width: 80vw;
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
		width: 80vw;
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
		width: 80vw;
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