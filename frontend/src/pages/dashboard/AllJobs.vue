<template>
  <div class="private-container">
    <search-container />
    <jobs-container />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SearchContainer from "../../components/SearchContainer.vue";
import JobsContainer from "../../components/JobsContainer.vue";
export default {
  methods: {
    ...mapActions(["getAllJobs"]),
  },
  components: {
    jobsContainer: JobsContainer,
    searchContainer: SearchContainer,
  },
  created() {
    this.getAllJobs();
  },
  updated() {
    this.getAllJobs();
  },
};
</script>

