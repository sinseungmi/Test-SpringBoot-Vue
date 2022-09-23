//vue가 단일 페이지로 작동하기 때문에 미리 페이지들을 로딩해서 갖고 있다. 이런 각 페이지들로 이동할 수 있게 해주는게 router이다.

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
//import About from './views/About'

Vue.use(VueRouter)  //vue-router 인스턴스 생성

const router = new VueRouter({
	mode:"history",
	routes : [
		{path:"/", name:"home", component:Home},
		{path:"/about", name:"about", component:() => import('./views/About.vue')}
		
	]
})

export default router
