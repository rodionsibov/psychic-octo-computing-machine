<script setup>
</script>

<template>
  <div>
    <h1>Drop Zone</h1>
    <div class="dropzone">
      <span>Drag or Drop File</span>
      <span>OR</span>
      <label for="dropzoneFile">Select File</label>
      <input type="file" id="dropzoneFile" />
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
  border: 2px dotted teal;
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
}

h1 {
  text-align: center;
}
</style>