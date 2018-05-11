
<template>
	<div class="box6" v-if='!dataList.count'>
		<p class="title">{{dataList.name}}</p>
		<p class="type">黄金周{{type}}日报</p>
		<p class="report"><span @click.prevent='report(dataList,$event)'>点此上报</span></p>
	</div>
</template>

<script>
	import router from '@/router'
	export default{
		data(){
			return{
				type:''
			}
		},
		props:{
			dataList:Object
		},
		methods:{
			report(data,e){
				this.$store.commit('COMMIT_DATE',data.reportUrl.split("/")[4])
				this.$store.commit('COMMIT_DAY',data.name)
				switch(this.type){
					case '旅行社':
					return router.replace({path:'tourist'})
					case '宾馆酒店':
					return router.replace({path:'commdation'})
					case '景点':
					return  router.replace({path:'science'})
					case '各区旅游局':
					return  router.replace({path:'areas'})
				}
			}
		},
		mounted(){
			
			if(window.sessionStorage.getItem('users')){
				let users = JSON.parse(window.sessionStorage.getItem('users'))
				this.type = users.usertype
			}
		},
		computed:{}
	}
</script>

<style scoped lang="less">
.box6{
	width: 6.86rem;
	height: 1.96rem;
	border: 0.03rem solid #1CB394;
	border-radius: 0.18rem;
	margin-top: 0.32rem;
	margin-left: 0.32rem;
	text-align: center;
	.title{
		font-size: 0.32rem;
		color: #686B6D;
		height: 0.44rem;
		line-height: 0.44rem;
		margin-top: 0.3rem;
	}
	.type{
		font-size: 0.24rem;
		margin-top: 0.14rem;
		height: 0.34rem;
	}
	.report{
		font-size: 0.20rem;
		font-weight: bold;
		color: #1CB394;
		margin: 0.16rem auto;
		span:active{
			background-color: rgba(0, 0, 0, 0.42)
		}
	}
}
	
</style>