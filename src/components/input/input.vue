/* 配置参数
 	inputData1:{
  		id:1,     //类型
  		name:'接团数', 
  		inputType:'text',
  		placeHolder:'请输入接团数量',
  		boxWidth:'3.26rem',
  		inputWidth:'2.26rem',
  		maright:'0.96rem'
	}
 */


<template>
	<div class="box7">
		<!--类型一-->
		<div class="one" :style="{width:inputData.boxWidth}" :class="{outlines:isOutline}" v-show="inputData.id===1">
			<label for="Oinput">{{inputData.name}}</label>
			<input :type="inputData.inputType" id="Oinput" :style="{width:inputData.inputWidth,marginLeft:inputData.maright}" @focus="foc" @blur="bl" :placeholder="inputData.placeHolder" v-model="val" @keyup="transform" v-if="!inputData.disable"/>
			<input :type="inputData.inputType" id="Oinput" :style="{width:inputData.inputWidth,marginLeft:inputData.maright}" v-model="inputData.num" readonly="readonly" v-else/>
		</div>
		<!--.类型二文本-->
		<div class="two" :style="{width:inputData.boxWidth}" v-show="inputData.id===2">
			<label for="Oinput2" :style="{left:inputData.left}">{{inputData.name}}</label>
			<input :type="inputData.inputType" id="Oinput2" :style="{width:inputData.inputWidth,marginLeft:inputData.maright,right:inputData.right}" @focus="foc" @blur="bl" :placeholder="inputData.placeHolder" v-model="val" v-if="!inputData.disable" />
			<input :type="inputData.inputType" id="Oinput2" :style="{width:inputData.inputWidth,marginLeft:inputData.maright,right:inputData.right}" v-model="inputData.num" v-else readonly="readonly"/>
		</div>
		
		<div class="three" :style="{width:inputData.boxWidth}" v-show="inputData.id===3">
			<label for="Oinput2">{{inputData.name}}</label>
			<input :type="inputData.inputType" id="Oinput2" :style="{width:inputData.inputWidth,marginLeft:inputData.maright}" @focus="foc" @blur="bl" :placeholder="inputData.placeHolder" v-model="val" @keyup="transform" v-if="!inputData.disable" />
			<input :type="inputData.inputType" id="Oinput2" :style="{width:inputData.inputWidth,marginLeft:inputData.maright}" v-model="inputData.num" readonly="readonly"  v-else />
		</div>
		
		<div class="four" :style="{width:inputData.boxWidth}" v-show="inputData.id===4">
			<label for="Oinput2">{{inputData.name}}</label>
			<textarea :type="inputData.inputType" id="Oinput2" :style="{width:inputData.inputWidth,marginLeft:inputData.maright}" @focus="foc" @blur="bl" :placeholder="inputData.placeHolder" v-model="val" v-if="!inputData.disable"></textarea>
			<textarea :type="inputData.inputType" id="Oinput2" :style="{width:inputData.inputWidth,marginLeft:inputData.maright}" readonly="readonly" v-model="inputData.num" v-else></textarea>
			
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'inputs',
		data(){
			return{
				isOutline:false,
				val:''
			}
		},
		watch:{
			val:function(v){
				
				if(this.inputData.id===4 || this.inputData.id===2){
					this.val = v	
				}
				this.$emit('sendVal',this.val)
			}
		},
		props:{
			inputData:Object
		},
		methods:{
			foc(){
				this.isOutline = true;
			},
			bl(){
				this.isOutline = false;
			},
			transform(){
				if(!/[0-9]/.test(Number(this.val))){
					this.val = 0
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
 .box7{
 	margin-top: 1rem;
 	border: none;
 	.one{
 		position: relative;
 		border: 0.03rem solid rgba(21,21,21,0.28);
 		border-radius: 0.04rem;
 		height: 0.58rem;
 		box-sizing: border-box;
		label{
			font-size: 0.24rem;
			color: #000;
			font-weight: bold;
			position: absolute;
			z-index: 10;
			height: 0.58rem;
			line-height: 0.58rem;
			margin-left: 0.1rem;
		}
		input{
			position: absolute;
			font-size: 0.24rem;
			height: 0.34rem;
			border: none;
			top: 0.04rem;
			outline: none;
			background-color: transparent;
		}
		input::-webkit-input-placeholder{
			font-size: 0.24rem;
			color: rgba(211,211,211,1);
		}
 	}
 	
 	.two{
 		position: relative;
 		border-radius: 0.04rem;
 		height: 0.58rem;
		label{
			font-size: 0.28rem;
			color: #717171;
			font-weight: bold;
			position: absolute;
			left: 0;
			top: 0.1rem;
			z-index: 10;
			height: 0.54rem;
			line-height: 0.54rem;
		}
		input{
			position: absolute;
			font-size: 0.24rem;
			height: 0.5rem;
			top: 0.04rem;
			border: 0.03rem solid rgba(21,21,21,0.28);
			outline: #1CB394;
			padding-left: 0.16rem;
			border-radius: 0.04rem;
			background-color: transparent;
		}
		input::-webkit-input-placeholder{
			font-size: 0.24rem;
			color: rgba(211,211,211,1);
		}
 	}
 	
 	.three{
 		position: relative;
 		border-radius: 0.04rem;
 		height: 0.58rem;
		label{
			font-size: 0.28rem;
			color: #717171;
			font-weight: bold;
			position: absolute;
			left: 0;
			top: 0.05rem;
			z-index: 10;
			height: 0.54rem;
			line-height: 0.54rem;
		}
		input{
			position: absolute;
			font-size: 0.24rem;
			right: 0;
			top: 0.04rem;
			height: 0.5rem;
			border: 0.03rem solid rgba(21,21,21,0.28);
			outline: #1CB394;
			padding-left: 0.16rem;
			border-radius: 0.04rem;
			background-color: transparent;
		}
		input::-webkit-input-placeholder{
			font-size: 0.24rem;
			color: rgba(211,211,211,1);
		}
 	}
 	
 	.four{
 		position: relative;
 		border-radius: 0.04rem;
 		height: 0.58rem;
		label{
			font-size: 0.28rem;
			color: #717171;
			font-weight: bold;
			position: absolute;
			left: 0;
			z-index: 10;
			height: 0.54rem;
			line-height: 0.54rem;
		}
		textarea{
			position: absolute;
			font-size: 0.24rem;
			left: -0.96rem;
			top: 0.6rem;
			height: 3.16rem;
			border: 0.03rem solid rgba(21,21,21,0.28);
			outline: #1CB394;
			padding-left: 0.16rem;
			border-radius: 0.04rem;
			background-color: transparent;
		}
		textarea::-webkit-input-placeholder{
			font-size: 0.24rem;
			color: rgba(211,211,211,1);
		}
 	}
 	.outlines{
 		border: 0.03rem solid #1CB394;
 	}
}
</style>