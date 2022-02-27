<script setup>
import { ref } from "@vue/reactivity";

const items = ref([
  {
    id: 0,
    title: "Item A",
    list: 1
  },
  {
    id: 1,
    title: "Item B",
    list: 1
  },
  {
    id: 2,
    title: "Item C",
    list: 2
  },
]);

const getList = (list) => {
  return items.value.filter((item) => item.list == list);
};
</script>

<template>
  <div>
    <h1>drag and drop</h1>
    <div class="drop-zone">
      <div v-for="item in getList" :key="item.id">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>