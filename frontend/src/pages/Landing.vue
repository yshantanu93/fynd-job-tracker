<template>
  <div>
    <main>
      <nav>
        <logo />
      </nav>
      <div class="container page">
        <div>
          <h1>Job <span>Tracking</span> App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            molestias eum libero labore aperiam? Fugiat odio, quia architecto
            consequuntur esse alias, in unde incidunt velit nostrum veniam
            quaerat necessitatibus explicabo similique, atque quidem
            voluptatibus eaque omnis distinctio error dolorum ipsum quibusdam
            corrupti. Repellendus quod amet obcaecati ad voluptatum mollitia
            iure delectus, esse natus quisquam, velit beatae harum aliquam
          </p>

          <button class="btn btn-xl" @click.prevent="handleClick">
            Login/Register
          </button>
        </div>
        <img :src="mainImage" alt="job hunt" class="img main-img" />
      </div>
    </main>
  </div>
</template>

<script>
import mainImage from "../assets/images/main.svg";
import Logo from "../components/Logo.vue";
export default {
  data() {
    return {
      mainImage,
    };
  },
  components: {
    logo: Logo,
  },
  methods: {
    handleClick() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
nav {
  width: 90vw;
  max-width: 1120px;
  margin: 0 auto;
  height: 6rem;
  display: flex;
}

.page {
  min-height: calc(100vh - 6rem);
  display: grid;
  align-items: center;
  margin-top: -3rem;
}

h1 {
  font-weight: 700;
}

span {
  color: #9a46fa;
}

p {
  color: #486581;
}

.logo {
  width: 12rem;
  height: auto;
}

.main-img {
  display: none;
}

@media (min-width: 992px) {
  .page {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
  .main-img {
    display: block;
  }
}
</style>
