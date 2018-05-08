<template>
	<div class="selectGroup">
		<div class="titles1">单位</div>
		<div class="selectBox1" @click='showList1($event)'>
			<p class="title" id="dateBox1">{{choose1}}</p>
			<span class="up"></span>
			<span class="down"></span>
		</div>
		
		<div class="titles2">类型</div>
		<div class="selectBox2" @click='showList2($event)'>
			<p class="title" id="dateBox2">{{choose2}}</p>
			<span class="up"></span>
			<span class="down"></span>
		</div>
		
		<div class="titles3">年份</div>
		<div class="selectBox3" @click='showList3($event)'>
			<p class="title" id="dateBox3">{{choose3}}</p>
			<span class="up"></span>
			<span class="down"></span>
		</div>
		
		<div class="titles4">时间</div>
		<div class="selectBox4" @click='showList4($event)'>
			<p class="title" id="dateBox4">{{choose4}}</p>
			<span class="up"></span>
			<span class="down"></span>
		</div>
		
		<div class="titles5">关键字</div>
		<div class="selectBox5">
			<input class="title" id="dateBox5" v-model="choose5"/>
			<span class="search" @click='showList5($event)'></span>
		</div>
	</div>
</template>

<script>
	import MobileSelect from 'byted-mobile-select'
	import calendarTransform from '@/plugin/calendarTransform.js'
	let date = new Date();
	let year = date.getFullYear();
	let curMonth = date.getMonth()+1;
	let curDay = date.getDate();
	let yearData=[];
	for(let i=0; i<7; i++){
		yearData[i] = year-i
	}
	export default{
		data(){
			return{
				DataList1:['旅行社','宾馆酒店','景点','重点景区','各区旅游局'],
				DataList2:['国庆','春节'],
				DataList4:['前一天','前二天','前三天','前四天','前五天','前六天','前七天','前八天','前九天','前十天'],
				choose1:'旅行社',
				choose2:'国庆',
				choose3:'2018',
				choose4:'前一天',
				choose5:'',
				dIndex1:0,
				dIndex2:0,
				dIndex3:0,
				dIndex4:0,
				mySelect1:null,
				mySelect2:null,
				mySelect3:null,
				mySelect4:null,
			}
		},
		methods:{
			switchDate(val){
				let str ='';
				switch(val){
					case '前一天':
					let infos1 = calendarTransform.lunar2solar(this.choose3-1,12,30,false)
					str =  `${infos1.cMonth}-${infos1.cDay},`;
					break;
					
					case '前二天':
					let infos2 = calendarTransform.lunar2solar(this.choose3,1,1,false)
					str =  `${infos2.cMonth}-${infos2.cDay},`;
					break;
					
					case '前三天':
					let infos3 = calendarTransform.lunar2solar(this.choose3,1,2,false)
					str =  `${infos3.cMonth}-${infos3.cDay},`;
					break;
					
					case '前四天':
					let infos4 = calendarTransform.lunar2solar(this.choose3,1,3,false)
					str =  `${infos4.cMonth}-${infos4.cDay},`;
					break;
					
					case '前五天':
					let infos5 = calendarTransform.lunar2solar(this.choose3,1,4,false)
					str =  `${infos5.cMonth}-${infos5.cDay},`;
					break;
					
					case '前六天':
					let infos6 = calendarTransform.lunar2solar(this.choose3,1,5,false)
					str =  `${infos6.cMonth}-${infos6.cDay},`;
					break;
					
					case '前七天':
					let infos7 = calendarTransform.lunar2solar(this.choose3,1,6,false)
					str =  `${infos7.cMonth}-${infos7.cDay},`;
					break;
					
					case '前八天':
					let infos8 = calendarTransform.lunar2solar(this.choose3,1,7,false)
					str =  `${infos8.cMonth}-${infos8.cDay},`;
					break;
					
					case '前九天':
					let infos9 = calendarTransform.lunar2solar(this.choose3,1,8,false)
					str =  `${infos10.cMonth}-${infos9.cDay},`;
					break;
					
					case '前十天':
					let infos10 = calendarTransform.lunar2solar(this.choose3,1,9,false)
					str =  `${infos10.cMonth}-${infos10.cDay},`;
					break;
				}
				return str
			},
			switchconutry(val){
				let str ='';
				switch(val){
					case '前一天':
					str =  '10-01';
					break;
					
					case '前二天':
					str =  '10-02';
					break;
					
					case '前三天':
					str =  '10-03';
					break;
					
					case '前四天':
					str =  '10-04';
					break;
					
					case '前五天':
					str =  '10-05';
					break;
					
					case '前六天':
					str =  '10-06';
					break;
					
					case '前七天':
					str =  '10-07';
					break;
					
					case '前八天':
					str =  '10-08';
					break;
					
					case '前九天':
					str =  '10-09';
					break;
					
					case '前十天':
					str =  '10-10';
					break;
				}
				return str
			},
			showList1(e){
					let _self = this
					this.mySelect1 = new MobileSelect({
				    trigger: '#dateBox1', 
				    title:'选择单位',
				    wheels: [
				                {data:_self.DataList1}
				            ],
				    position:[_self.dIndex1], //初始化定位 两个轮子都选中在索引1的选项
				    callback:function(indexArr, data){
					    	if(!data){
					    		return
					    	}
					    	_self.$emit('cData',{type:1,value:data[0]})
					    	_self.choose1 = data[0]
				    		_self.dIndex1 = indexArr[0]-1
				      } 
				})
			},
			showList2(e){
				let _self = this
					this.mySelect2 = new MobileSelect({
				    trigger: '#dateBox2', 
				    title:'选择类型',
				    wheels: [
				                {data:this.DataList2}
				            ],
				    position:[_self.dIndex2], //初始化定位 两个轮子都选中在索引1的选项
				    callback:function(indexArr, data){
					    	if(!data){
					    		return
					    	}
					    	if(data[0]==='国庆'){
					    		_self.$emit('cData',{type:2,value:1})
					    	}else{
					    		_self.$emit('cData',{type:2,value:2})
					    	}
					    	
					    	_self.choose2 = data[0]
				    		_self.dIndex2 = indexArr[0]-1
				      } 
				})
			},
			showList3(e){
				let _self = this
					this.mySelect3 = new MobileSelect({
				    trigger: '#dateBox3',
				    title:'选择年份',
				    wheels: [
				                {data:yearData}
				            ],
				    position:[_self.dIndex3], //初始化定位 两个轮子都选中在索引1的选项
				    callback:function(indexArr, data){
					    	if(!data){
					    		return
					    	}
					    	_self.$emit('cData',{type:3,value:data[0]})
					    	_self.choose3 = data[0]
				    		_self.dIndex3 = indexArr[0]-1
				      } 
				})
			},
			showList4(e){
				let _self = this
					this.mySelect4 = new MobileSelect({
				    trigger: '#dateBox4',
				    title:'选择时间',
				    wheels: [
				                {data:_self.DataList4}
				            ],
				    position:[_self.dIndex4], //初始化定位 两个轮子都选中在索引1的选项
				    callback:function(indexArr, data){
				    	
					    	if(!data){
					    		return
					    	}
					    	if(_self.choose2==='春节'){
					    		
					    		_self.$emit('cData',{type:4,value:_self.switchDate(data[0])})
					    	}else{
					    		_self.$emit('cData',{type:4,value:_self.switchconutry(data[0])})
					    	}
					    	_self.choose4 = data[0]
				    		_self.dIndex4 = indexArr[0]-1
				      } 
				})
			},
			showList5(e){
				this.$emit('cData',{type:5,value:this.choose5})
			}
		},
		
		mounted(){
		}
	}
