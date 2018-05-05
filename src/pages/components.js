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

let touristSkim = () => import ('@/pages/skim/cityTouristSkim')
let detialSkim = () => import ('@/pages/skim/children/detial')
let manageSkim = () => import ('@/pages/skim/children/manage')

let tipInfo = () => import ('@/components/dialog/tipInfo')
let selectGroup = () => import ('@/components/selects/selectGroup')

let loading = () => import ('@/components/loading/loading')


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
	'tipInfo',
	'touristSkim',
	'selectGroup',
	'detialSkim',
	'manageSkim',
	'loading'
]

let component={}

for(let i=0, len = status.length; i<len; i++){
	let index = status[i];
	component[index] = eval(index)
}

export default component
