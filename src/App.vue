<template>
	<div class="app-container">
		<div class="content">
			<main>
				<RouterView />
			</main>

			<footer>
				<TheFooter />
			</footer>
		</div>
	</div>
</template>

<script setup>
	import { RouterView } from "vue-router";
	import TheFooter from "./components/TheFooter.vue";
</script>

<style lang="scss" scoped></style>
