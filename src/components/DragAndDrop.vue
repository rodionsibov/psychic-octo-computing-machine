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
    <h1>Drag & Drop</h1>
    <div class="drop-zone">
      <div v-for="item in getList(1)" :key="item.id" class="drag-el">
        {{ item.title }}
      </div>
    </div>
    <div class="drop-zone">
      <div v-for="item in getList(2)" :key="item.id" class="drag-el">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
    text-align: center;
}

.drop-zone {
    width: 50%;
    min-height: 10px;
    margin: 50px auto;
    background-color: seashell;
}

.drag-el {
    background-color: cyan;
    color: whitesmoke;
    padding: 5px;
    margin-bottom: 10px;
}
</style>