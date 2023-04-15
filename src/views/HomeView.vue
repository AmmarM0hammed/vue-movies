<script setup>
import SectionMovies from '@/components/SectionMovies.vue';
import {useMovies} from "../stores/movies";
import { onMounted, ref,computed,watchEffect } from 'vue';
import {useSearch} from "../stores/search";
import { RouterLink } from 'vue-router'


const moveis = useMovies();
const loading = ref(false);
onMounted(()=>{

moveis.newMovies()
moveis.popularMovies()
loading.value = true


});

const search = ref('');
const showContent = computed(() => search.value.length > 0);
const movieList = ref(null)

watchEffect(()=>{
  movieList.value = useSearch().getData(search.value)

});
</script>

<template>
  <main>
    <!-- Hero -->
  {{ search }}
    <section class="hero">
      <div class="hero min-h-screen " style="background-image: url('./bg.jpg');">
        <div class="hero-overlay bg-opacity-0"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="">
            <h1 class="mb-5 text-[40px]  md:text-[80px] font-bold drop-shadow-2xl shadow-xl">Movies Api DB</h1>
            <p class="mb-5 md:text-[25px] font-thin  drop-shadow-2xl shadow-xl">a Simple Movies Api Build in Vue js And pinia For Learning</p>
            <div>
              <input  v-model="search" type="text" class="input mt-5" placeholder="Search ...">
              <div  v-show="showContent" class="p-2 space-y-5 relative overflow-scroll overflow-x-hidden w-full h-52 rounded-2xl mt-1 flex flex-col bg-white">


                  <div class="movie items-center w-full flex flex-row justify-between  bg-red " v-for="item in useSearch().movies" :key="item.id">
                    
                    <img :src="'https://image.tmdb.org/t/p/w500/'+item.poster_path" class=" h-24 rounded-lg">
                    <p class="text-black">
                      {{  item.title  }}
                    </p>
                    <RouterLink :to="'movies/'+item.id" class="btn btn-primary">Show</RouterLink>
                  </div>
               

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero -->
    </section>

    <div v-if="loading">
      <SectionMovies title="Up Comming" :data="moveis.newMoveis" />
    </div>
    <div v-else class="flex justify-center items-center h-80">
        <button class="btn btn-ghost text-white loading">loading</button>
   </div>
   

   <div v-if="loading">
    <SectionMovies title="Most Popular" :data="moveis.popularMoveis" />
    </div>
    <div v-else class="flex justify-center items-center h-80">
        <button class="btn btn-ghost text-white loading">loading</button>
   </div>
   
    


  </main>
</template>
