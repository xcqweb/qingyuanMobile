<template>
	<div>
		<div class="tip" v-show="!status">没有搜到匹配的记录</div>
		<div class="manage1" v-if='choseData.usertype==="旅行社"&&status'>
			<div class="l">
				<ul class="title">
					<li>单位代码</li>
				</ul>
				<ul class="con">
					<li v-for="item in dataList">
						<span>{{item.companyName}}</span>
					</li>
				</ul>
			</div>
			<div class="r">
				<ul class="title">
					<li>接团数</li>
					<li>个人一日游</li>
					<li>接待总人数</li>
					<li>省外</li>
					<li>省内</li>
					<li>国际</li>
					<li>组团数</li>
					<li>组团一日游</li>
					<li>组团总人数</li>
					<li>组团省外游</li>
					<li>组团省内游</li>
					<li>出境游人数</li>
					<li>香港游</li>
					<li>澳门游</li>
					<li>出国游</li>
					<li>欧洲游</li>
					<li>营业收入</li>
				</ul>
					
				<ul class="con">
					<li v-for="item in dataList">
						<span>{{item.groupReceptionNum}}</span>
						<span>{{item.personOneDayNum}}</span>
						<span>{{item.personReceptionNum}}</span>
						<span>{{item.outProvinces}}</span>
						<span>{{item.inProvinces}}</span>
						<span>{{item.internationalNum}}</span>
						<span>{{item.groupNum}}</span>
						<span>{{item.groupOneDayNum}}</span>
						<span>{{item.acceptGroupNum}}</span>
						<span>{{item.groupOutProvincesNum}}</span>
						<span>{{item.groupInProvincesNum}}</span>
						<span>{{item.leaveTheCountryNum}}</span>
						<span>{{item.hongkongNum}}</span>
						<span>{{item.macauNum}}</span>
						<span>{{item.outCountryNum}}</span>
						<span>{{item.europeNum}}</span>
						<span>{{item.revenue}}</span>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="manage2" v-if='choseData.usertype==="宾馆酒店"&&status'>
			<div class="l">
				<ul class="title">
					<li>单位代码</li>
				</ul>
				<ul class="con">
					<li v-for="item in dataList">
						<span>{{item.companyName}}</span>
					</li>
				</ul>
			</div>
			<div class="r">
				<ul class="title">
					<li>总接待人数</li>
					<li>国内(人)</li>
					<li>国外(人)</li>
					<li>营业收入(万元)</li>
					<li>平均房价(元)</li>
					<li>开房率(%)</li>
					<li>实际出租客房(间)</li>
				</ul>
				<ul class="con">
					<li v-for="item in dataList">
						<span>{{item.totalAcceptNum}}</span>
						<span>{{item.inCountryNum}}</span>
						<span>{{item.outCountryNum}}</span>
						<span>{{item.revenue}}</span>
						<span>{{item.avgHousePrices}}</span>
						<span>{{item.houseUsePersent}}</span>
						<span>{{item.actualRentalQuantity}}</span>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="manage2" v-if='(choseData.usertype==="景点" || choseData.usertype==="重点景区")&&status'>
			<div class="l">
				<ul class="title">
					<li>单位代码</li>
				</ul>
				<ul class="con">
					<li v-for="item in dataList">
						<span>{{item.userName}}</span>
					</li>
				</ul>
			</div>
			<div class="r">
				<ul class="title">
					<li>接待人数</li>
					<li>去年同期接待人数</li>
					<li>接待人数同比</li>
					<li>营业收入</li>
					<li>去年同期(营业收入)</li>
					<li>收入同比</li>
					<li>当日旅游情况综述</li>
				</ul>
				
				<ul class="con">
					<li v-for="item in dataList">
						<span>{{item.recPerson}}</span>
						<span>{{item.lastYearRecPerson}}</span>
						<span>{{item.personPercent}}</span>
						<span>{{item.income}}</span>
						<span>{{item.lastYearIncome}}</span>
						<span>{{item.incomePercent}}</span>
						<span>{{item.description}}</span>
					</li>
				</ul>
			</div>	
		</div>
		
		<div class="manage3" v-if='choseData.usertype==="各区旅游局"&&status'>
			<table class="l" width="50" cellpadding="0" cellspacing="0" border="0">
				<th class="title">
					<td>区域</td>
				</th>
				<tr class="con">
					<td>总计</td>
				</tr>
				<tr class="con" v-for="item in dataList">
					<td>{{item.areaName}}</td>
				</tr>
			</table>
			<div class="topTitle">旅游接待总人数和总收入</div>
			<div class="r">
				
				<table class="title" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td colspan="3">总人数</td>
						<td colspan="3">总收入</td>
						<td colspan="3">人均消费</td>
						<td colspan="3">外汇收入(万美元)</td>
						<td colspan="3">一天游接待总人数(万人)</td>
						<td colspan="3">一天游总收入(亿元)</td>
						<td colspan="3">一天游人均消费(元)</td>
						<td colspan="3">过夜游接待总人数(万人)</td>
						<td colspan="3">过夜游总收入(亿元)</td>
						<td colspan="3">过夜游人均消费(元)</td>
						<td colspan="3">旅行社接待国内外总人数(人次)</td>
						<td colspan="3">旅行社组团出游总人数(人次)</td>
						<td colspan="3">酒店和社会旅馆出游总人数(万人)</td>
						<td colspan="3">酒店和社会旅馆国内人数(万人次)</td>
						<td colspan="3">酒店和社会旅馆境外人数(万人次)</td>
						<td colspan="3">直报系统中宾馆数量(个)</td>
						<td colspan="3">直报系统中宾馆接待人数(万人)</td>
						<td colspan="3">其他宾馆数量(个)</td>
						<td colspan="3">其他宾馆接待人数(万人)</td>
						<td colspan="3">景区接待总人数(万人)</td>
						<td colspan="3">景区接待国内人数(万人)</td>
						<td colspan="3">景区接待国外人数(万人)</td>
					</tr>
					<tr class="subt">
						<td>{{oldYear}}前{{comDay}}天</td>
						<td>{{newYear}}前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
						
						<td>2017前一天</td>
						<td>2018前一天</td>
						<td>同比%</td>
					</tr>
					
				</table>
				<table class="con" border="0" cellspacing="0" cellpadding="10">
					<tr>
						<td v-for="i in dataTotal">{{i.toFixed(2)}}</td>
					</tr>
					<tr><td v-for="item in areaData['清城']">{{item}}</td></tr>
					<tr><td v-for="item in areaData['佛冈']">{{item}}</td></tr>
					<tr><td v-for="item in areaData['清新']">{{item}}</td></tr>
					<tr><td v-for="item in areaData['英德']">{{item}}</td></tr>
					<tr><td v-for="item in areaData['连南']">{{item}}</td></tr>
					<tr><td v-for="item in areaData['连山']">{{item}}</td></tr>
					<tr><td v-for="item in areaData['连州']">{{item}}</td></tr>
					<tr><td v-for="item in areaData['阳山']">{{item}}</td></tr>
				</table>
			</div>
		</div>
		
	</div>
