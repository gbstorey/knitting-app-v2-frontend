import type { Project } from '@/types/project'
import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [] as Project[],
  }),
  actions: {
    async getProjects() {
      const response = await fetch('http://localhost:3000/projects')
      this.projects = await response.json()
    },
  },
})
