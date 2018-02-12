<template>
	<el-row>
	  <el-col :span="18">
	  	<movie-list></movie-list>
	  </el-col>
		<el-col :span="6" class="aside">
			<h2>Filters</h2>
			<h3>By time of date</h3>
			<movie-filter></movie-filter>
			<h3>By genre</h3>
			<movie-filter>
				<el-checkbox-group v-model="checkList">
			    <el-checkbox v-for="(genre, index) in genres" :key="index" :label="genre" @change="addFilter"></el-checkbox>
			  </el-checkbox-group>
			</movie-filter>
		</el-col>
	</el-row>
</template>

<script>
	import MovieFilter from '@/components/MovieFilter'
	import MovieList from '@/components/MovieList'
	export default{
		data(){
			return{
				checkList: []
			}
		},
		computed: {
	    genres(){
	      return this.$store.getters.genres
	    }
	  },
		components: {
			'movie-filter': MovieFilter,
			'movie-list': MovieList
		},
		methods: {
	  	addFilter(){
	  		this.$store.dispatch('setFilters', this.checkList)
	  	}
	  }
	}
</script>

<style>
	.el-checkbox{
		margin-left: 0 !important;
	}

	.aside{
		padding: 20px;
	}
</style>