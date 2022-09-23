<template>
	<div>
		<h1>Welcome to Home</h1>
		<Header :title="title"/> <!-- header.vue props와 맞춘 것?불러온 것? -->
	</div>
</template>

<script>
import Header from '@/components/layout/Header'
export default {
	data() {
		return {
			title : "Title from home"
		}
	},
	components : {
		Header
	}
}
</script>