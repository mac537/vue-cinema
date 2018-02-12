<template>
  <div class="omdb-movie-list">
    <div v-if="filteredMovies.length">
      <movie-list-item v-for="(movie, index) in filteredMovies" :key="movie.id" :movie="movie.movie" :sessions="movie.sessions"></movie-list-item>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>

import moment from 'moment-timezone'
import MovieListItem from './MovieListItem.vue'

export default {
  name: 'MovieList',
  components: {
    'movie-list-item': MovieListItem
  },
  computed: {
    filteredMovies(){
      return this.$store.getters.data.filter(this.addFilter)
    },
    genres(){
      return this.$store.getters.filters
    }
  },
  methods: {
    addFilter(movie){
      let moviesGenres = movie.movie.Genre.split(', ')
      let matched = true
      this.genres.forEach(genre => {
        if (moviesGenres.indexOf(genre) === -1) {
          matched = false
        }
      })
      return matched
    }
  },
  created() {
    this.$store.dispatch('getData')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
