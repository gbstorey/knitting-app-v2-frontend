<script setup lang="ts">
const { project } = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
console.log(project)
</script>

<template>
  <article>
    <div className="projectCard">
      <div className="projectSummary">
        <h3 className="projectTitle">{{ project.title }}</h3>
        <p className="projectDesc">{{ project.desc }}</p>
      </div>
      <div className="projectCardBottom">
        <div className="projectImg">
          <img :src="project.imgSrc" :alt="project.imgAlt" />
        </div>
        <div className="projectAttributes">
          <p>
            Type: <span id="clothingType">{{ project.attributes.type }}</span>
          </p>
          <p>
            Yarn: <span id="yarnBrand">{{ project.attributes.yarnBrand }}</span>
          </p>
          <p>
            Weight: <span id="yarnWeight">{{ project.attributes.yarnWeight }}</span>
          </p>
          <p>
            Colorway: <span id="yarnColor">{{ project.attributes.yarnColor }}</span>
          </p>
          <p>
            Gauge: <span id="gauge">{{ project.attributes.gauge }}</span>
          </p>
          <p>
            Needle Size: <span id="needleSize">{{ project.attributes.needleSize }}</span>
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 200px;
  height: 100%;
}

h3 {
  font-size: 150%;
}

p {
  font-size: 120%;
  margin-bottom: 5px;
}

.projectImg {
  width: 75%;
}

.projectCardBottom {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.projectAttributes {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
}

.projectAttributes p {
  display: flex;
  gap: 40px;
  justify-content: space-between;
}
</style>
