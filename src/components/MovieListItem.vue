<template>
	<div class="omdb-movie">
	  	<div class="omdb-movie__left">
	  		<img :src="movie.Poster" class="omdb-movie__poster">
		</div>
		<div class="omdb-movie__right">
			<h1 class="omdb-movie__title">{{ movie.Title }}</h1>
			<div class="omdb-movie__runtime">{{ movie.Runtime }}</div>
			<div class="omdb-movie__genre">{{ movie.Genre }}</div>
			<div class="omdb-movie__director">Directores: {{ movie.Director }}</div>
			<div class="omdb-movie__actors">Actores: {{ movie.Actors }}</div>
			<div class="omdb-movie__rated">{{ movie.Rated }}</div>
			<div class="omdb-movie__sessions">
				<div class="omdb-movie__sessions-wrapper" v-for="session in filteredSession(sessions)">
					<div class="omdb-movie__sessions-time">{{formatSessionTime(session.time)}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment-timezone'
	export default {
		props: ['movie', 'sessions'],
		methods: {
			formatSessionTime(raw){
				return this.$moment(raw).format('h:mm A')
			},
			filteredSession(sessions){
				return sessions.filter(session => {
					return this.$moment(session.time).isSame(this.currentDay, 'day')
				})
			}
		},
		computed: {
			currentDay(){
		      return moment()
		    }
		}
	}
</script>

<style lang="scss" scoped>

	.omdb-movie{
		display: flex;
		margin-bottom: 15px;
		border-bottom: 1px solid #B5BEBF;
	    padding-bottom: 10px;
		&__left{
	    	max-width: 176px;
		}
		&__right{
			margin-left: 20px;
		}
		&__poster{
			max-width: 100%;
		}
		&__title{
			margin: 0;
			font-size: 22px;
		}

		&__runtime, &__genre, &__director, &__actors, &__rated{
			margin: 2px 0;
			font-size: 16px;
			color: #586567;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
	    	line-height: 1.4;
		}

		&__sessions{
			margin-top: 20px;
		}

		&__sessions-wrapper{
			position: relative;
			vertical-align: top;
			text-align: center;
			margin: 0 8px 8px 0;
			display: inline-block;
		}

		&__sessions-time{
    		padding: 10px;
    		background-color: #B5BEBF;
    		color: #FFF;
		}
	}
	
</style>