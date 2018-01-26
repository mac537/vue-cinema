<template>
  <div class="omdb-movie-filter">
     <el-checkbox-group v-model="checkList" class="omdb-movie-filter__checkboxes">
	    <el-checkbox v-for="(genre, index) in genres" :key="index" :label="genre.name"></el-checkbox>
	  </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'MovieFilter',
  data () {
    return {
    	checkList: [],
      genres: [
      	{ name: 'Animation' },
      	{ name: 'Comedy' },
      	{ name: 'Crime' },
      	{ name: 'Documentary' },
      	{ name: 'Drama' },
      	{ name: 'Fantasy' },
      	{ name: 'Horror' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.omdb-movie-filter{
		&__checkboxes{
			display: flex;
	    flex-direction: column;
		}
	}

	.el-checkbox{
		margin: 0;
	}
</style>
