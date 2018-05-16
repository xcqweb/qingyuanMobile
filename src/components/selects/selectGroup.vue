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
		<div class="toast"></div>
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
				DataList4:['第一天','第二天','第三天','第四天','第五天','第六天','第七天','第八天','第九天','第十天'],
				choose1:'旅行社',
				choose2:'国庆',
				choose3:'2018',
				choose4:'第一天',
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
		created(){
			
		},
		methods:{
			switchDate(val){
				let str ='';
				switch(val){
					case '第一天':
					let infos1 = calendarTransform.lunar2solar(this.choose3-1,12,30,false)
					if(infos1===-1 || infos1==='-1'){
						infos1 = calendarTransform.lunar2solar(this.choose3-1,12,29,false)
					}
					str =  `${infos1.cMonth}-${infos1.cDay}`;
					break;
					
					case '第二天':
					let infos2 = calendarTransform.lunar2solar(this.choose3,1,1,false)
					str =  `${infos2.cMonth}-${infos2.cDay}`;
					break;
					
					case '第三天':
					let infos3 = calendarTransform.lunar2solar(this.choose3,1,2,false)
					str =  `${infos3.cMonth}-${infos3.cDay}`;
					break;
					
					case '第四天':
					let infos4 = calendarTransform.lunar2solar(this.choose3,1,3,false)
					str =  `${infos4.cMonth}-${infos4.cDay}`;
					break;
					
					case '第五天':
					let infos5 = calendarTransform.lunar2solar(this.choose3,1,4,false)
					str =  `${infos5.cMonth}-${infos5.cDay}`;
					break;
					
					case '第六天':
					let infos6 = calendarTransform.lunar2solar(this.choose3,1,5,false)
					str =  `${infos6.cMonth}-${infos6.cDay}`;
					break;
					
					case '第七天':
					let infos7 = calendarTransform.lunar2solar(this.choose3,1,6,false)
					str =  `${infos7.cMonth}-${infos7.cDay}`;
					break;
					
					case '第八天':
					let infos8 = calendarTransform.lunar2solar(this.choose3,1,7,false)
					str =  `${infos8.cMonth}-${infos8.cDay}`;
					break;
					
					case '第九天':
					let infos9 = calendarTransform.lunar2solar(this.choose3,1,8,false)
					str =  `${infos10.cMonth}-${infos9.cDay}`;
					break;
					
					case '第十天':
					let infos10 = calendarTransform.lunar2solar(this.choose3,1,9,false)
					str =  `${infos10.cMonth}-${infos10.cDay}`;
					break;
				}
				return str
			},
			switchconutry(val){
				let str ='';
				switch(val){
					case '第一天':
					str =  '10-01';
					break;
					
					case '第二天':
					str =  '10-02';
					break;
					
					case '第三天':
					str =  '10-03';
					break;
					
					case '第四天':
					str =  '10-04';
					break;
					
					case '第五天':
					str =  '10-05';
					break;
					
					case '第六天':
					str =  '10-06';
					break;
					
					case '第七天':
					str =  '10-07';
					break;
					
					case '第八天':
					str =  '10-08';
					break;
					
					case '第九天':
					str =  '10-09';
					break;
					
					case '第十天':
					str =  '10-10';
					break;
				}
				return str
			},
			switchIndex(val){
				let str =0;
				switch(val){
					case '第一天':
					str =  0;
					break;
					
					case '第二天':
					str =  1;
					break;
					
					case '第三天':
					str =  2;
					break;
					
					case '第四天':
					str =  3;
					break;
					
					case '第五天':
					str =  4;
					break;
					
					case '第六天':
					str =  5;
					break;
					
					case '第七天':
					str =  6;
					break;
					
					case '第八天':
					str =  7;
					break;
					
					case '第九天':
					str =  8;
					break;
					
					case '第十天':
					str =  9;
					break;
				}
				return str
			},
			switchType(val){
				let str =0;
				switch(val){
					case '旅行社':
					str =  0;
					break;
					
					case '宾馆酒店':
					str =  1;
					break;
					
					case '景点':
					str =  2;
					break;
					
					case '重点景点':
					str =  3;
					break;
					
					case '各区旅游局':
					str =  4;
					break;
				}
				return str
			},
			showList1(e){
					e.stopPropagation();
					e.preventDefault()
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
					    	_self.$store.commit('COMMIT_COMPANYNAME',data[0])
					    	_self.choose1 = data[0]
				    		_self.dIndex1 = indexArr[0]-1
				    		if(_self.choose2==='国庆'){
				    			
				    			_self.$emit('cData',{usertype:data[0],type:1,year:_self.choose3,mDay:_self.switchconutry(_self.choose4),key:_self.choose5})
				    		}else{
				    			_self.$emit('cData',{usertype:data[0],type:2,year:_self.choose3,mDay:_self.switchDate(_self.choose4),key:_self.choose5})
				    		}
					    	
				      } 
				})
			},
			showList2(e){
				e.stopPropagation();
				e.preventDefault()
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
					    	_self.choose2 = data[0]
				    		_self.dIndex2 = indexArr[0]-1
					    	if(data[0]==='国庆'){
					    		_self.$store.commit('COMMIT_TYPE',1)
				    			_self.$emit('cData',{usertype:_self.choose1,type:1,year:_self.choose3,mDay:_self.switchconutry(_self.choose4),key:_self.choose5})
				    		}else{
				    			_self.$store.commit('COMMIT_TYPE',2)
				    			_self.$emit('cData',{usertype:_self.choose1,type:2,year:_self.choose3,mDay:_self.switchDate(_self.choose4),key:_self.choose5})
				    		}
				      } 
				})
			},
			showList3(e){
				e.stopPropagation();
				e.preventDefault()
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
					    	_self.$store.commit('COMMIT_YEAR',data[0])
					    	_self.choose3 = data[0]
				    		_self.dIndex3 = indexArr[0]-1
				    		
					    	if(_self.choose2==='国庆'){
				    			_self.$emit('cData',{usertype:_self.choose1,type:1,year:data[0],mDay:_self.switchconutry(_self.choose4),key:_self.choose5})
				    		}else{
				    			_self.$emit('cData',{usertype:_self.choose1,type:2,year:data[0],mDay:_self.switchDate(_self.choose4),key:_self.choose5})
				    		}
					    	
				      } 
				})
			},
			showList4(e){
				e.stopPropagation();
				e.preventDefault()
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
					    	
					    	_self.choose4 = data[0]
					    	_self.$store.commit('COMMIT_DATEINDEX',_self.switchIndex(data[0]))
				    		_self.dIndex4 = indexArr[0]-1
					    	if(_self.choose2==='国庆'){
					    		_self.$store.commit('COMMIT_DAY',{num:_self.switchconutry(data[0]),txt:data[0]})
				    			_self.$emit('cData',{usertype:_self.choose1,type:1,year:_self.choose3,mDay:_self.switchconutry(data[0]),key:_self.choose5})
				    		}else{
				    			_self.$store.commit('COMMIT_DAY',{num:_self.switchDate(data[0]),txt:data[0]})
				    			_self.$emit('cData',{usertype:_self.choose1,type:2,year:_self.choose3,mDay:_self.switchDate(data[0]),key:_self.choose5})
				    		}
					    	
				      } 
				})
			},
			showList5(e){
				this.$store.commit('COMMIT_KEYS',this.choose5)
				if(this.choose2==='国庆'){
					this.$emit('cData',{usertype:this.choose1,type:1,year:this.choose3,mDay:this.switchconutry(this.choose4),key:this.choose5})
				}else{
					this.$emit('cData',{usertype:this.choose1,type:2,year:this.choose3,mDay:this.switchDate(this.choose4),key:this.choose5})
				}
			}
		},
		
		mounted(){
			//获取之第的选择条件
			this.choose1 = this.$store.state.companyname;
			this.choose2 = this.$store.state.type===1?'国庆':'春节';
			this.choose3 = this.$store.state.chooseYear;
			this.choose4 = this.$store.state.days.txt;
			this.choose5 = this.$store.state.keys;
			
			this.dIndex1= this.switchType(this.$store.state.companyname);
			this.dIndex2= this.$store.state.type===1?0:1;
			this.dIndex3 = this.choose3-year;
			this.dIndex4 = this.switchIndex(this.$store.state.days.txt)
			this.$store.commit('COMMIT_DATEINDEX',this.dIndex4)
		}
	}
