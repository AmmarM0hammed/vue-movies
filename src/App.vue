<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import { ref } from 'vue'

const isChecked = ref(false)

function toggleCheckbox() {
  isChecked.value = !isChecked.value
}


</script>

<template>


    <div class="drawer">
    <input id="my-drawer" v-model="isChecked"  type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">

      <Navbar />

      <div class="pt-0">
        <RouterView />
      </div>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-white text-base-content">
        <ul class="menu  px-1 space-y-5 pt-5">
          <li @click="toggleCheckbox()">
            <RouterLink to="/" class="link-navbar" activeClass="link-navbar-active">Home </RouterLink>
          </li>
          <li @click="toggleCheckbox()">
            <RouterLink to="/new-movie" class="link-navbar" activeClass="link-navbar-active">New Movie</RouterLink>
          </li>
          <li @click="toggleCheckbox()">
            <RouterLink to="/coming-soon" class="link-navbar" activeClass="link-navbar-active">Coming Soon</RouterLink>
          </li>
        </ul>
        <br>
        <RouterLink to="/" @click="toggleCheckbox()" class="btn btn-primary link-navbar-button">Discover</RouterLink>
        
      </ul>
    </div>
  </div>
   
</template>
