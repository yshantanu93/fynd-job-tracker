<template>
  <div v-if="showAlert" :class="['alert', 'alert-' + alertType]">
    {{ alertText }}
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["showAlert", "alertText", "alertType"]),
  },
};
</script>
