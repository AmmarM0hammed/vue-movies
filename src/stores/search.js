import { defineStore } from 'pinia';
import api from '../service/api';

export const useSearch = defineStore({
  id: 'search',
  state: () => ({
    movies:[],
    isLoading:true
  }),
  actions: {
    async getData(search){

       const data = (await api.get('search/movie',{
        params:{ 
            query:search ,
            page:5
        },
        
     })).data.results
       console.log(data);
       this.movies = data
       return data
    }

  },
});
