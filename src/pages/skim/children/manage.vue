<template>
	<div class="manage">
		<ul class="title">
			<li>单位代码</li>
			<li>单位名称</li>
			<li>操作</li>
		</ul>
		<div class="tip" v-show="!status">没有搜到匹配的记录</div>
		<ul class="con" id="con" :style="{transform:comTranslate}" v-show="status">
			<li v-for="item in dataList">
				<span>{{item.user_code}}</span>
				<span>{{item.user_name}}</span>
				<span v-if="item.col>0"><span class="btn1" @click="skim(item.user_code)">查看</span></span>
				<span v-else><span class="btn2">催报</span></span>
			</li>
			<li class="loadmore" v-show="loadMore">
				<img src="../../../assets/images/loading/loading.gif"/>
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
				comTranslate:'translate3d(0,0,0)',
				loadMore:false
			}
		},
		props:['choseData'],
		methods:{
			initData(page){
				let parmas = {
					userType:this.choseData.usertype,
					type:this.choseData.type,
					year:this.choseData.year,
					monthDay:this.choseData.mDay,
					key:this.choseData.key,
					isImportant:0,
					offset:page,
					limit:20
				}
			this.getData(parmas)
			},
			getData(params){
				if(!this.loadMore){
					this.$store.commit('COMMIT_LOADING',true)
				}
				
				this.$axios.get(API_URL+'/mobile/mobileMgr/list',{params:params}).then( (r) => {
					if(!r){
						this.loadMore = false
						this.page--
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
						window.setTimeout( () => {
							this.loadMore = false
						},1000)
						if(!this.loadMore){
							this.dragUp(0)
						this.$store.commit('COMMIT_LOADING',false)
						if(!r.data.data.list || !r.data.data.list.rows[0]){
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
						
						
						let reData = r.data.data.list.rows
						reData.forEach( (item,index) => {
							this.dataList.push(item)
						})
						}
					}else{
						return;
					}
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
					router.push({path:'touristDetial'});
					break;
					case '宾馆酒店':
					router.push({path:'commdationDetial'});
					break;
					case '景点':
					router.push({path:'scienceDetial'});
					break;
					case '重点景点':
					router.push({path:'scienceDetial'});
					break;
					case '各区旅游局':
					router.push({path:'areaDetial'});
					break;
				}
			},
			
			dragUp(step){
				function down(){
					let num=0
					if(num<20){
						num+=step
						window.requestAnimationFrame(down)
					}else{
						return
					}
				}
				this.comTranslate = `translate3d(0,${step}px,0)`
				window.requestAnimationFrame(down)
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
						limit:20
					}
					this.dataList=[];
					this.getData(parmas)
				},
				deep:true
			}
		},
		mounted(){
			this.$nextTick( () => {
				let con = document.getElementById('con');
				let sY=0;
				let eY=0;
				con.addEventListener('touchstart',(e) => {
					sY = e.changedTouches[0].pageY
				},false)
				con.addEventListener('touchmove',(e) => {
					eY = e.changedTouches[0].pageY;
					let dis = sY-eY;
					if(dis>0){
						this.dragUp(-dis/5)
					}
				},false)
				
				con.addEventListener('touchend',(e) => {
					eY = e.changedTouches[0].pageY;
					let oli = con.getElementsByTagName('li');
					let olen = oli[0].clientHeight;
					let srollhei= con.scrollHeight;
					let scrolltop = con.scrollTop;
					let clientHei = con.clientHeight;
					console.log(srollhei,con.scrollTop,con.clientHeight,olen)
					if((srollhei-scrolltop-clientHei)<=10){
						let dis = sY-eY;
						if(dis<0){
							return;
						}
						
						if(dis>=20){
							this.loadMore = true;
							this.initData(++this.page)
							 sY=0;
							 eY=0;
						}
					}
				},false)
			})
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
		height: 5.8rem;
		margin: 0.2rem auto;
		font-size: 0.24rem;
		color: #767676;
		overflow-y: scroll;
		overflow-x: hidden;
		.loadmore{
			width: 100vw;
			display: flex;
			text-align: center;
			position: relative;
			border: none;
		}
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