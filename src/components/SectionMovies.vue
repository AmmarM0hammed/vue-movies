<script>
import Card from "@/components/Card.vue"


export default {
  name: "Section Movies",
  props:{
    title:String,
    data:null
  },
  components:{
    Card,
  },
};
</script>

<template lang="">
  <section class=" px-10 py-5">
    <div class="text-4xl font-bold">{{title}}</div>
    <div
      class="pt-10 flex flex-row gap-5 w-full relative overflow-x-scroll scroll-smooth"
    >
      <Card 
        v-for="item in data"
        :key="item"
        :title="item.title"
        :date="item.release_date"
        :id="item.id"
        :image="'https://image.tmdb.org/t/p/w500/'+item.poster_path"
      />
 
    </div>
  </section>
</template>
