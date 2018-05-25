<template>
		<div class="goldweek" id="box2" :style="{transform:left}">
			<div class="toast" v-show="comStatus" @click="showToast" id="rrr"></div>
				<comtitle
					:titleData='titleData'
				></comtitle>
				<!--市旅游局-->
				<div class="topTitle" v-show="isCity">
					<span></span>
					<p>黄金周日报</p>
				</div>
				<type-select
					:goldData='goldData'
					@types='getType'
					 v-show="isCity"
				></type-select>
				<date-select
					:dateData='dateData'
					class='typeSelect'
					@dates='getDates'
					v-show="isCity"
				></date-select>
				<div :class="{hide:!isShow}" class="rr" v-show="isCity">
					<reports 
						:dataList='reportOne'
					></reports>
					<reports
						:dataList='reportTwo'
					></reports>
					<reports
						:dataList='reportThree'
					></reports>
					<reports
						:dataList='reportFour'
					></reports>
					<reports
						:dataList='reportFive'
					></reports>
					<reports
						:dataList='reportSix'
					></reports>
					<reports
						:dataList='reportSeven'
					></reports>
					<reports
						:dataList='reportEight'
					></reports>
					<reports
						:dataList='reportNine'
					></reports>
					<reports
						class='r7'
						:dataList='reportTen'
					></reports>
				</div>
				<reports-complete
					:datas='dataListCom'
				></reports-complete>
				
				<!--市旅游局查看模块-->
				<tourist-skim
					 v-show="!isCity"
				></tourist-skim>
				<loading></loading>
		</div>
</template>

<script>
	import Bus from '@/common/bus'
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
				titleData:{
		  			title:'清远旅游统计报送分析系统',
		  			bgcolor:'#4E76AC',
		  			showArrow:false,
		  			smallTitle:false,
		  			showBack:true,
		  			showUser:true
			  	},
			  	goldData:{
			  		titles:'黄金周类型',
			  		list:[
			  			'国庆','春节'
			  		],
			  	},
			  	dateData:{
			  		titles:'年份',
			  		list:yearData,
			  	},
			  	reportOne:{
			  		name:'第一天',
			  		reportUrl:'',
			  	},
			  	reportTwo:{
			  		name:'第二天',
			  		reportUrl:'',
			  	},
			  	reportThree:{
			  		name:'第三天',
			  		reportUrl:'',
			  	},
			  	reportFour:{
			  		name:'第四天',
			  		reportUrl:'',
			  	},
			  	reportFive:{
			  		name:'第五天',
			  		reportUrl:'',
			  	},
			  	reportSix:{
			  		name:'第六天',
			  		reportUrl:'',
			  	},
			  	reportSeven:{
			  		name:'第七天',
			  		reportUrl:'',
			  	},
			  	reportEight:{
			  		name:'第八天',
			  		reportUrl:'',
			  	},
			  	reportNine:{
			  		name:'第九天',
			  		reportUrl:'',
			  	},
			  	reportTen:{
			  		name:'第十天',
			  		reportUrl:'',
			  	},
			  	
			  	users:{},
				
				dataListCom:{
					status:false,
					title:'全部任务已完成'
				},
				isCity:true,
				type:this.$store.state.type,
				dateyear:this.$store.state.chooseYear,
				str:'',
				isShow:false,
				left:'0%',
				flag:true,
			  	
			}
			
		},
		props:[],
		methods:{
			initData(){
				if(window.sessionStorage.getItem('users')){
				let users = JSON.parse(window.sessionStorage.getItem('users'))
				this.users = users
			}else{
				this.users = JSON.parse(getCookie('users'))
			}
			let params = {}
			if(this.$store.state.type===1){
				 params = {
					type:this.$store.state.type,
					username:this.users.username,
					usertype:this.users.usertype,
					dataYear:this.$store.state.chooseYear
				}
			}else{
				 params = {
					type:this.$store.state.type,
					username:this.users.username,
					usertype:this.users.usertype,
					dataYear:this.$store.state.chooseYear,
					arr:this.$store.state.str
				}
			}
			
			if(this.users.usertype!=='旅游局'){
				this.getTask(params)
			}
			
			},
			getTask(params){
				if(!this.downLoading){
					this.$store.commit('COMMIT_LOADING',true)
				}
				
				this.$axios.get(API_URL+'/mobile/mobileView/mytask',{params:params}).then( r => {
					if(!r){
						this.$store.commit('COMMIT_LOADING',false)
						this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'加载失败!',err:true})
						if(timer){
							clearTimeout(timer)
						}
						var timer = setTimeout ( () => {
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'加载失败!',err:true})
						},3000)
						return;
					}
					if(r.data.code==='200' || r.data.code===200){
						this.$store.commit('COMMIT_LOADING',false)
						this.isShow = true
						let reData = r.data.data.list
					let num=0;
					reData.forEach( (v,i) => {
						if(v.count===0){
							this.status = false
						}else{
							num++
						}
					})
					if(num===reData.length){
						this.dataListCom = {
							status:true,
							title:'全部任务已完成'
						}
					}else{
						this.dataListCom = {
							status:false,
							title:'全部任务已完成'
						}
					}
					
					this.reportOne = reData[0]
					this.reportTwo = reData[1]
					this.reportThree = reData[2]
					this.reportFour = reData[3]
					this.reportFive = reData[4]
					this.reportSix = reData[5]
					this.reportSeven = reData[6]
					this.reportEight = reData[7]
					this.reportNine = reData[8]
					this.reportTen = reData[9]
					}
				})
			},
			
			getType(data){
				this.type = data
				
			},
			getDates(data){
				this.dateyear = data
			},
			showToast(e){
				let _self = this
				this.$store.commit('COMMIT_ShOWINFO',false)
				this.$store.commit('COMMIT_ISSCROLL',false)
				Bus.$emit('hideUser')
				this.move()
			},
			
			move(){
				this.flag = !this.flag
				let _self = this
				
				if(this.flag){
					let num=41;
					function mover(){
						if(num<0){
							//num-=20;
							window.requestAnimationFrame(mover)
						}else{
							num=0
						}
						_self.left= `translate3d(${num}%,0,0)`
					}
					window.requestAnimationFrame(mover)
				}else{
					let num=41;
					function movel(){
						if(num<41){
							num+=500;
							window.requestAnimationFrame(movel)
						}else{
							num=41
						}
						_self.left= `translate3d(${num}%,0,0)`
					}
					window.requestAnimationFrame(movel)
				}
			},
			
		},
			beforeDestory(){
				
			},
		watch:{
			type:function(val){
				let params = {}
				if(val===2){
					this.str = ''
					for(let i=0; i<10; i++){
						//阳历转农历
						if(i===0){
							let infos = calendarTransform.lunar2solar(this.dateyear-1,12,30,false)
							if(infos===-1 || infos==='-1'){
								infos = calendarTransform.lunar2solar(this.dateyear-1,12,29,false)
							}
							
							this.str+=`${infos.cMonth}-${infos.cDay},`
						}else{
							let info = calendarTransform.lunar2solar(this.dateyear,1,i,false)
							this.str+=`${info.cMonth}-${info.cDay},`
						}
						this.$store.commit('COMMIT_ARR',this.str)
					}
					params = {
						type:val,
						username:this.users.username,
						usertype:this.users.usertype,
						dataYear:this.$store.state.chooseYear,
						arr:this.str
					}
				}else{
					 params = {
						type:val,
						username:this.users.username,
						usertype:this.users.usertype,
						dataYear:this.$store.state.chooseYear
					}
				}
				
				this.getTask(params)
			},
			dateyear:function(val){
				let params={}
				if(this.type===2){
					this.str = ''
						for(let i=0; i<10; i++){
						//阳历转农历
						if(i===0){
							let infos = calendarTransform.lunar2solar(val-1,12,30,false)
							if(infos===-1 || infos==='-1'){
								infos = calendarTransform.lunar2solar(val-1,12,29,false)
							}
							this.str+=`${infos.cMonth}-${infos.cDay},`
						}else{
							let info = calendarTransform.lunar2solar(val,1,i,false)
							this.str+=`${info.cMonth}-${info.cDay},`
						}
						this.$store.commit('COMMIT_ARR',this.str)
					}
					
					 params = {
						type:this.type,
						username:this.users.username,
						usertype:this.users.usertype,
						dataYear:this.$store.state.chooseYear,
						arr:this.str
					}
				}else{
					 params = {
						type:this.type,
						username:this.users.username,
						usertype:this.users.usertype,
						dataYear:this.$store.state.chooseYear
					}
				}
				
				this.getTask(params)
			}
		},
		computed:{
			comStatus(){
				return this.$store.state.isShowInfo
			}
		},
		mounted(){
			this.$nextTick( () => {
				this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'',err:true})
				this.$store.commit('COMMIT_SUBMIT',false)
				this.$store.commit('COMMIT_SAVE',false)
				let t = document.getElementById('rrr');
				t.addEventListener('touchmove',function(e){
					e.preventDefault();
				},false)
				
			})
			
			this.initData()
			
			if(this.users.companyname==='清远市旅游局'){
				this.isCity = false;
			}
			
			Bus.$on('showUser',() => {
				this.move()
			})
			
		},
		beforeDestroy(){
			Bus.$off('sendData')
		},
		created(){
			this.dataYear = this.$store.state.chooseYear
			this.type = this.$store.state.type
			this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'',err:true})
			this.$store.commit('COMMIT_SUBMIT',false)
			this.$store.commit('COMMIT_SAVE',false)
		},
		
	}
