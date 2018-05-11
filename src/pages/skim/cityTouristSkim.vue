<template>
	<div class="citytourist">
		<div class="tabs">
			<div class="con">
				<p @click="tab(true)" :class="{btmline:status,active:status}">管理报表</p>
				<p @click="tab(false)" :class="{btmline:!status,active:!status}">报表明细</p>
			</div>
		</div>
			<select-group
				@cData='getChooseData'
			></select-group>
		<keep-alive>
			<component 
				:is='comcomponents'
				:choseData='choseData'
			></component>
		</keep-alive>
	</div>
</template>

<script>
	import calendarTransform from '@/plugin/calendarTransform.js'
	let year = new Date().getFullYear()
	export default{
		name:'cityTouristSkim',
		data(){
			return{
				status:true,
				choseData:{usertype:'旅行社',type:1,year:year,mDay:'10-01',key:''}
			}
		},
		computed:{
			 comcomponents(){
			 	return this.status ? 'manageSkim':'detialSkim'
			 },
		},
		methods:{
			tab(data){
				this.status = data
			},
			//获取筛选条件
			getChooseData(data){
				this.choseData = data
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.citytourist{
		font-size: 0.28rem;
		margin-top: -1px;
		.tabs{
			text-align: center;
			height: 0.58rem;
			background-color: #4E76AC;
			padding-top: 0.58rem;
			.con{
				width: 6.1rem;
				margin: auto;
				display: flex;
				p{
					flex: 1;
					height: 0.58rem;
					position: relative;
					color: rgba(255,255,255,0.62);
				}
				
				
				p:nth-child(1)::after{
					content: "";
					position: absolute;
					bottom: 0;
					left: 4rem;
					width: 1.1rem;
					height: 0.04rem;
					border-bottom: 2px solid #fff;
					transition:  all 0.2s ease-out;
				}
				.active{
					color: #fff;
				}
				.btmline:nth-child(1):after{
					left:1rem;
					width: 1.1rem;
				}
				.btmline~li::before{
					left: 3rem;
				}
				
				
				
			}
		}
	}
</style>