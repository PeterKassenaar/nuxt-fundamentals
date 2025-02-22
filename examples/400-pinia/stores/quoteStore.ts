import {defineStore} from "pinia";

export const useQuoteStore = defineStore('quoteStore', () => {
    const quotes = ref(['Hello World', 'This world is not my home'])
    const index = ref(0);

    const addQuote = (quote: string) => {
        quotes.value.push(quote)
    }

    const getQuote = computed(() => {
        return quotes.value[index.value]
    });

    return {quotes, addQuote, getQuote, index}
})