</script>

<style scoped lang="less"> 

.goldweek{
	width: 100%;
	height: 100vh;
	position: fixed;
	left: 0;
	-webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-overflow-scrolling: touch;
    z-index: 100;
    
	.toast{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-color: rgba(0,0,0,0.14);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100000;
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
	.typeSelect{
		margin-left: 3.6rem;
	}
	
	.rr{
		margin-top: 2rem;
		max-height: 66vh;
		overflow: scroll;
		position: relative;
	}
	.arrows{
    	position: absolute;
		margin-top: 2.66rem;
		padding-top: 0rem;
		font-size: 0.24rem;
		z-index: 10;
		top: 0;
		width: 100vw;
		text-align: center;float: left;
		span{
			display: block;
	    	width: 0.5rem;
	    	height: 0.5rem;
	    	margin: auto;
		}
    }
    .up{
    	background: url(../../assets/images/loading/up.png) no-repeat;
    	background-size: cover;
    }
    .down{
    	background: url(../../assets/images/loading/down.png) no-repeat;
    	background-size: cover;
    }
	.brr{
		position: absolute;
		margin-top: 2.66rem;
		padding-top: 0rem;
		font-size: 0.24rem;
		top: 0;
		width: 100vw;
		text-align: center;float: left;
		span{
			position: absolute;
			top: 0.4rem;
			left: 42vw;
			padding: 0.2rem;
		}
	}
	.hide{
		visibility: hidden;
	}
	
	.r1{
		/*margin-top: 2rem;*/
	}
	
	.r7{
		margin-bottom: 0.32rem;
	}
}

@-webkit-keyframes left{
	from{
		transform: translateX(0);
	}
	to{
		transform: translateX(41%);
	}
}

</style>