</template>

<script>
	import router from '@/router'
	export default{
		data(){
			return{
				dataList:[],
				status:true,
				day:1,
				newYear:2018,
				oldYear:2017,
				areaData:{},//地区数据
				dataTotal:[],
				totals:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]
				],//总计
			}
		},
		props:['choseData'],
		methods:{
			getData(params){
				this.$store.commit('COMMIT_LOADING',true)
				this.$axios.get(API_URL+'/mobile/mobileMgr/detailList',{params:params}).then( (r) => {
					if(!r){
						this.$store.commit('COMMIT_LOADING',false)
						this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'加载失败!',err:true})
						if(timer){
							clearTimeout(timer)
						}
						var timer = setTimeout ( () => {
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'加载失败!',err:true})
						},1000)
						return;
					}
					if(r.data.code==='200' || r.data.code===200){
						//console.log(r.data.data.list)
						this.status = true
						this.$store.commit('COMMIT_LOADING',false)
						if(!r.data.data.list){
							this.status = false
							this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'无数据!',err:true})
						if(timer){
							clearTimeout(timer)
						}
						var timer = setTimeout ( () => {
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'无数据!',err:true})
						},2000)
							return
						}
						this.dataList = r.data.data.list.rows || r.data.data.list
						if(this.dataList[0].new){
							this.newYear = this.dataList[0].new.dataYear;
							this.oldYear = this.dataList[0].old.dataYear;
							this.day = this.dataList[0].new.day;
						
						
						this.dataList.forEach( (item,index) => {
							
							this.areaData[item.areaName] = [
								item.old.travelRecPersonSum,
								item.new.travelRecPersonSum,
								(item.new.travelRecPersonSum/item.old.travelRecPersonSum?item.old.travelRecPersonSum:1).toFixed(2),
								
								item.old.travelRecIncomeSum,
								item.new.travelRecIncomeSum,
								(item.new.travelRecIncomeSum/item.old.travelRecIncomeSum?item.old.travelRecIncomeSum:1).toFixed(2),
								
								item.old.travelRecCostAvg,
								item.new.travelRecCostAvg,
								(item.new.travelRecCostAvg/item.old.travelRecCostAvg?item.old.travelRecCostAvg:1).toFixed(2),
								
								item.old.travelRecOutIncome,
								item.new.travelRecOutIncome,
								(item.new.travelRecOutIncome/item.old.travelRecOutIncome?item.old.travelRecOutIncome:1).toFixed(2),
								
								item.old.oneDayPersonSum,
								item.new.oneDayPersonSum,
								(item.new.oneDayPersonSum/item.old.oneDayPersonSum?item.old.oneDayPersonSum:1).toFixed(2),
								
								item.old.oneDayIncomeSum,
								item.new.oneDayIncomeSum,
								(item.new.oneDayIncomeSum/item.old.oneDayIncomeSum?item.old.oneDayIncomeSum:1).toFixed(2),
								
								item.old.oneDayCostAvg,
								item.new.oneDayCostAvg,
								(item.new.oneDayCostAvg/item.old.oneDayCostAvg?item.old.oneDayCostAvg:1).toFixed(2),
								
								item.old.passNightPersonSum,
								item.new.passNightPersonSum,
								(item.new.passNightPersonSum/item.old.passNightPersonSum?item.old.passNightPersonSum:1).toFixed(2),
								
								item.old.passNightIncomeSum,
								item.new.passNightIncomeSum,
								(item.new.passNightIncomeSum/item.old.passNightIncomeSum?item.old.passNightIncomeSum:1).toFixed(2),
								
								item.old.passNightCostAvg,
								item.new.passNightCostAvg,
								(item.new.passNightCostAvg/item.old.passNightCostAvg?item.old.passNightCostAvg:1).toFixed(2),
								
								item.old.tguonei,
								item.new.tguonei,
								(item.new.tguonei/item.old.tguonei?item.old.tguonei:1).toFixed(2),
								
								item.old.tteamTotal,
								item.new.tteamTotal,
								(item.new.tteamTotal/item.old.tteamTotal?item.old.tteamTotal:1).toFixed(2),
								
								item.old.hotelPersonSum,
								item.new.hotelPersonSum,
								(item.new.hotelPersonSum/item.old.hotelPersonSum?item.old.hotelPersonSum:1).toFixed(2),
								
								item.old.hotelInSum,
								item.new.hotelInSum,
								(item.new.hotelInSum/item.old.hotelInSum?item.old.hotelInSum:1).toFixed(2),
								
								item.old.hotelOutSum,
								item.new.hotelOutSum,
								(item.new.hotelOutSum/item.old.hotelOutSum?item.old.hotelOutSum:1).toFixed(2),
								
								item.old.hotelSum,
								item.new.hotelSum,
								(item.new.hotelSum/item.old.hotelSum?item.old.hotelSum:1).toFixed(2),
								
								item.old.hotelRecSum,
								item.new.hotelRecSum,
								(item.new.hotelRecSum/item.old.hotelRecSum?item.old.hotelRecSum:1).toFixed(2),
								
								item.old.hotelOtherSum,
								item.new.hotelOtherSum,
								(item.new.hotelOtherSum/item.old.hotelOtherSum?item.old.hotelOtherSum:1).toFixed(2),
								
								item.old.hotelOtherRecSum,
								item.new.hotelOtherRecSum,
								(item.new.hotelOtherRecSum/item.old.hotelOtherRecSum?item.old.hotelOtherRecSum:1).toFixed(2),
								
								item.old.scenicPersonSum,
								item.new.scenicPersonSum,
								(item.new.scenicPersonSum/item.old.scenicPersonSum?item.old.scenicPersonSum:1).toFixed(2),
								
								item.old.scenicInSum,
								item.new.scenicInSum,
								(item.new.scenicInSum/item.old.scenicInSum?item.old.scenicInSum:1).toFixed(2),
								
								item.old.scenicOutSum,
								item.new.scenicOutSum,
								(item.new.scenicOutSum/item.old.scenicOutSum?item.old.scenicOutSum:1).toFixed(2),
							]
						})
						
							Object.values(this.areaData).forEach( (item,index) => {
								item.forEach( (v,i) => {
									this.totals[i].push(v)
								})
							})
							
						this.totals.forEach( (item,index) => {
							let sum=0;
							item.forEach( (v,i) => {
								if(!v){
									sum+=0
								}else{
									sum+=Number(v)
								}
								
							})
							this.dataTotal[index] = sum
						})
						//console.log(this.dataTotal)
						}
					}
				})
			}
		},
		watch:{
			choseData:{
				handler:function(val){
					//console.log(val)
					let parmas = {
						userType:val.usertype,
						type:val.type,
						year:val.year,
						monthDay:val.mDay,
						key:val.key,
						isImportant:0,
						offset:1,
						limit:8
					}
					this.getData(parmas)
				},
				deep:true
			}
		},
		mounted(){
		},
		computed:{
			comDay(){
				switch(this.day){
					case 1:
					return '一';
					case 2:
					return '二';
					case 3:
					return '三';
					case 4:
					return '四';
					case 5:
					return '五';
					case 6:
					return '六';
					case 7:
					return '七';
					case 8:
					return '八';
					case 9:
					return '九';
					case 10:
					return '十';
				}
			}
		},
		created(){
			let parmas = {
				userType:this.choseData.usertype,
				type:this.choseData.type,
				year:this.choseData.year,
				monthDay:this.choseData.mDay,
				key:this.choseData.key,
				isImportant:0,
				offset:1,
				limit:8
			}
			this.getData(parmas)
		}
	}
