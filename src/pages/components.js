let login = () => import('@/pages/login/login.vue')
let comtitle = () => import ('@/components/title/title')
let dateSelect = () => import ('@/components/selects/dateSelect')
let typeSelect = () => import ('@/components/selects/typeSelect')
let reports = () => import ('@/components/report/reports')
let reportsComplete = () => import ('@/components/report/reportsComplete')
let inputs = () => import ('@/components/input/input')
let alert = () => import ('@/components/dialog/alert')
let tips = () => import ('@/components/dialog/tips')
let selected = () => import ('@/components/selects/select')
let userInfo = () => import ('@/pages/userInfo/userInfo')
let tipInfo = () => import ('@/components/dialog/tipInfo')



let status=[
	'login',
	'comtitle',
	'dateSelect',
	'typeSelect',
	'reports',
	'reportsComplete',
	'inputs',
	'alert',
	'tips',
	'selected',
	'userInfo',
	'tipInfo'
]

let component={}

for(let i=0, len = status.length; i<len; i++){
	let index = status[i];
	component[index] = eval(index)
}

export default component
