<template>
  <div>
    <h2>Using Pinia & Nuxt 3</h2>
    <hr>
    <pre>
      {{ quoteStore.quotes }}
    </pre>
    <button @click="addQuote">Add quote</button>
    <button @click="singleQuote">Get quote 1</button>
    <hr>
    Quote 1: {{ quoteOne}}
  </div>
</template>
<script setup lang="ts">
import {useQuoteStore} from "~/stores/quoteStore";

const quoteStore = useQuoteStore();
let quoteOne = '';

const addQuote = () => {
  quoteStore.addQuote('Where would we be without you?')
}

const singleQuote = () =>{
  quoteOne = quoteStore.getQuote(1)
}
</script>
