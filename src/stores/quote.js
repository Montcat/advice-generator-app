import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useQuoteStore = defineStore("quote", () => {
	const quote = ref({});
	// const doubleCount = computed(() => count.value * 2)

	const getQuote = async () => {
		try {
			const data = await axios.get("https://api.adviceslip.com/advice");
			quote.value = await data.data;
		} catch (err) {
			console.log(err.message);
		}
	};

	return { quote, getQuote };
});
