<template>
	<div>
		<h1>Welcome to About</h1>
		<Header :title = "title"/>
	</div>
</template>

<script>
import Header from '@/components/layout/Header'
export default {
	data() {
		return {
			title : "Title from about"
		}
	},
	components : {
		Header
	}
}
</script>