</script>

<style scoped="scoped" lang="less">
.tip{
		width: 100vw;
		margin-top: 0.4rem;
		font-size: 0.28rem;
		color: #767676;
		text-align: center;
	}
.manage1{
	width: 100vw;
	overflow: scroll;
	position: absolute;
	.l{
		width: 36vw;
		margin-left: 2vw;
		float: left;
		.title{
			display: flex;
			margin: 0.48rem auto 0 0 ;
			overflow: scroll;
			text-align: center;
			font-size: 0.28rem;
			color: #767676;
			font-weight: bold;
			position: relative;
			&::after{
				content: '';
				width: 6.86rem;
				height: 1px;
				background-color: rgba(118, 118, 118,0.12);
				display: none;
				position: absolute;
				left: 0rem;
				bottom: -0.2rem;
			}
			li{
				flex: 1;
			}
			li:nth-child(1){
				margin-left: 0.32rem;
			}
		}
		.con{
			height: 5.8rem;
			margin: 0.2rem auto;
			font-size: 0.24rem;
			color: #767676;
			overflow-y: scroll;
			li{
				width: 100%;
				display: flex;
				text-align: center;
				justify-content: center;
				align-items: center;
				height: 0.86rem;
				border-bottom: 1px solid rgba(118, 118, 118,0.12);
				span{
					word-wrap: break-word;
					word-break: break-word;
					display: block;
					flex: 1;
					text-align: center;
				}
				span:nth-child(1){
					margin-left: 0.32rem;
				}
			}
		}
	}
	.r{
		float: left;
		overflow-x: scroll;
		width: 60vw;
		box-sizing: border-box;
		.title{
			min-width: 39rem;
			display: flex;
			margin: 0.48rem auto 0 0 ;
			overflow: scroll;
			text-align: center;
			font-size: 0.28rem;
			color: #767676;
			font-weight: bold;
			position: relative;
			&::after{
				content: '';
				width: 6.86rem;
				height: 1px;
				background-color: rgba(118, 118, 118,0.12);
				display: none;
				position: absolute;
				left: 0rem;
				bottom: -0.2rem;
			}
			li{
				flex: 1;
			}
			li:nth-child(1){
				margin-left: 0.32rem;
			}
		}
		
		.con{
			min-width: 39rem;
			height: 5.8rem;
			margin: 0.2rem auto;
			font-size: 0.24rem;
			color: #767676;
			overflow-y: scroll;
			li{
				width: 100%;
				display: flex;
				text-align: center;
				justify-content: center;
				align-items: center;
				height: 0.86rem;
				border-bottom: 1px solid rgba(118, 118, 118,0.12);
				span{
					word-wrap: break-word;
					word-break: break-word;
					display: block;
					flex: 1;
					text-align: center;
				}
				span:nth-child(1){
					margin-left: 0.32rem;
				}
			}
		}
	}
	
}

