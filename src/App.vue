<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import DropZone from "./components/DropZone.vue";
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/guide">Guide</router-link>
  </nav>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <section>
    <hr />
    <DropZone />
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 600px;
  margin: 0 auto;
}

body {
  margin: 0;
}

nav {
  padding: 1rem;
}

main,
section {
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

hr {
  border: none;
  border-top: 1px solid lightgray;
}
</style>
