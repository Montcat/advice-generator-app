<template>
	<div class="home-container">
		<div class="home-content">
			<div class="display-card" v-for="{ id, advice } in quote" :key="id">
				<span class="advice-number">ADVICE #{{ id }}</span>
				<p class="advice-content">
					{{ advice }}
				</p>
				<span class="divider-icon">
					<IconDividerDesktop />
				</span>
				<span class="dice-icon" @click="quoteStore.getQuote()">
					<IconDice />
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import IconDividerDesktop from "@/components/icons/IconDividerDesktop.vue";
	import IconDice from "../components/icons/IconDice.vue";
	import { onMounted } from "vue";
	import { useQuoteStore } from "@/stores/quote";
	import { storeToRefs } from "pinia";

	const quoteStore = useQuoteStore();

	const { quote } = storeToRefs(quoteStore);

	onMounted(async () => {
		await quoteStore.getQuote();
	});
</script>

<style lang="scss" scoped>
	@media screen and (max-width: 480px) {
		.display-card {
			width: 100%;
		}
	}
	.home-container {
		min-width: 100svw;
		min-height: 100svh;
		display: flex;
		justify-content: center;
		align-items: center;

		.home-content {
			display: flex;
			justify-content: center;
			align-items: center;

			.display-card {
				background-color: var(--neutral-dark-grayish-blue);
				display: flex;
				align-items: center;
				flex-direction: column;
				border-radius: 1rem;
				padding: 2rem 2rem 3rem;
				gap: 2rem;

				.advice-number {
					color: var(--primary-neon-green);
					opacity: 0.8;
					letter-spacing: 0.3rem;
					font-size: 0.7rem;
				}

				.advice-content {
					text-align: center;
					font-size: 1.5rem;
					padding: 0rem 3rem;
				}

				.dice-icon {
					position: absolute;
					bottom: -1.5rem;
					background-color: var(--primary-neon-green);
					width: 3rem;
					height: 3rem;
					border-radius: 1.5rem;
					display: flex;
					justify-content: center;
					align-items: center;
					transition: 0.5s;
				}

				.dice-icon:hover {
					box-shadow: 0px 0px 2rem 1px var(--primary-neon-green);
					-webkit-box-shadow: 0px 0px 2rem 1px var(--primary-neon-green);
					-moz-box-shadow: 0px 0px 2rem 1px var(--primary-neon-green);
				}
			}
		}
	}
</style>
