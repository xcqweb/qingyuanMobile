import loading from '@/components/loading/loading'

const Loading = {
	install:function(vue){
		vue.component('Loading',loading)
		const loadingObj = vue.extend(loading)
		let vm = new loadingObj({
			el:document.createElement('div')
		})
		document.body.appendChild(vm.$el)
		
		loadingObj.prototype.close = function(){
			console.log(this)
		}
	}
}

export default Loading