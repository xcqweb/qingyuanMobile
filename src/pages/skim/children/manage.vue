<template>
	<div class="manage">
		<ul class="title">
			<li>单位代码</li>
			<li>单位名称</li>
			<li>操作</li>
		</ul>
		<ul class="con">
			<li v-for="item in dataList">
				<span>{{item.user_code}}</span>
				<span>{{item.user_name}}</span>
				<span v-if="item.col>0"><span class="btn1" @click="skim(item.user_code)">查看</span></span>
				<span v-else><span class="btn2">催报</span></span>
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
				this.$axios.get(API_URL+'/mobile/mobileMgr/list',{params:params}).then( (r) => {
					this.dataList = r.data.data.list.rows
					console.log(r)
				})
			},
			skim(data){
				if(this.choseData.usertype==='各区旅游局'){
					this.$store.commit('SKIM_DETIAL',{usertype:this.choseData.usertype,usercode:data,dataYear:this.choseData.year,selDate:this.choseData.mDay,dateIndex:0})
				}else{
					this.$store.commit('SKIM_DETIAL',{usertype:this.choseData.usertype,usercode:data,date:`${this.choseData.year}-${this.choseData.mDay}`})
				}
				
				switch(this.choseData.usertype){
					case '旅行社':
					//router.push({path:'areaDetial'});
					break;
					case '宾馆酒店':
					//router.push({path:'areas/areaDetial'});
					break;
					case '景点':
					//router.push({path:'areas/areaDetial'});
					break;
					//case '重点景点':
					router.push({path:'areas/areaDetial'});
					break;
					case '各区旅游局':
					router.push({path:'areaDetial'});
					break;
				}
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
						limit:1000
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
				limit:1000
			}
			this.getData(parmas)
		}
	}
</script>

<style scoped="scoped" lang="less">
.manage{
	width: 100%;
	.title{
		width: 6.86rem;
		margin: auto;
		display: flex;
		text-align: center;
		font-size: 0.32rem;
		color: #767676;
		font-weight: bold;
		position: relative;
		&::after{
			content: '';
			width: 6.86rem;
			height: 1px;
			background-color: rgba(118, 118, 118,0.12);
			position: absolute;
			left: 0rem;
			bottom: -0.2rem;
		}
		li:nth-child(1){
			text-align: left;
			flex: 1.5;
		}
		li:nth-child(2){
			flex: 2.5;
			text-align: center;
		}
		li:nth-child(3){
			flex: 1;
			text-align: center;
		}
	}
	
	.con{
		width: 6.86rem;
		height: 66vh;
		margin: 0.2rem auto;
		font-size: 0.24rem;
		color: #767676;
		overflow-y: scroll;
		li{
			display: flex;
			text-align: center;
			justify-content: center;
			align-items: center;
			height: 0.86rem;
			border-bottom: 1px solid rgba(118, 118, 118,0.12);
			span{
				word-wrap: break-word;
				word-break: break-word;
			}
			span:nth-child(1){
				text-align: left;
				flex: 1.5;
			}
			span:nth-child(2){
				text-align: center;
				flex: 2.5;
			}
			span:nth-child(3){
				flex: 1;
				text-align: center;
				position: relative;
				.btn1{
					position: absolute;
					right: 0.06rem;
					transform: translateY(-50%);
					border-radius: 0.04rem;
					display: block;
					width: 0.94rem;
					height: 0.46rem;
					font-size: 0.24rem;
					background-color: #1CB394;
					color: #fff;
					line-height: 0.46rem;
					text-align: center;
				}
				.btn2{
					position: absolute;
					right: 0.06rem;
					transform: translateY(-50%);
					border-radius: 0.04rem;
					display: block;
					width: 0.94rem;
					height: 0.46rem;
					font-size: 0.24rem;
					background-color: #FB5050;
					color: #fff;
					line-height: 0.46rem;
					text-align: center;
				}
			}
		}
	}
}

			.con::-webkit-scrollbar{
			    width: 1px;
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
			
</style>