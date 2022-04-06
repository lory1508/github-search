<template>
  <n-tabs justify-content="space-evenly" type="line" @before-leave="toPage" class="py-4" >
    <n-tab-pane name="search" tab="Cerca utente">
    </n-tab-pane>
    <n-tab-pane name="history" tab="Cronologia">
    </n-tab-pane>
  </n-tabs>
  <DarkMode @updateTheme="updateTheme"/>
</template>
<script setup>
// UI
import { NTabs, NTabPane, NIcon } from "naive-ui";

// components
import DarkMode from "./DarkMode.vue";

// icons
import {
  SearchOutline as SearchIcon,
  BookOutline as BookIcon,
} from "@vicons/ionicons5";

// router
import router from "@/router";

const emit = defineEmits(["updateTheme"]);

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

const updateTheme = (ut) => {
  emit("updateTheme", ut);
};
</script>