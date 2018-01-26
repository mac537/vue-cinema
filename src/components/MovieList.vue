<template>
  <div class="omdb-movie-list">
    <ul v-for="(movie, index) in movies">
      <li key="index">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  data () {
    return {
      movies: [
        { title: 'Pulp Fiction' },
        { title: 'Pulp Fiction' },
        { title: 'Pulp Fiction' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
