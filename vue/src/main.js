
import App from './App.vue'

Vue.config.productionTip = false

import router from './router.js'

//인스턴스를 생성하고 index.html 파일과 연결해준다.
/*
// 제목 : ES6 기반 Vue.js 개발 프로젝트에서 마주치는 render: h => h(App) 해석
// 설명 : render:h => h(App)은 Vue.js의 기본적인 render function의 간소화 버전
// 변환과정 : #1 -> #2 -> #3 -> #4

// #1
render: function (createElement) {
    return createElement(App);
}

// #2
render (createElement) {
    return createElement(App);
}

// #3
render (h){
    return h(App);
}

// #4
// 참고 : h는 hyperscript의 약자로 HTML 구조를 생성하는 스크립트를 의미. Virtual DOM 구현에서 관행적으로 사용
render: h => h(App);
 */
new Vue({
  render: h => h(App),  //App.vue를 가지고 있음
  router
}).$mount('#app')		//app 이라는 id를 가진 태그에 해당 인스턴스를 적용하겠다
