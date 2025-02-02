<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { useProjectsStore } from '@/stores/projects'

const store = useProjectsStore()
store.getProjects()
</script>

<template>
  <main>
    <h2>Your Projects</h2>
    <ProjectCard v-for="(project, idx) in store.projects" :key="idx" :project="project" />
  </main>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
