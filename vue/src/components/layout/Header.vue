<template>
	<div>          
		<div class="title_st">{{ title }}</div>
		<button @click="updateTitle">update title</button>
	</div>
</template>

<script>
	export default {
		//data의 속성값과 props의 속성값이 중복되면 안되는 것을 기억!!
		// data() 함수가 있다면, 반드시 return{}문을 작성해주어야 한다는 것도 기억하자. 아무것도 return 하지 않더라도, return문 자체는 있어야 한다.
		data(){
			return {
				//title : "Vue.js study~"
			}
		},
		//props : ['title'], //props는 배열도 객체도 가능. 부모로부터 받아오는 속성의 이름을 지정
		props :{   //객체 형태로 표현하여 props의 기본속성을 활용할 수 있다.
			title : {
				type : String,
				required : true,  //required : true - 부모컴포넌트에서 자식컴포넌트를 사용할 때 반드시 값을 넣어줘야 한다
				default : "this is default title"
			}
		},
		methods : {
			updateTitle() {
				this.title = "Title updated!"
			}
		}
	}
</script>
<style scoped>
.title_st {
	font-size:32px;
	color:rgb(37, 37, 158);

}
</style>