<template>
  <div class="private-container">
    <span class="icon">{{ icon }}</span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ["icon", "text"],
};
</script>
<style scoped>
.private-container {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
}

.icon {
  font-size: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
}

.icon svg {
  color: #829ab1;
}
.text {
  text-transform: capitalize;
  letter-spacing: 1px;
}
</style>
