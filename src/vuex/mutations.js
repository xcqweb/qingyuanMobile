let year = new Date().getFullYear()

export const replaceState={
commitDate:'', //上报日期
  	type:1, //上报黄金周类型
  	chooseYear:year, //上报年份
  	days:{
  		num:'10-01',
  		txt:'前一天'
  	}, //黄金周第几天
  	alert:{
  		tips:'',
  		status:false
  	}, //警告框提示
  	showalert:false, //是否显示警告框
  	confirm:false, //点击确认按钮
  	isBack:false, //是否点击返回按钮
  	save:false,//提交表单
  	exit:false, //安全退出
  	isShowInfo:false,//是否显示用户信息
  	isscroll:false,
  	userInfo:{
  		companyname:'',
  		usertype:''
  	},
  	tipTxt:{
  		status:false,
  		txt:'上报成功!',
  		err:true
  	},
  	tipInfo:{//提示框信息
  		tipsShow:true,
  		title:'',
  		type:''
  	}, 
  	str:'',//春节日期
  	
  	//查看功能
 	skimData:{
  		usertype:'旅行社',
  		usercode:'',
  		date:'',
  		dataYear:year,
  		selDate:'10-01',
  		dateIndex:0
  	},
  	//查看功能筛选条件
  	companyname:'旅行社',//单位类型
  	keys:'',//关键字
  	isLoading:false,//加载动画
  	dateIndex:1,//第几天
}


const COMMIT_DATE = 'COMMIT_DATE';
const COMMIT_TYPE = 'COMMIT_TYPE';
const COMMIT_YEAR = 'COMMIT_YEAR';
const COMMIT_DAY = 'COMMIT_DAY';
const COMMIT_TIPS = 'COMMIT_TIPS';
const COMMIT_SHOWALERT = 'COMMIT_SHOWALERT';
const COMMIT_SUBMIT = 'COMMIT_SUBMIT';
const COMMIT_ISBACK = 'COMMIT_ISBACK';
const COMMIT_SAVE = 'COMMIT_SAVE';
const COMMIT_SHOWTIPS = 'COMMIT_SHOWTIPS';
const COMMIT_EXIT= 'COMMIT_EXIT';
const COMMIT_ShOWINFO= 'COMMIT_ShOWINFO';
const COMMIT_ISSCROLL= 'COMMIT_ISSCROLL';
const COMMIT_USERINFO= 'COMMIT_USERINFO';
const COMMIT_TIPTXT= 'COMMIT_TIPTXT';
const COMMIT_ARR= 'COMMIT_ARR';

const COMMIT_LOADING= 'COMMIT_LOADING';
const COMMIT_COMPANYNAME= 'COMMIT_COMPANYNAME';
const COMMIT_KEYS= 'COMMIT_KEYS';
const COMMIT_DATEINDEX= 'COMMIT_DATEINDEX';



//重置vuex状态
const COMMIT_RESET= 'COMMIT_RESET';

//查明功能
const SKIM_DETIAL= 'SKIM_DETIAL';

const mutations={
	[COMMIT_DATE](state,val){
		this.state.commitDate = val
	},
	[COMMIT_TYPE](state,val){
		this.state.type = val
	},
	[COMMIT_YEAR](state,val){
		this.state.chooseYear = val
	},
	[COMMIT_DAY](state,val){
		this.state.days = val
	},
	[COMMIT_TIPS](state,val){
		this.state.alert = val
	},
	[COMMIT_SHOWALERT](state,val){
		this.state.showalert = val
	},
	[COMMIT_SUBMIT](state,val){
		this.state.confirm = val
	},
	[COMMIT_ISBACK](state,val){
		this.state.isBack = val
	},
	[COMMIT_SAVE](state,val){
		this.state.save = val
	},
	[COMMIT_SHOWTIPS](state,val){
		this.state.tipInfo = val
	},
	[COMMIT_EXIT](state,val){
		this.state.exit = val
	},
	[COMMIT_ShOWINFO](state,val){
		this.state.isShowInfo = val
	},
	[COMMIT_ISSCROLL](state,val){
		this.state.isscroll = val
	},
	[COMMIT_USERINFO](state,val){
		this.state.userInfo = val
	},
	[COMMIT_TIPTXT](state,val){
		this.state.tipTxt = val
	},
	[COMMIT_ARR](state,val){
		this.state.str = val
	},
	
	[COMMIT_LOADING](state,val){
		this.state.isLoading = val
	},
	
	//查看功能
	[SKIM_DETIAL](state,val){
		this.state.skimData = val
	},
	[COMMIT_COMPANYNAME](state,val){//类型
		this.state.companyname = val
	},
	[COMMIT_KEYS](state,val){ //关键字
		this.state.keys = val
	},
	[COMMIT_DATEINDEX](state,val){ //关键字
		this.state.dateIndex = val
	},
	
	//重置vuex状态
	[COMMIT_RESET](state){
		Object.keys(this.state).forEach( (item,index) => {
			this.state[item] = replaceState[item]
		})
		
	}
}

export default mutations




