<template>
	<div class="manage">
		<ul class="title">
			<li>单位代码</li>
			<li>单位名称</li>
			<li>操作</li>
		</ul>
		<div class="tip" v-show="!status">没有搜到匹配的记录</div>
		<ul class="con" id="con" v-show="status">
			<li v-for="item in dataList">
				<span>{{item.user_code}}</span>
				<span>{{item.user_name}}</span>
				<span v-if="item.col>0"><span class="btn1" @click="skim(item.user_code)">查看</span></span>
				<span v-else><span class="btn2" @click="sendReport(item.email)">催报</span></span>
			</li>
		</ul>
	</div>
</template>

<script>
	import router from '@/router'
	export default{
		data(){
			return{
				dataList:[],
				page:1,
				status:true,
			}
		},
		props:['choseData'],
		methods:{
			sendReport(val){
				if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val)){
					this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'邮箱不正确!',err:true})
						if(timer){
							clearTimeout(timer)
						}
						var timer = setTimeout ( () => {
							this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'邮箱不正确!',err:true})
						},1000)
						return;
				}else{
					let params = {
						email:val,
						dataYear:this.$store.state.chooseYear,
						selDate:this.$store.state.days.num,
					}
					this.$axios.get(API_URL+'/mobile/sendEmail/golden',{params:params}).then( (r) => {
						if(r.data.code==='200' || r.data.code===200){
							this.$store.commit('COMMIT_TIPTXT',{status:true,txt:'催报成功!',err:false})
							if(timer){
								clearTimeout(timer)
							}
							var timer = setTimeout ( () => {
								this.$store.commit('COMMIT_TIPTXT',{status:false,txt:'催报成功!',err:false})
							},1000)
							this.initData(1)
							return;
						}
					})
				}
			},
			initData(page){
				let parmas = {
					userType:this.$store.state.companyname,
					type:this.$store.state.type,
					dataYear:this.$store.state.chooseYear,
					selDate:this.$store.state.days.num,
					key:this.$store.state.keys,
					isImportant:0,
					offset:this.page,
					limit:300
				}
			this.getData(parmas)
			},
			getData(params){
					this.$store.commit('COMMIT_LOADING',true)
				this.$axios.get(API_URL+'/mobile/mobileMgr/list',{params:params}).then( (r) => {
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
							return
						}
						
						
						let reData = r.data.data.list.rows
						reData.forEach( (item,index) => {
							this.dataList.push(item)
						})
					}
				})
			},
			skim(data){
//				if(this.choseData.usertype==='各区旅游局'){
					this.$store.commit('SKIM_DETIAL',{usertype:this.$store.state.companyname,usercode:data,dataYear:this.$store.state.chooseYear,selDate:this.$store.state.days.num,dateIndex:0,date:`${this.$store.state.chooseYear}-${this.$store.state.days.num}`})
//				}else{
//					this.$store.commit('SKIM_DETIAL',{usertype:this.$store.state.companyname,usercode:data,date:`${this.$store.state.chooseYear}-${this.$store.state.days.num}`})
//				}
				switch(this.$store.state.companyname){
					case '旅行社':
					router.push({path:'touristDetial'});
					break;
					case '宾馆酒店':
					router.push({path:'commdationDetial'});
					break;
					case '景点':
					router.push({path:'scienceDetial'});
					break;
					case '重点景区':
					router.push({path:'scienceDetial'});
					break;
					case '各区旅游局':
					router.push({path:'areaDetial'});
					break;
				}
			},
			
		},
		watch:{
			choseData:{
				handler:function(val){
					let parmas = {
						userType:val.usertype,
						type:val.type,
						dataYear:val.year,
						selDate:val.mDay,
						key:val.key,
						isImportant:0,
						offset:1,
						limit:1000
					}
					this.dataList=[];
					this.getData(parmas)
				},
				deep:true
			}
		},
		mounted(){
		},
		created(){
			this.initData(this.page)
		}
	}
</script>

<style scoped="scoped" lang="less">
.manage{
	width: 100%;
	.tip{
		width: 100vw;
		margin-top: 0.4rem;
		font-size: 0.28rem;
		color: #767676;
		text-align: center;
	}
	.title{
		width: 6.86rem;
		padding: 0.4rem 0 0.2rem 0;
		margin: auto;
		display: flex;
		text-align: center;
		background-color: #fff;
		font-size: 0.32rem;
		color: #767676;
		font-weight: bold;
		position: relative;
		z-index: 10000;
		&::after{
			content: '';
			width: 6.86rem;
			height: 1px;
			background-color: rgba(118, 118, 118,0.12);
			position: absolute;
			left: 0rem;
			bottom: 0;
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
		height: 6rem;
		margin: 0.2rem auto;
		font-size: 0.24rem;
		color: #767676;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		overflow-x: hidden;
		li{
			display: flex;
			text-align: center;
			justify-content: center;
			align-items: center;
			height: 0.84rem;
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
					&:active{
						background-color: rgba(0, 0, 0, 0.3)
					}
					-webkit-user-select: none;
					-ms-user-select: none;
					-moz-user-select: none;
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
					&:active{
						background-color: rgba(0, 0, 0, 0.42)
					}
					-webkit-user-select: none;
					-ms-user-select: none;
					-moz-user-select: none;
				}
			}
		}
	}
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
			
</style>