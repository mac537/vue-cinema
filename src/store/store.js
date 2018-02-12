import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	data: [],
  	genres: [],
  	filters: []
  },
  mutations: {
	'GET_DATA' (state, payload){
		state.data = payload.data
		state.genres = payload.genres
	},
	'SET_FILTERS' (state, payload){
		state.filters = payload
	}
  },
  actions: {
	getData: ({ commit }) => {
		axios.get('../../static/data/api_sample.json')
	    .then(response => {
      		let allGenres = []
			response.data.forEach(function(element) {
				let genres = element.movie.Genre.split(", ")
				genres.forEach(function(genre) {
					allGenres.indexOf(genre) === -1 ? allGenres.push(genre) : false;
				})
			});
      		commit('GET_DATA', {'data': response.data, 'genres': allGenres});
	    })
	    .catch(e => {
	      console.log(e)
	    })
	},
	setFilters: ({ commit }, payload) => {
		commit('SET_FILTERS', payload);
	}
  },
  getters: {
  	data: state => {
		return state.data
	},
	genres: state => {
		return state.genres
	},
	filters: state => {
		return state.filters
	}
  }
})