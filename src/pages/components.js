let login = () => import('@/pages/login/login.vue')

let status=[
	'login'
]

let component={}

for(let i=0, len = status.length; i<len; i++){
	let index = status[i];
	component[index] = eval(index)
}

export default component
