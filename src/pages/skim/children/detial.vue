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
				<!--<tr class="con" v-for="item in dataList" v-if="item.new">-->
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
					<tr>
						<td v-for="i in repeatTitle">2017前一天</td>
						 <td v-for="i in 22">2018前一天</td>
						<td v-for="i in 22">同比%</td>
					</tr>
					
				</table>
				<table class="con" border="0" cellspacing="0" cellpadding="10">
					<!--<tr><th>Header</th></tr>-->
					<!--<tr><td>Data</td></tr>-->
				</table>
			</div>
			
			<!--<div class="r">-->
				<!--<div class="topTitle">旅游接待总人数和总收入</div>
				
				<ul class="title">
					<li>总人数</li>
					<li>总收入</li>
					<li>人均消费</li>
					<li>外汇收入(万美元)</li>
					<li>一天游接待总人数(万人)</li>
					<li>一天游总收入(亿元)</li>
					<li>一天游人均消费(元)</li>
					<li>过夜游接待总人数(万人)</li>
					<li>过夜游总收入(亿元)</li>
					<li>过夜游人均消费(元)</li>
					<li>旅行社接待国内外总人数(人次)</li>
					<li>旅行社组团出游总人数(人次)</li>
					<li>酒店和社会旅馆出游总人数(万人)</li>
					<li>酒店和社会旅馆国内人数(万人次)</li>
					<li>酒店和社会旅馆境外人数(万人次)</li>
					<li>直报系统中宾馆数量(个)</li>
					<li>直报系统中宾馆接待人数(万人)</li>
					<li>其他宾馆数量(个)</li>
					<li>其他宾馆接待人数(万人)</li>
					<li>景区接待总人数(万人)</li>
					<li>景区接待国内人数(万人)</li>
					<li>景区接待国外人数(万人)</li>
				</ul>
				
				<ul class="con">
					<li v-for="item in dataList"  v-if="item.new">
						<span>{{item.new.travelRecPersonSum}}</span>
						<span>{{item.new.travelRecIncomeSum}}</span>
						<span>{{item.new.travelRecCostAvg}}</span>
						<span>{{item.new.travelRecOutIncome}}</span>
						<span>{{item.new.oneDayPersonSum}}</span>
						<span>{{item.new.oneDayIncomeSum}}</span>
						<span>{{item.new.oneDayCostAvg}}</span>
						<span>{{item.new.passNightPersonSum}}</span>
						<span>{{item.new.passNightIncomeSum}}</span>
						<span>{{item.new.passNightCostAvg}}</span>
						<span>{{item.new.tguonei}}</span>
						<span>{{item.new.tteamTotal}}</span>
						<span>{{item.new.hotelPersonSum}}</span>
						<span>{{item.new.hotelInSum}}</span>
						<span>{{item.new.hotelOutSum}}</span>
						<span>{{item.new.hotelSum}}</span>
						<span>{{item.new.hotelRecSum}}</span>
						<span>{{item.new.hotelOtherSum}}</span>
						<span>{{item.new.hotelOtherRecSum}}</span>
						<span>{{item.new.scenicPersonSum}}</span>
						<span>{{item.new.scenicInSum}}</span>
						<span>{{item.new.scenicOutSum}}</span>
					</li>
				</ul>
			</div>-->
		</div>
		
	</div>
</template>

<script>
	import router from '@/router'
	export default{
		data(){
			return{
				dataList:[],
				status:true
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
						console.log(r.data.data.list)
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
					}
				})
			}
		},
		watch:{
			choseData:{
				handler:function(val){
					console.log(val)
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
			min-width: 16rem;
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
			min-width: 16rem;
			height: 5.8rem;
			margin: 0.2rem auto;
			font-size: 0.24rem;
			color: #767676;
			overflow-x: scroll;
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
	height: 60vh;
	overflow: scroll;
	position: absolute;
	table,table tr th, table tr td { border: 1px solid #ccc; }
	table{
		font-size: 0.24rem;
		border-collapse: collapse;
	}
	.l{
		float: left;
		margin-top: 0.5rem;
		width:20vw;
		height: 9rem;
		
		border-collapse: collapse;
		tr{
			text-align: center;
			line-height: 0.86rem;
			td{
				height: 0.86rem;
				
			}
		}
		th{
			height: 2.08rem;
			line-height: 2rem;
			td{
				width: 1rem;
			}
		}
	}
	.topTitle{
			text-align: center;
			position: absolute;
			right: 0;
			top: 0.5rem;
			width: 80.1vw;
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
		width: 79.8vw;
		float: left;
		overflow-x: scroll;
		
		.title{
			width: 80rem;
			height: 1.6rem;
			tr{
				td{
					height: 0.75rem;
					line-height: 0.75rem;
					text-align: center;
				}
			}
		}
		.con{
			
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