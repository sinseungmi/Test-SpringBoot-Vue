<template>
  <div id="app">
  	<Header></Header>
  	<div>App.vue에서 표시하는 정보입니다.</div>
  	<router-link to="/">Home</router-link> 
  	<router-link to="/about"> About </router-link>
  	<router-view></router-view>  <!-- router-link로 가져온 vue를 표시 -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>  //import는 컴포넌트를 가져와서 여기 vue에서 쓴다.
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/Header.vue'

export default {    //export는 App이 불려졌을 때(import)를 위해 만들어 놓은 것. 원하는 컴포넌트들을 적용시키려면 components에 적어놔야함
  name: 'App',      //vue 컴포넌트들이 적용되는 거 보면 파도타기?식으로 적용되는 듯
  components: {
    Header
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
	color : red;
}
</style>
