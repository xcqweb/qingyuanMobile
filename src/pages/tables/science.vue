<template>
	<div class="box">
		<comtitle
			:titleData='titleData'
		></comtitle>
		<div class="info">
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
		</div>
		<div class="con">
			
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
</template>

<script>
	export default{
		data(){
			return{
				name:'',
				phone:'',
				r3:0,
				r4:1,
				r5:0,
				r6:1,
				r7:"",
				titleData:{
		  			title:'2018年春节前一天报表',
		  			bgcolor:'#4E76AC',
		  			showArrow:true,
		  			smallTitle:false
			  	},
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
			  		inputType:'text',
			  		placeHolder:'请输入联系电话',
			  		boxWidth:'3.26rem',
			  		inputWidth:'2rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
			  		right:'-0.2rem'
				},
				inputData3:{
			  		id:3,
			  		name:'国内(人天)',
			  		inputType:'text',
			  		placeHolder:'请输入接待国内游客人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData4:{
			  		id:3,
			  		name:'国际(人天)',
			  		inputType:'text',
			  		placeHolder:'请输入接待国际游客人数',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData5:{
			  		id:3,
			  		name:'营业收入(万元)',
			  		inputType:'text',
			  		placeHolder:'请输入今日营业收入',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
			  		inputHeight:'0.54rem',
			  		maright:'0.96rem',
				},
				inputData6:{
			  		id:3,
			  		name:'平均房价(元)',
			  		inputType:'text',
			  		placeHolder:'请输入平均房价',
			  		boxWidth:'6.86rem',
			  		inputWidth:'4.26rem',
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
		computed:{
			t1(){
				let n = (Number(this.r3)/Number(this.r4)).toFixed(2)
				if(n.toString()==='NaN' || n.toString()==='Infinity'){
					return "0.00%"
				}else{
					return n+"%"
				}
				
			},
			t2(){
				let n = (Number(this.r3)/Number(this.r4)).toFixed(2)
				if(n.toString()==='NaN' || n.toString()==='Infinity'){
					return "0.00%"
				}else{
					return n+"%"
				}
			}
		}
	}
</script>

<style scoped lang="less">
.box{
	.info{
		position: absolute;
		.o{
			position: absolute;
			left: 0.32rem;
			top: -0.64rem;
		}
		.t{
			position: absolute;
			left: 3.76rem;
			top: -0.64rem;
		}
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