<template>
	<el-row>
	  <el-col :span="18">
	  	<movie-list></movie-list>
	  </el-col>
		<el-col :span="6">
			<movie-filter></movie-filter>
		</el-col>
	</el-row>
</template>

<script>
	import MovieFilter from '@/components/MovieFilter'
	import MovieList from '@/components/MovieList'
	export default{
		data(){
			return{

			}
		},
		components: {
			'movie-filter': MovieFilter,
			'movie-list': MovieList
		}
	}
</script>