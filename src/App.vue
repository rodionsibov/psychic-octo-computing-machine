<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/guide">Guide</router-link>
  </nav>
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

nav {
  padding: 1rem;
  background-color: seashell;
}

main {
  padding: 1rem;
}

a {
  margin-right: 1rem;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

a:hover,
a.router-link-active {
  border-bottom: 2px solid #3498db;
}
</style>
