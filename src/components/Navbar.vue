<template>
  <n-tabs justify-content="space-evenly" type="line" @before-leave="toPage" class="py-4" >
    <n-tab-pane name="search" tab="Cerca utente">
    </n-tab-pane>
    <n-tab-pane name="history" tab="Cronologia">
    </n-tab-pane>
  </n-tabs>
</template>
<script setup>
// UI
import { NTabs, NTabPane, NIcon } from "naive-ui";

// icons
import {
  SearchOutline as SearchIcon,
  BookOutline as BookIcon,
} from "@vicons/ionicons5";

// router
import router from "@/router";

let current = '';
const toPage = (tabName) => {
  switch (tabName) {
    case "search":
      router.push("/");
      break;
    case "history":
      router.push("/history");
      break;
  }
  return true;
};
</script>