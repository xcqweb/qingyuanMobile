let login = () => import('@/pages/login/login.vue')
let comtitle = () => import ('@/components/title/title')
let dateSelect = () => import ('@/components/selects/dateSelect')
let typeSelect = () => import ('@/components/selects/typeSelect')

let status=[
	'login',
	'comtitle',
	'dateSelect',
	'typeSelect'
]

let component={}

for(let i=0, len = status.length; i<len; i++){
	let index = status[i];
	component[index] = eval(index)
}

export default component
