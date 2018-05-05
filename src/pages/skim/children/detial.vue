<template>
	<div class="manage" v-show='this.choseData.usertype==="旅行社"'>
		
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
</template>

<script>
	import router from '@/router'
	export default{
		data(){
			return{
				dataList:[]
			}
		},
		props:['choseData'],
		methods:{
			getData(params){
				this.$store.commit('COMMIT_LOADING',true)
				this.$axios.get(API_URL+'/mobile/mobileMgr/detailList',{params:params}).then( (r) => {
					if(r.data.code==='200' || r.data.code===200){
						this.$store.commit('COMMIT_LOADING',false)
						this.dataList = r.data.data.list.rows
					}else{
						return;
					}
				})
			}
		},
		watch:{
			choseData:{
				handler:function(val){
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
.manage{
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
		min-width: 46.8rem;
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