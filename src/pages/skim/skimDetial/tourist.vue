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
			></inputs>
			<inputs
				class='t'
				:inputData='inputData2'
			></inputs>
		</div>
		
		<div class="cont">
			<p class="total">接待总人数: </p>
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
				:inputData='inputData2'
			></inputs>
		</div>
		<div class="cont2">
			<p class="total">组团总人数: </p>
			<inputs
				class='o'
				:inputData='inputData7'
			></inputs>
			<inputs
				class='t'
				:inputData='inputData8'
			></inputs>
			
			<p class="boardtotal">出境游: </p>
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
	 	
	 },
	 mounted(){
			
		},
	 computed:{
	 	
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