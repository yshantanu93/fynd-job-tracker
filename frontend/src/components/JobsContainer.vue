<template>
  <div>
    <template v-if="getTotalJobs == 0"> <h5>no jobs to display</h5> </template>
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Alert from "./Alert.vue";
import Job from "./Job.vue";
export default {
  data() {
    return {
      jobsArr: this.getJobs,
    };
  },
  components: {
    alert: Alert,
    job: Job,
  },
  computed: {
    ...mapGetters(["showAlert", "getTotalJobs", "getJobs"]),
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
