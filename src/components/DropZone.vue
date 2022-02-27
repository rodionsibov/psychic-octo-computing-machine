<script setup>
</script>

<template>
  <div class="dropzone">
    <span>Drag or Drop File</span>
    <span>OR</span>
    <label for="dropzoneFile">Select File</label>
    <input type="file" id="dropzoneFile" />
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
  border: 2px dotted green;
}
</style>