import { defineStore } from 'pinia';
import api from '../service/api';

export const useMovies = defineStore({
  id: 'movies',
  state: () => ({
    newMoveis: [],
    popularMoveis: [],
    movieDetails:[],
    sameMovie:[],
    loading: true,

    sameLoading:true,
    error: null,
  }),
  actions: {
    async newMovies() {
      // Only fetch new movies if the array is empty
      if (this.newMoveis.length === 0) {
        const data = (await api.get('/movie/upcoming')).data;
        const results = data.results;
        this.newMoveis.push(...results);
      }
    },
    async popularMovies() {
      if (this.popularMoveis.length === 0) {
        const data = (await api.get('/movie/popular')).data;
        const results = data.results;
        this.popularMoveis.push(...results);
      }
    },

    async detailMovies(id) {
      const data = (await api.get('/movie/'+id)).data;
      console.log(data);
      return data;
    },

    async sameMovies(id) {
      const data = (await api.get('/movie/'+id+'/similar')).data.results;
      this.sameMovie = data;
      return data;
      

    },



  },

  created() {
    this.newMovies();
    this.popularMovies();
  },
});
