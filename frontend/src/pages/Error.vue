<template>
  <div class="full-page main">
    <img :src="errorImage" alt="not found" />
    <h3>Page Not Found</h3>
    <p>We can't seem to fynd the page you're looking for</p>
    <router-link to="/">Back Home</router-link>
  </div>
</template>

<script>
import errorImage from "../assets/images/not-found.svg";
export default {
  data() {
    return {
      errorImage,
    };
  },
};
</script>

<style scoped>
.main {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img {
  max-width: 700px;
  display: block;
  margin-bottom: 2rem;
}

h3 {
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #627d98;
}
a {
  color: #2cb1bc;
  text-decoration: underline;
  text-transform: capitalize;
}
</style>
