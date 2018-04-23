let login = () => import('@/pages/login/login.vue')
let comtitle = () => import ('@/components/title/title')
let dateSelect = () => import ('@/components/selects/dateSelect')
let typeSelect = () => import ('@/components/selects/typeSelect')
let reports = () => import ('@/components/report/reports')
let reportsComplete = () => import ('@/components/report/reportsComplete')
let inputs = () => import ('@/components/input/input')

let status=[
	'login',
	'comtitle',
	'dateSelect',
	'typeSelect',
	'reports',
	'reportsComplete',
	'inputs'
]

let component={}

for(let i=0, len = status.length; i<len; i++){
	let index = status[i];
	component[index] = eval(index)
}

export default component
