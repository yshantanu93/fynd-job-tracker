<template>
  <div class="private-container">
    <header>
      <div class="main-icon">{{ company[0] }}</div>
      <div class="info">
        <h5>{{ position }}</h5>
        <p>{{ company }}</p>
      </div>
    </header>
    <div class="content">
      <div class="content-center">
        <div class="jobinfo">
          <span class="icon"><font-awesome-icon icon="location-dot" /></span>
          <span class="text">{{ jobLocation }}</span>
        </div>
        <div class="jobinfo">
          <span class="icon"><font-awesome-icon icon="calendar-check" /></span>
          <span class="text">{{ date() }}</span>
        </div>
        <div class="jobinfo">
          <span class="icon"><font-awesome-icon icon="briefcase" /></span>
          <span class="text">{{ jobType }}</span>
        </div>
        <div :class="['status', status]">{{ status }}</div>
      </div>
      <footer>
        <div class="actions">
          <router-link class="btn edit-btn" to="/addjob">
            <a @click="startEditJob(jobId)">edit job</a>
          </router-link>
          <button class="btn delete-btn" @click="deleteJob(jobId)">
            delete job
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";
import JobInfo from "./JobInfo.vue";
export default {
  props: [
    "position",
    "company",
    "status",
    "jobLocation",
    "jobType",
    "createdAt",
    "jobId",
  ],
  components: {
    jobInfo: JobInfo,
  },
  methods: {
    ...mapActions(["startEditJob", "startEditJob", "deleteJob"]),
    date() {
      let date = moment(this.createdAt);
      date = date.format("MMM Do, YYYY");
      return date;
    },
  },
};
</script>

<style scoped>
.private-container {
  background: #fff;
  border-radius: 0.25rem;
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #d9e2ec;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}
header h5 {
  letter-spacing: 0;
}
.main-icon {
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  background: #9a46fa;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin-right: 2rem;
}

.info h5 {
  margin-bottom: 0.25rem;
}
.info p {
  margin: 0;
  text-transform: capitalize;
  color: #829ab1;
  letter-spacing: 1px;
}

.pending {
  background: #fff8e7;
  color: #cc8f00;
}
.interview {
  background: #ddfee8;
  color: #009732;
}
.declined {
  color: #bf2525;
  background: #ffe9e9;
}
.content {
  padding: 1rem 1.5rem;
}
.content-center {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
}

.status {
  border-radius: 0.25rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  text-align: center;
  width: 100px;
  height: 30px;
  margin-top: 0.5rem;
}
footer {
  margin-top: 1rem;
}
.edit-btn,
.delete-btn {
  letter-spacing: 1px;
  cursor: pointer;
  height: 30px;
}
.edit-btn {
  color: #009732;
  background: #ddfee8;
  margin-right: 0.5rem;
}
.delete-btn {
  color: #bf2525;
  background: #ffe9e9;
}
.private-container:hover .actions {
  visibility: visible;
}

.jobinfo {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
}

.icon {
  font-size: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  color: #829ab1;
}
.text {
  text-transform: capitalize;
  letter-spacing: 1px;
}
</style>
