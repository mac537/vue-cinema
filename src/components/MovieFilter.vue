<template>
  <div class="omdb-movie-filter">
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MovieFilter'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.omdb-movie-filter{
		.el-checkbox-group{
			display: flex;
	    flex-direction: column;

	    .el-checkbox{
				margin-left: 0;
			}
		}

		
	}

	
</style>