</script>

<style scoped="scoped" lang="less">
	.selectGroup{
		width: 6.86rem;
		height: 1.6rem;
		margin: 0.4rem auto -0.01rem auto;
		position: relative;
		color: #767676;
		background-color: #fff;
		z-index: 1000;
		.toast{
			position: absolute;
			z-index: -1;
			left: -0.32rem;
			top: -0.4rem;
			width: 100vw;
			background-color: #fff;
			height: 1.8rem;
		}
		.titles1{
			position: absolute;
			font-size: 0.28rem;
			line-height: 0.5rem;
			font-weight: 500;
			-webkit-user-select: none;
			-ms-user-select: none;
			-moz-user-select: none;
			
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
				position: absolute;
				z-index: 100;
				box-sizing: border-box;
				-webkit-user-select: none;
				-ms-user-select: none;
				-moz-user-select: none;
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
				&:active{
				background-color: rgba(0, 0, 0, 0.42)
			}
		}
		
		.titles2{
			position: absolute;
			font-size: 0.28rem;
			line-height: 0.5rem;
			margin-left: 2.9rem;
			font-weight: 500;
			-webkit-user-select: none;
			-ms-user-select: none;
			-moz-user-select: none;
			
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
				-webkit-user-select: none;
				-ms-user-select: none;
				-moz-user-select: none;
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
				&:active{
				background-color: rgba(0, 0, 0, 0.42)
			}
		}
		
		.titles3{
			position: absolute;
			font-size: 0.28rem;
			line-height: 0.5rem;
			margin-left: 4.92rem;
			font-weight: 500;
			-webkit-user-select: none;
			-ms-user-select: none;
			-moz-user-select: none;
			
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
				-webkit-user-select: none;
				-ms-user-select: none;
				-moz-user-select: none;
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
				&:active{
				background-color: rgba(0, 0, 0, 0.42)
			}
		}
		
		.titles4{
			position: absolute;
			font-size: 0.28rem;
			line-height: 0.5rem;
			top: 0.74rem;
			font-weight: 500;
			-webkit-user-select: none;
			-ms-user-select: none;
			-moz-user-select: none;
			
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
				-webkit-user-select: none;
				-ms-user-select: none;
				-moz-user-select: none;
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
				&:active{
				background-color: rgba(0, 0, 0, 0.42)
			}
		}
		
		.titles5{
			position: absolute;
			font-size: 0.28rem;
			line-height: 0.5rem;
			margin-left: 2.56rem;
			top: 0.76rem;
			font-weight: 500;
			-webkit-user-select: none;
			-ms-user-select: none;
			-moz-user-select: none;
			
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
				-webkit-user-select: none;
				-ms-user-select: none;
				-moz-user-select: none;
			}
			.search{
					position: absolute;
					right: 0rem;
					top: 0rem;
					width: 0.54rem;
					height: 0.54rem ;
					display: block;
					background: url(../../assets/images/search/search.png) no-repeat;
					background-size: 70%;
					background-position: 0.08rem 0.05rem;
					opacity:0.6881;
					z-index: 1;
					&:active{
						background-color: rgba(0, 0, 0, 0.42)
					}
				}
				
		}
	}
</style>