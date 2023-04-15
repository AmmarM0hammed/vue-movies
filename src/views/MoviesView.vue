<script setup>
import {useMovies} from "../stores/movies";
import { useRoute } from 'vue-router';
import { ref, onMounted, watchEffect } from 'vue';
import SectionMovies from '@/components/SectionMovies.vue';

const movie = ref(null);
const load = ref(false);


const route = useRoute();
let id = route.params.id;

onMounted(async () => {
  movie.value = await useMovies().detailMovies(id);
  useMovies().sameMovies(id);
  load.value = true
});
watchEffect(async() => {
      const newId = route.params.id; 
      load.value = false
      movie.value = await useMovies().detailMovies(newId);
      useMovies().sameMovies(newId);
      load.value = true
});


</script>
<template lang="">
    <div v-if="load">
        <div class="hero min-h-screen bg-base-200 pt-20" >

        
        <div class="hero-content flex-col lg:flex-row" >
            <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 class="text-5xl font-bold">{{movie.title}}</h1>
            <span class="text-primary" v-for="item in movie.genres" :key="item.id"> | {{item.name}} </span> 
            <p class="py-6">{{movie.overview}}</p>
            <p class="py-6">Status : {{movie.status}} | Time : {{movie.runtime}}min | data : {{movie.release_date}}</p>
            <p>Rate : {{movie.vote_average.toFixed(1)}}</p>
            </div>
            
        </div>

       

    

        </div>
        <SectionMovies  title="Same Movies" :data="useMovies().sameMovie" />
    </div>
    <div v-else class="flex justify-center items-center min-h-screen">
        <button class="btn btn-ghost text-white loading">loading</button>
   </div>
</template>