.manage2{
	width: 100vw;
	overflow: scroll;
	position: absolute;
	.l{
		width: 36vw;
		margin-left: 2vw;
		float: left;
		.title{
			display: flex;
			margin: 0.48rem auto 0 0 ;
			overflow: scroll;
			text-align: center;
			font-size: 0.28rem;
			color: #767676;
			font-weight: bold;
			position: relative;
			&::after{
				content: '';
				width: 6.86rem;
				height: 1px;
				background-color: rgba(118, 118, 118,0.12);
				display: none;
				position: absolute;
				left: 0rem;
				bottom: -0.2rem;
			}
			li{
				flex: 1;
			}
			li:nth-child(1){
				margin-left: 0.32rem;
			}
		}
		.con{
			height: 5.8rem;
			margin: 0.2rem auto;
			font-size: 0.24rem;
			color: #767676;
			overflow-y: scroll;
			li{
				width: 100%;
				display: flex;
				text-align: center;
				justify-content: center;
				align-items: center;
				height: 0.86rem;
				border-bottom: 1px solid rgba(118, 118, 118,0.12);
				span{
					word-wrap: break-word;
					word-break: break-word;
					display: block;
					flex: 1;
					text-align: center;
				}
				span:nth-child(1){
					margin-left: 0.32rem;
				}
			}
		}
	}
	.r{
		float: left;
		overflow-x: scroll;
		width: 60vw;
		box-sizing: border-box;
		.title{
			min-width: 18rem;
			display: flex;
			margin: 0.48rem auto 0 0 ;
			overflow: scroll;
			text-align: center;
			font-size: 0.28rem;
			color: #767676;
			font-weight: bold;
			position: relative;
			&::after{
				content: '';
				width: 6.86rem;
				height: 1px;
				background-color: rgba(118, 118, 118,0.12);
				display: none;
				position: absolute;
				left: 0rem;
				bottom: -0.2rem;
			}
			li{
				flex: 1;
			}
			li:nth-child(1){
				margin-left: 0.32rem;
			}
		}
		
		.con{
			min-width: 18rem;
			height: 5.8rem;
			margin: 0.2rem auto;
			font-size: 0.24rem;
			color: #767676;
			overflow-y: scroll;
			li{
				width: 100%;
				display: flex;
				text-align: center;
				justify-content: center;
				align-items: center;
				height: 0.86rem;
				border-bottom: 1px solid rgba(118, 118, 118,0.12);
				span{
					word-wrap: break-word;
					word-break: break-word;
					display: block;
					flex: 1;
					text-align: center;
				}
				span:nth-child(1){
					margin-left: 0.32rem;
				}
			}
		}
	}
	
}

