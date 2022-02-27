<script setup>
import { ref } from "@vue/reactivity";

const dropzoneFile = ref("");
const active = ref(false);

const toggleActive = () => {
  active.value = !active.value;
};

const drop = (e) => {
  dropzoneFile.value = e.dataTransfer.files[0]
}

const selectedFile = () => {
  dropzoneFile.value = document.querySelector('.dropzone-file').files[0]
}

</script>

<template>
  <div @drop.prevent="drop" @change="selectedFile">
    <h1>Drop Zone</h1>
    <div
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drop.prevent="toggleActive"
      :class="{ 'active-dropzone': active }"
      class="dropzone"
    >
      <span>Drag or Drop File</span>
      <span>OR</span>
      <label for="dropzoneFile">Select File</label>
      <input type="file" id="dropzoneFile" class="dropzone-file" />
    </div>
    <div class="file-info">File: {{ dropzoneFile?.name }}</div>
  </div>
</template>

<style scoped>
.dropzone {
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  row-gap: 1rem;
  background-color: seashell;
  border: 2px dashed teal;
  transition: all 0.3s ease;
}

input {
  display: none;
}

label {
  background-color: teal;
  border-radius: 4px;
  color: whitesmoke;
  padding: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

label:hover {
  opacity: 0.8;
}

h1 {
  text-align: center;
}

.file-info {
  width: 400px;
  margin: 10px auto;
}

.active-dropzone {
  background-color: lightgreen;
}
</style>