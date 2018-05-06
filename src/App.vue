<template>
  <div id="appBox">
   		 <transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
    <alert
    	:alerts='comTips'
    	v-show='isShow'
    ></alert>
    <tips
    	 v-show="comShow"
    ></tips>
    <!--<selected></selected>-->
     <user-info></user-info>
     <tip-info
     	:alerts='tipTxt'
     	></tip-info>
  </div>
  
</template>

<script>
export default {
  name: 'appBox',
  computed:{
  	comTips(){
  		return this.$store.state.alert
  	},
  	isShow(){
  		return this.$store.state.showalert
  	},
  	comShow(){
				return this.$store.state.tipInfo.tipsShow
		},
		tipTxt(){
			return this.$store.state.tipTxt
		}
  },
  mounted(){
//	this.$axios.get(API_URL+'/mobile/checkLogin').then( re => {})
  }
}
</script>

<style>
	
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
	
#appBox {
 	width: 100vw;
 	height: 100vh;
 	overflow-x: hidden;
}

html,body{
 	width: 100vw;
 	overflow-x: hidden;
 }
 
  body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}

/*a:link { text-decoration: none;color: blue}
a:active { text-decoration:blink}
a:hover { text-decoration:underline;color: red} 
a:visited { text-decoration: none;color: green}*/
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p,h1,span,font,a,li{
      font-family: "Microsoft YaHei","SF Pro SC","HanHei SC","PingFang SC",Arial,Helvetica,sans-serif,"SimSun";

}   

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
</style>
