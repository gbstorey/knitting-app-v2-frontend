<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="hero">
    <div>
      <nav class="nav-container">
        <!-- Hamburger Button -->
        <h1>PRLY</h1>
        <button class="hamburger" @click="toggleMenu" aria-label="Menu">
          <span class="hamburger-lines"></span>
          <span class="hamburger-lines"></span>
          <span class="hamburger-lines"></span>
        </button>

        <!-- Navigation Links -->
        <div class="nav-links" :class="{ 'nav-active': isMenuOpen }">
          <RouterLink to="/" @click="isMenuOpen = false">Home</RouterLink>
          <RouterLink to="/about" @click="isMenuOpen = false">About</RouterLink>
        </div>
      </nav>
    </div>
    <h2>knitting, made seamless</h2>
  </header>
  <RouterView />
</template>

<style scoped>
h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1.5rem;
  color: var(--color-sub-heading);
}

h2 {
  margin: 10px 0;
  color: var(--color-heading);
}

.hero {
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 20px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-lines {
  width: 2rem;
  height: 0.25rem;
  background-color: #333;
  border-radius: 10px;
  transition: all 0.3s linear;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
    z-index: 2;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: var(--color-background-soft);
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .nav-links.nav-active {
    transform: translateX(0);
  }

  .nav-links a {
    margin: 1rem 0;
    font-size: 1.5rem;
  }
}
</style>
