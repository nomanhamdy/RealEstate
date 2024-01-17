<template>
  <div class="supervision-dashboard">
    <h2>Supervision Dashboard</h2>
    <ul v-if="projects.length">
      <li v-for="project in projects" :key="project.id" class="project-item">
        <h3>{{ project.title }}</h3>
        <p class="status">Status: <span :class="`status-${project.status.toLowerCase()}`">{{ project.status }}</span></p>
        <button @click="updateProjectStatus(project)" class="btn update-status-btn">Update Status</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [], // Placeholder for project data
    };
  },
  methods: {
    fetchProjectsForSupervision() {
      // Placeholder function for API call to fetch projects
      return [
        { id: 1, title: "Highrise Building Project", status: "In Progress" },
        // Add more sample projects
      ];
    },
    updateProjectStatus(project) {
      // Logic to update project status
      console.log(`Status for ${project.title} updated.`);
    },
  },
  mounted() {
    this.projects = this.fetchProjectsForSupervision();
  }
};
</script>

<style scoped>
.supervision-dashboard h2 {
  color: #34495e;
  font-size: 28px;
  margin-bottom: 20px;
}

.project-item {
  background-color: #ecf0f1;
  border: 1px solid #bdc3c7;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.project-item h3 {
  margin: 0;
  color: #2980b9;
  font-size: 20px;
}

.status {
  font-weight: 500;
}

.status-in-progress {
  color: #f39c12;
}

.status-completed {
  color: #27ae60;
}

.btn.update-status-btn {
  background-color: #3498db;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.btn.update-status-btn:hover {
  background-color: #2980b9;
}
</style>
