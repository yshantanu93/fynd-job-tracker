<template>
  <div>
    <template v-if="isLoading"> <div class="loading"></div> </template>
    <template v-else>
      <template v-if="getTotalJobs == 0">
        <h5>no jobs to display</h5>
      </template>
      <template v-else>
        <h5>{{ getTotalJobs }} Job{{ getTotalJobs > 1 ? "s" : "" }} found</h5>
        <div class="jobs">
          <template v-for="job in getJobs">
            <job
              :position="job.position"
              :company="job.company"
              :status="job.status"
              :jobLocation="job.jobLocation"
              :jobType="job.jobType"
              :jobId="job._id"
            />
          </template>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Job from "./Job.vue";
export default {
  data() {
    return {
      jobsArr: this.getJobs,
    };
  },
  components: {
    job: Job,
  },
  computed: {
    ...mapGetters(["isLoading", "getTotalJobs", "getJobs"]),
  },
};
</script>

<style scoped>
h2 {
  text-transform: none;
}
h5 {
  font-weight: 700;
}
.jobs {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading {
  width: 6rem;
  height: 6rem;
  border: 5px solid #b3b3b3;
  margin: 0 auto;
  border-radius: 50%;
  border-top-color: #6f00ff;
  animation: spinner 2s linear infinite;
}

@media (min-width: 992px) {
  .jobs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
@media (min-width: 1500px) {
  .jobs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
}
</style>
