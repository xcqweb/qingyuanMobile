

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

COMMIT_ShOWINFO

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
	}
}

export default mutations




