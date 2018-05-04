


/* props  ==>
 	titleData:{
		title:'清远旅游业务统计系统',
		bgcolor:'transparent',
		showArrow:false,
		smallTitle:false
	}
*/


<template>
	<div class="box3" :style="{background:titleData.bgcolor}">
		<div class="fixBox">
			<p class="titles" v-if="titleData.smallTitle" :title="titleData.title">{{titleData.title}}</p>
			
	    	<p class="smallTitle" v-else>{{titleData.title}}</p>
	    	<span class="user" @click='showuser($event)' v-if="titleData.showUser"></span>
			<span class="back2" @click='back($event)' v-if="status"></span>
			<span class="back2" @click='backskim($event)' v-if="titleData.skimgoBack"></span>
	    	<span class="exact" v-if="titleData.showArrow" @click='send($event)'></span>
		</div>
	</div>
</template>

<script>
	import router from '@/router'
	import Bus from '@/common/bus'
	export default{
		name:'titles',
		data(){
			return{
			}
		},
		props:['titleData'],
		computed:{
			status(){
				if(!this.titleData.smallTitle && !this.titleData.showUser && this.titleData.showBack){
					return true
				}
			}
		},
		mounted(){
			Bus.$on('showtiptxt',() => {
				if(this.$store.state.tipTxt.err){//填写正确时继续提交
					return
				}
			})
		},
		methods:{
			send(e){
				Bus.$emit('checkData')
				if(this.$store.state.tipTxt.err){ //未完成填写阻止代码继续执行
					return
				}else{
					this.$store.commit('COMMIT_TIPS',{tips:'确认提交报表?',status:true})
					this.$store.commit('COMMIT_SHOWALERT',true)
					this.$store.commit('COMMIT_SAVE',true)
					this.$store.commit('COMMIT_ISBACK',false)
					this.$store.commit('COMMIT_SUBMIT',true)
				}
			},
			showuser(){
				this.$store.commit('COMMIT_ISSCROLL',true)
				this.$store.commit('COMMIT_ShOWINFO',true)
				Bus.$emit('showUser')
			},
			backskim(){
				router.go(-1)
			},
			back(e){
				this.$store.commit('COMMIT_ISBACK',true)
				this.$store.commit('COMMIT_SAVE',false)
				if(router.history.current.name==='tourist' || router.history.current.name==='commdation' ||　router.history.current.name==='science'||router.history.current.name==='areas'){
					this.$store.commit('COMMIT_TIPS',{tips:'内容尚未保存,是否退出编辑?',status:true})
					this.$store.commit('COMMIT_SHOWALERT',true)
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.box3{
		position: relative;
		text-align: center;
		padding-bottom: 0.12rem;
		.titles{
			font-size: 0.44rem;
			color: #fff;
			text-shadow: 8px 4px rgba(0,0,0,0.1);
			width: 100%;
			text-align: center;
			height: 0.6rem;
			padding-top: 0.56rem;
		}
		
		.smallTitle{
			color: #fff;
			text-shadow: 8px 4px rgba(0,0,0,0.1);
			width: 100vw;
			text-align: center;
			height: 0.6rem;
			padding-top: 0.16rem;
			line-height: 0.6rem;
			font-size: 0.34rem !important;
		}
		.back1{
			display: block;
			width: 0.34rem;
			height: 0.34rem;
			position: absolute;
			padding: 0.02rem;
			top: 0.66rem;
			left: 0.32rem;
			bottom: 0.24rem;
			background: url(../../assets/images/title/back1.png) no-repeat 0.02rem;
			background-size: 80%;
		}
		
		.back2{
			display: block;
			width: 0.34rem;
			height: 0.34rem;
			position: absolute;
			padding: 0.02rem;
			top: 0.26rem;
			left: 0.32rem;
			bottom: 0.24rem;
			background: url(../../assets/images/title/back1.png) no-repeat 0.02rem;
			background-size: 80%;
		}
		
		.user{
			display: block;
			width: 0.34rem;
			height: 0.34rem;
			position: absolute;
			padding: 0.02rem;
			top: 0.26rem;
			left: 0.32rem;
			bottom: 0.24rem;
			background: url(../../assets/images/title/man.png) no-repeat 0.02rem;
			background-size: 80%;
		}
		.exact{
			display: block;
			width: 0.34rem;
			height: 0.34rem;
			padding: 0.05rem;
			position: absolute;
			top: 0.22rem;
			right: 0.32rem;
			background: url(../../assets/images/title/exact.png) no-repeat 0.02rem;
			background-size: 80%;
		}
	}
	
   
	
	
	
</style>