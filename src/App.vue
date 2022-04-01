<script setup>
// components
import { darkTheme, NConfigProvider, NIcon } from 'naive-ui'

// icons
import {
  SearchOutline as SearchIcon,
  BookOutline as BookIcon,
} from "@vicons/ionicons5";

</script>

<template>
  <n-config-provider :theme="darkTheme">
    <div class="text-center">
      <div  id="nav" class="navbar flex align-bottom gap-8 justify-center text-gray-100 font-semibold ">
        <router-link to="/">
          <n-icon size="20">
            <SearchIcon />
          </n-icon> 
          <span> Cerca utente </span>
        </router-link> | 
        <router-link to="/history" class="flex flex-auto justify-center">
          <n-icon size="20">
            <BookIcon />
          </n-icon>
          <span> Cronologia </span>
        </router-link>
      </div>

      <!-- router-view renderizza il contenuto della view attuale -->
      <router-view />
    </div>
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav a:hover {
  color: rgb(134 239 172);
}

#nav a {
  justify-content: center;
  gap: 0.5rem;
  display: flex;
  flex: 1 1 auto;
}

#nav .router-link-exact-active{
  color: rgb(134 239 172);
  padding-bottom: 10px;
  border-bottom: 2px solid;
  transition-duration: 0.3s;
}
</style>