.manage3{
	width: 100vw;
	height: 55vh;
	overflow: scroll;
	position: absolute;
	table,table tr th, table tr td { border: 1px solid #ccc; }
	table{
		font-size: 0.24rem;
		border-collapse: collapse;
		text-align: center;
	}
	.l{
		float: left;
		margin: 0.52rem 0 0 0.32rem;
		width:20vw;
		
		border-collapse: collapse;
		tr{
			text-align: center;
			line-height: 0.805rem;
			td{
				height: 0.805rem;
				
			}
		}
		th{
			height: 2.08rem;
			text-align: center;
			line-height: 2rem;
			td{
				width: 20vw;
			}
		}
	}
	.topTitle{
			text-align: center;
			position: absolute;
			right: 0;
			top: 0.52rem;
			width: 76.1vw;
			overflow: hidden;
			height: 0.5rem;
			line-height: 0.5rem;
			border: 1px solid #ccc;
			font-size: 0.24rem;
			border-right: none;
			border-left: none;
		}
	.r{
		margin-top: 1.02rem;
		margin-left: -1px;
		width: 76vw;
		float: left;
		overflow-x: scroll;
		overflow-y: hidden;
		.title{
			width: 100rem;
			height: 1.6rem;
			margin-top: 1px;
			padding-bottom: 2px;
			border-top: none;
			border-left: none;
			tr{
				border-left: none;
				border-top: none;
				td{
					height: 0.75rem;
					line-height: 0.75rem;
					width: 1.5rem !important;
					border-left: none;
					border-top: none;
					text-align: center;
				}
			}
			
		}
		.con{
			border-top-width: 1px;
			width: 100rem;
			margin-top: -0.5px;
			border-left: none;
			margin-left: 0px;
			tr,td{
				border-top-color: transparent;
				text-align: center;
				border-left: none;
			}
			td{
				word-break: break-word;
				word-wrap: break-word;
				width: 1.5rem;
				height: 0.805rem;
				margin-top: -1px;
				line-height: 0.805rem;
			}
		}
	}
}

@media all screen and (min-width: 360px) {
	.manage3{
				.r{
					.con{
						margin-top: -0.5px;
						td{
							word-break: break-word;
							word-wrap: break-word;
							width: 1.5rem;
							height: 0.8045rem;
							margin-top: -1px;
							line-height: 0.8045rem;
						}
					}
				}
			}
}
@media all screen and (max-width: 360px) {
				.manage3{
					height: 66vh;
					.l{
						tr{
							line-height: 0.8rem;
							td{
								height: 0.82rem !important;
								
							}
						}
						th{
							height: 2.05rem;
							text-align: center;
							line-height: 2rem;
							
						}
					}
					.title{
						margin-top: 0px;
						padding-top: -1px;
						.subt{
							td{
								height: 37px;
							}
							
						}
					}
					.r{
						.con{
							margin-top: 0px;
							margin-bottom: 0.2rem;
							tr:nth-child(1){
								td{
									height: 0.8rem !important;
								}
							}
							tr{
								td{
									height: 0.82rem;
								}
							}
						}
					}
				}
				.subt{
					border-left: none;
					td:nth-child(1){
						height: 0.75rem;
						line-height: 0.75rem;
						width: 1.52rem !important;
						border-left: none;
						text-align: center;
					}
				}
			}

			.manage::-webkit-scrollbar{
			    width: 0px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.manage::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.manage::-webkit-scrollbar-thumb{
			    width: 0rem;
			    height: 1rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px transparent;
			    background-color: rgba(0,0,0,1);
			}
			
			.manage3::-webkit-scrollbar{
			    width: 0px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.manage3::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.manage3::-webkit-scrollbar-thumb{
			    width: 0rem;
			    height: 1rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px transparent;
			    background-color: rgba(0,0,0,1);
			}
			
			.con::-webkit-scrollbar{
			    width: 0px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.con::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.con::-webkit-scrollbar-thumb{
			    width: 0.2rem;
			    height: 1rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #ccc;
			    background-color: rgba(0,0,0,1);
			}
			.title::-webkit-scrollbar{
			    width: 0px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.title::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.title::-webkit-scrollbar-thumb{
			    width: 0.2rem;
			    height: 1rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #ccc;
			    background-color: rgba(0,0,0,1);
			}
</style>