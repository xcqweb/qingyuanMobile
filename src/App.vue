<template>
  <div id="app">
    <router-view />
    <alert
    	:alerts='comTips'
    	v-show='isShow'
    ></alert>
    <tips
    	 v-show="comShow"
    ></tips>
    <!--<selected></selected>-->
     <user-info></user-info>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
  	comTips(){
  		return this.$store.state.alert
  	},
  	isShow(){
  		return this.$store.state.showalert
  	},
  	comShow(){
				return this.$store.state.tipInfo.tipsShow
			}
  },
  mounted(){
//	this.$axios.get(API_URL+'/mobile/checkLogin').then( re => {})
  }
}
</script>

<style>
#app {
 	width: 100%;
 	height: 100vh;
}

html,body{
 	width: 100%;
 	
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
