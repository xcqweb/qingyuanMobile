<template>
	<div>
		<div class="tip" v-show="!status">没有搜到匹配的记录</div>
		<div class="manage1" v-if='choseData.usertype==="旅行社"&&status'>
			<ul class="title">
				<li>单位代码</li>
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
			
			<ul class="fixedTitle">
				<li>单位代码</li>
				<li v-for="item in dataList">{{item.companyName}}</li>
			</ul>
			
			<ul class="con">
				<li v-for="item in dataList">
					<span>{{item.companyName}}</span>
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
		
		<div class="manage2" v-if='choseData.usertype==="宾馆酒店"&&status'>
			<ul class="title">
				<li>单位代码</li>
				<li>总接待人数</li>
				<li>国内(人)</li>
				<li>国外(人)</li>
				<li>营业收入(万元)</li>
				<li>平均房价(元)</li>
				<li>开房率(%)</li>
				<li>实际出租客房(间)</li>
			</ul>
			
			<ul class="fixedTitle">
				<li>单位代码</li>
				<li v-for="item in dataList">{{item.companyName}}</li>
			</ul>
			
			<ul class="con">
				<li v-for="item in dataList">
					<span>{{item.companyName}}</span>
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
		
		<div class="manage2" v-if='(choseData.usertype==="景点" || choseData.usertype==="重点景区")&&status'>
			<ul class="title">
				<li>单位代码</li>
				<li>接待人数</li>
				<li>去年同期接待人数</li>
				<li>接待人数同比</li>
				<li>营业收入</li>
				<li>去年同期(营业收入)</li>
				<li>收入同比</li>
				<li>当日旅游情况综述</li>
			</ul>
			
			<ul class="fixedTitle">
				<li>单位代码</li>
				<li v-for="item in dataList">{{item.userName}}</li>
			</ul>
			
			<ul class="con">
				<li v-for="item in dataList">
					<span>{{item.userName}}</span>
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
		
		<div class="manage3" v-if='choseData.usertype==="各区旅游局"&&status'>
			<ul class="title">
				<li>单位代码</li>
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
			
			<ul class="fixedTitle">
				<li>单位代码</li>
				<li v-for="item in dataList">{{item.new.userName}}</li>
			</ul>
			
			<ul class="con">
				<li v-for="item in dataList">
					<span>{{item.new.userName}}</span>
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
						this.status = true
						this.$store.commit('COMMIT_LOADING',false)
						if(!r.data.data.list || !r.data.data.list.rows[0]){
							this.status = false
							this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'无数据!',err:true})
						if(timer){
							clearTimeout(timer)
						}
						var timer = setTimeout ( () => {
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'无数据!',err:true})
						},3000)
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
	position: relative;
	.fixedTitle{
		position: fixed;
		width: 46/16rem;
		height: auto;
		text-align: center;
		top: 4.22rem;
		left: 0;
		color: #767676;
		background-color: #fff;
		z-index: 0;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-left: 0.32rem;
		display: flex;
		
		li:nth-child(1){
			font-size: 0.28rem;
			font-weight: bold;
			border: none;
			flex-basis: 0.86rem;
		}
		li{
			height: 0.86rem;
			font-size: 0.24rem;
		}
	}
	.title{
		min-width: 46.8rem;
		display: flex;
		margin: 0.5rem auto 0 0 ;
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
		min-width: 46.8rem;
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

.manage2{
	width: 100vw;
	overflow: scroll;
	position: relative;
	.fixedTitle{
		position: fixed;
		width: 46/16rem;
		height: auto;
		text-align: center;
		top: 4.22rem;
		left: 0;
		color: #767676;
		background-color: #fff;
		z-index: 0;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-left: 0.32rem;
		display: flex;
		
		li:nth-child(1){
			font-size: 0.28rem;
			font-weight: bold;
			border: none;
			flex-basis: 0.86rem;
		}
		li{
			height: 0.86rem;
			font-size: 0.24rem;
		}
	}
	.title{
		min-width: 24rem;
		display: flex;
		margin: auto;
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
		min-width: 24rem;
		height: 66vh;
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


.manage3{
	width: 100vw;
	overflow: scroll;
	position: relative;
	.fixedTitle{
		position: fixed;
		width: 46/16rem;
		height: auto;
		text-align: center;
		top: 4.22rem;
		left: 0;
		color: #767676;
		background-color: #fff;
		z-index: 0;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-left: 0.32rem;
		display: flex;
		
		li:nth-child(1){
			font-size: 0.28rem;
			font-weight: bold;
			border: none;
			flex-basis: 0.86rem;
		}
		li{
			height: 0.86rem;
			font-size: 0.24rem;
		}
	}
	.title{
		min-width: 80rem;
		display: flex;
		margin: auto;
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
		min-width: 80rem;
		height: 66vh;
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