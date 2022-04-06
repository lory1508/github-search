<script setup>
// UI
import { darkTheme, NConfigProvider, NIcon, NGlobalStyle } from 'naive-ui'

// components
import Navbar from './components/Navbar.vue';

// icons
import {
  SearchOutline as SearchIcon,
  BookOutline as BookIcon,
} from "@vicons/ionicons5";

</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />
    <div class="text-center">
      <div  id="nav" class="navbar flex align-bottom gap-8 justify-center text-gray-100 font-semibold">
        <Navbar />
      </div>
      
    <router-view />
    </div>
  </n-config-provider>
</template>