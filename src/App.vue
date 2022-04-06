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
import { onMounted, ref } from '@vue/runtime-core';

const theme = ref();

const updateTheme = (ut) => {
  theme.value = ut == 'dark' ? darkTheme : {};
};

onMounted(() => {
  updateTheme('dark');
});

</script>

<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <div class="text-center">
      <div  id="nav" class="navbar flex align-bottom gap-8 justify-center text-gray-100 font-semibold">
        <Navbar @updateTheme="updateTheme"/>
      </div>
    <router-view />
    </div>
  </n-config-provider>
</template>