</script>

<style scoped="scoped" lang="less">
	.selectGroup{
		width: 6.86rem;
		height: 1.38rem;
		margin: 0.4rem auto -0.01rem auto;
		position: relative;
		color: #767676;
		background-color: #fff;
		z-index: 1000;
		.titles1{
			position: absolute;
			font-size: 0.28rem;
			line-height: 0.5rem;
			font-weight: 500;
			
		}
		.selectBox1{
			position: absolute;
			left: 0.72rem;
			width: 1.96rem;
			height: 0.54rem;
			border: 1px solid #C4C4C4;
			border-radius: 0.06rem;
			box-sizing: border-box;
			z-index: 1;
	
			.title{
				width: 100%;
				height: 100%;
				line-height: 0.5rem;
				font-size: 0.24rem;
				text-align: left;
				text-align: center;
				margin-left: -0.1rem;
				position: absolute;
				z-index: 100;
				box-sizing: border-box;
			}
			.up{
					position: absolute;
					right: 0.1rem;
					bottom: 0.06rem;
					display: block;
					border-width: 0.08rem;
					border-color: #3C3C3C transparent transparent transparent;
					border-style: solid;
					opacity:0.6881;
					z-index: 1;
				}
				.down{
					position: absolute;
					right: 0.1rem;
					top: 0.05rem;
					display: block;
					border-width: 0.08rem;
					border-color: transparent transparent #3C3C3C transparent; 
					border-style: solid;
					opacity:0.6881;
					z-index: 1;
				}
		}
		
		.titles2{
			position: absolute;
			font-size: 0.28rem;
			line-height: 0.5rem;
			margin-left: 2.9rem;
			font-weight: 500;
			
		}
		.selectBox2{
			position: absolute;
			left: 3.6rem;
			width: 1.08rem;
			height: 0.54rem;
			border: 1px solid #C4C4C4;
			border-radius: 0.06rem;
			box-sizing: border-box;
			z-index: 1;
	
			.title{
				width: 100%;
				height: 100%;
				line-height: 0.5rem;
				font-size: 0.24rem;
				text-align: left;
				padding-left: 0.15rem;
				position: absolute;
				z-index: 100;
				box-sizing: border-box;
			}
			.up{
					position: absolute;
					right: 0.1rem;
					bottom: 0.05rem;
					display: block;
					border-width: 0.08rem;
					border-color: #3C3C3C transparent transparent transparent;
					border-style: solid;
					opacity:0.6881;
					z-index: 1;
				}
				.down{
					position: absolute;
					right: 0.1rem;
					top: 0.06rem;
					display: block;
					border-width: 0.08rem;
					border-color: transparent transparent #3C3C3C transparent; 
					border-style: solid;
					opacity:0.6881;
					z-index: 1;
				}
		}
		
		.titles3{
			position: absolute;
			font-size: 0.28rem;
			line-height: 0.5rem;
			margin-left: 4.92rem;
			font-weight: 500;
			
		}
		.selectBox3{
			position: absolute;
			right: 0;
			width: 1.14rem;
			height: 0.54rem;
			border: 1px solid #C4C4C4;
			border-radius: 0.06rem;
			box-sizing: border-box;
			z-index: 1;
	
			.title{
				width: 100%;
				height: 100%;
				line-height: 0.5rem;
				font-size: 0.24rem;
				text-align: left;
				padding-left: 0.12rem;
				position: absolute;
				z-index: 100;
				box-sizing: border-box;
			}
			.up{
					position: absolute;
					right: 0.1rem;
					bottom: 0.06rem;
					display: block;
					border-width: 0.08rem;
					border-color: #3C3C3C transparent transparent transparent;
					border-style: solid;
					opacity:0.6881;
					z-index: 1;
				}
				.down{
					position: absolute;
					right: 0.1rem;
					top: 0.05rem;
					display: block;
					border-width: 0.08rem;
					border-color: transparent transparent #3C3C3C transparent; 
					border-style: solid;
					opacity:0.6881;
					z-index: 1;
				}
		}
		
		.titles4{
			position: absolute;
			font-size: 0.28rem;
			line-height: 0.5rem;
			top: 0.74rem;
			font-weight: 500;
			
		}
		.selectBox4{
			position: absolute;
			left: 0.72rem;
			top: 0.76rem;
			width: 1.66rem;
			height: 0.54rem;
			border: 1px solid #C4C4C4;
			border-radius: 0.06rem;
			box-sizing: border-box;
			z-index: 1;
	
			.title{
				width: 100%;
				height: 100%;
				line-height: 0.5rem;
				font-size: 0.24rem;
				text-align: left;
				padding-left: 0.3rem;
				position: absolute;
				z-index: 100;
				box-sizing: border-box;
			}
			.up{
					position: absolute;
					right: 0.1rem;
					bottom: 0.06rem;
					display: block;
					border-width: 0.08rem;
					border-color: #3C3C3C transparent transparent transparent;
					border-style: solid;
					opacity:0.6881;
					z-index: 1;
				}
				.down{
					position: absolute;
					right: 0.1rem;
					top: 0.05rem;
					display: block;
					border-width: 0.08rem;
					border-color: transparent transparent #3C3C3C transparent; 
					border-style: solid;
					opacity:0.6881;
					z-index: 1;
				}
		}
		
		.titles5{
			position: absolute;
			font-size: 0.28rem;
			line-height: 0.5rem;
			margin-left: 2.56rem;
			top: 0.76rem;
			font-weight: 500;
			
		}
		.selectBox5{
			position: absolute;
			right: 0;
			top: 0.76rem;
			width: 3.22rem;
			height: 0.54rem;
			border: 1px solid #C4C4C4;
			border-radius: 0.06rem;
			box-sizing: border-box;
	
			.title{
				width: 100%;
				height: 100%;
				line-height: 0.5rem;
				font-size: 0.24rem;
				text-align: left;
				box-sizing: border-box;
				padding-left: 0.1rem;
				position: absolute;
				border: none;
				outline: none;
			}
			.search{
					position: absolute;
					right: 0rem;
					top: 0.06rem;
					width: 0.5rem;
					height: 0.46rem ;
					display: block;
					background: url(../../assets/images/search/search.png) no-repeat;
					background-size: 70%;
					opacity:0.6881;
					z-index: 1;
				}
		}
	}
</style>