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
	<div class="box">
		<!--类型一-->
		<div class="one" :style="{width:inputData.boxWidth}" :class="{outlines:isOutline}" v-show="inputData.id===1">
			<label for="Oinput">{{inputData.name}}</label>
			<input :type="inputData.inputType" id="Oinput" :style="{width:inputData.inputWidth,marginLeft:inputData.maright}" @focus="foc" @blur="bl" :placeholder="inputData.placeHolder" v-model="val" @keyup="transform"/>
		</div>
		<!--.类型二文本-->
		<div class="two" :style="{width:inputData.boxWidth}" v-show="inputData.id===2">
			<label for="Oinput2">{{inputData.name}}</label>
			<input :type="inputData.inputType" id="Oinput2" :style="{width:inputData.inputWidth,marginLeft:inputData.maright,right:inputData.right}" @focus="foc" @blur="bl" :placeholder="inputData.placeHolder" v-model="val" />
		</div>
		
		<div class="three" :style="{width:inputData.boxWidth}" v-show="inputData.id===3">
			<label for="Oinput2">{{inputData.name}}</label>
			<input :type="inputData.inputType" id="Oinput2" :style="{width:inputData.inputWidth,marginLeft:inputData.maright}" @focus="foc" @blur="bl" :placeholder="inputData.placeHolder" v-model="val" @keyup="transform"/>
		</div>
		
		<div class="four" :style="{width:inputData.boxWidth}" v-show="inputData.id===4">
			<label for="Oinput2">{{inputData.name}}</label>
			<textarea :type="inputData.inputType" id="Oinput2" :style="{width:inputData.inputWidth,marginLeft:inputData.maright}" @focus="foc" @blur="bl" :placeholder="inputData.placeHolder" v-model="val"></textarea>
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
				this.val = ~~v
				this.$emit('sendVal',~~v)
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

<style scoped lang="less">
 .box{
 	margin-top: 1rem;
 	border: none;
 	.one{
 		position: relative;
 		border: 0.02rem solid rgba(21,21,21,0.28);
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
			margin-top: 0.10rem;
			border: none;
			outline: none;
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
			z-index: 10;
			height: 0.54rem;
			line-height: 0.54rem;
		}
		input{
			position: absolute;
			font-size: 0.24rem;
			height: 0.5rem;
			border: 0.02rem solid rgba(21,21,21,0.28);
			outline: #1CB394;
			padding-left: 0.16rem;
			border-radius: 0.04rem;
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
			z-index: 10;
			height: 0.54rem;
			line-height: 0.54rem;
		}
		input{
			position: absolute;
			font-size: 0.24rem;
			right: 0;
			height: 0.5rem;
			border: 0.02rem solid rgba(21,21,21,0.28);
			outline: #1CB394;
			padding-left: 0.16rem;
			border-radius: 0.04rem;
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
			border: 0.02rem solid rgba(21,21,21,0.28);
			outline: #1CB394;
			padding-left: 0.16rem;
			border-radius: 0.04rem;
		}
		textarea::-webkit-input-placeholder{
			font-size: 0.24rem;
			color: rgba(211,211,211,1);
		}
 	}
 	.outlines{
 		border: 0.02rem solid #1CB394;
 	}
}
</style>