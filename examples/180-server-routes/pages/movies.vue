<script setup lang="ts">
import type {Movie} from "@/models/MovieInterfaces";

// variables
const movieName = ref('')
const movies = ref<Movie[]>([])

// function to search for movies. See also ./api/movies.ts server route
const searchMovies = async () => {
  try {
    movies.value = await $fetch(`/api/movies`, {
      params: {name: movieName.value} // sending the name from the textbox as a parameter
    });
    movieName.value = ''; // reset movie name
    console.log(JSON.stringify(movies.value)) // debugging - may be removed!
  } catch (error) {
    console.error('An error occurred while fetching movies:', error)
  }
}
</script>

<template>
  <!--  Using Tailwind CSS classes here, as described in the docs.
  Use your own classes here, or see https://tailwindcss.com/docs/styling-with-utility-classes and further, for details!
  -->
  <h2 class="text-2xl font-bold mb-4">Search for movies</h2>
  <div class="flex gap-4 items-center mb-6">
    <input
        type="text"
        v-model="movieName"
        @keyup.enter="searchMovies"
        placeholder="Enter movie name"
        class="p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
    <button
        @click="searchMovies"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
    >
      Search
    </button>
  </div>
  <!--  Format the movies as you like.-->
  <div v-for="movie in movies" :key="movie.imdbID" class="flex items-center gap-4 mb-4">
    <img v-if="movie.Poster"
         :src="movie.Poster"
         :alt="movie.Title"
         class="w-20 h-auto rounded-md shadow"
    >
    <div>
      <p class="font-semibold text-lg">{{ movie.Title }}</p>
      <p class="text-sm text-gray-500">{{ movie.Year }}</p>
    </div>
  </div>
</template>
