<template>
  <n-card title="Song of" style="margin-bottom: 16px">
    <n-tabs default-value="oasis" justify-content="space-evenly" type="line">
      <n-tab-pane name="search" tab="Cerca utente">
				<router-link to="/">
          <n-icon size="20">
            <SearchIcon />
          </n-icon> 
          <span> Cerca utente </span>
        </router-link>
      </n-tab-pane>
      <n-tab-pane name="history" tab="Cronologia">
        <router-link to="/history" class="flex flex-auto justify-center">
          <n-icon size="20">
            <BookIcon />
          </n-icon>
          <span> Cronologia </span>
        </router-link>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script setup>
// UI
import { NCard, NTabs, NTabPane, NIcon } from "naive-ui";

// icons
import {
  SearchOutline as SearchIcon,
  BookOutline as BookIcon,
} from "@vicons/ionicons5";

</script>