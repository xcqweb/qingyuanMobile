
  const state={
  	commitDate:'', //上报日期
  	type:1, //上报黄金周类型
  	chooseYear:2018, //上报年份
  	days:'', //黄金周第几天
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
  		usertype:'',
  		usercode:'',
  		date:'',
  		dataYear:'',
  		selDate:'',
  		dateIndex:0
  	},
  	isLoading:false,//加载动画
  	
  	
}




export default state