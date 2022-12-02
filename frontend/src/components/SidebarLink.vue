<template>
  <router-link :to="to" class="nav-link"><slot /></router-link>
</template>
<script>
export default {
  props: {
    to: { type: String, required: true },
  },
};
</script>
