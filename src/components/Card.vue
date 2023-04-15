<script>

import { RouterLink } from 'vue-router'
export default {
    name: "Card",
    props: {
        title: String,
        date: String,
        image: String,
        id: null
    },
    components: { RouterLink },
    
}
</script>

<template>

    <RouterLink  :to="'/movies/'+id" class="inline-block w-fit">
    <div class=" flex flex-col space-y-3 ">

     <div class="relative group cursor-pointer w-52 min-h-52">
       <div class="absolute w-full h-full bg-black z-0 opacity-0 rounded-2xl transition-all group-hover:opacity-60"></div>
       <img class="rounded-2xl" :src="image">
    </div>
       <div>
       <p class="text-md text-white font-semibold">{{title}}</p>
       <p class="text-sm text-white opacity-60">{{date}}</p>
    </div>
    </div>
</RouterLink>
</template>
