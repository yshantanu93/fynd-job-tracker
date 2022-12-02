<template>
  <img :src="logoImage" alt="logo" class="logo" />
</template>
<script>
import logoImage from "../assets/images/logo.svg";
export default {
  data() {
    return {
      logoImage,
    };
  },
};
</script>
