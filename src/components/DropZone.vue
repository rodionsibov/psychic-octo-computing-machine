<script setup>
import { ref } from "@vue/reactivity";

const dropzoneFile = ref('')
</script>

<template>
  <div>
    <h1>Drop Zone</h1>
    <div @dragenter.prevent="toggleActive" class="dropzone">
      <span>Drag or Drop File</span>
      <span>OR</span>
      <label for="dropzoneFile">Select File</label>
      <input type="file" id="dropzoneFile" />
    </div>
    <div class="file-info">
      File: {{dropzoneFile.name}}
    </div>
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

h1 {
  text-align: center;
}

.file-info {
 width: 400px;
 margin: 10px auto;
}
</style>