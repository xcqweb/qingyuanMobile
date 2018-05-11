
let year = new Date().getFullYear()
  const state={
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
  	dateIndex:0,//第几天
}




export default state