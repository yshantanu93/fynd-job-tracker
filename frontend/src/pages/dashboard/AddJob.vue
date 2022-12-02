<template>
  <div class="private-container">
    <form class="form" id="editJobForm">
      <h3>{{ editingStatus ? "edit job" : "add job" }}</h3>
      <alert />

      <div class="form-center">
        <template v-if="editingStatus">
          <div class="form-row">
            <label for="name" class="form-label">Position</label>
            <input
              name="position"
              type="text"
              class="form-input"
              :value="getPosition"
            />
          </div>
          <div class="form-row">
            <label for="company" class="form-label">Company Name</label>
            <input
              name="company"
              type="text"
              class="form-input"
              :value="getCompany"
            />
          </div>
          <div class="form-row">
            <label for="location" class="form-label">Job Location</label>
            <input
              name="location"
              type="text"
              class="form-input"
              :value="getJobLocation"
            />
          </div>
          <div class="form-row">
            <label for="type" class="form-label">Job Type</label>
            <select name="type" class="form-input" :value="getJobType">
              <option v-for="type in type">{{ type }}</option>
            </select>
          </div>
          <div class="form-row">
            <label for="type" class="form-label">Status</label>
            <select name="status" class="form-input" :value="getStatus">
              <option v-for="status in status">{{ status }}</option>
            </select>
          </div>
        </template>
        <template v-else>
          <div class="form-row">
            <label for="name" class="form-label">Position</label>
            <input type="text" class="form-input" v-model="jobData.position" />
          </div>
          <div class="form-row">
            <label for="company" class="form-label">Company Name</label>
            <input type="text" class="form-input" v-model="jobData.company" />
          </div>
          <div class="form-row">
            <label for="location" class="form-label">Job Location</label>
            <input
              type="text"
              class="form-input"
              v-model="jobData.jobLocation"
            />
          </div>
          <div class="form-row">
            <label for="type" class="form-label">Job Type</label>
            <select class="form-input" v-model="jobData.jobType">
              <option v-for="type in type">{{ type }}</option>
            </select>
          </div>
          <div class="form-row">
            <label for="type" class="form-label">Status</label>
            <select class="form-input" v-model="jobData.status">
              <option v-for="status in status">{{ status }}</option>
            </select>
          </div>
        </template>

        <div class="btn-container">
          <button
            class="btn btn-block submit-btn"
            @click.prevent="handleSubmit"
          >
            submit
          </button>
          <button class="btn clear-btn" @click.prevent="handleClear">
            clear
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Alert from "../../components/Alert.vue";
export default {
  data() {
    return {
      jobData: {
        position: "",
        company: "",
        jobLocation: "",
        jobType: "full-time",
        status: "pending",
      },
      type: ["full-time", "part-time", "remote", "internship"],
      status: ["pending", "interview", "declined"],
    };
  },
  components: {
    alert: Alert,
  },
  computed: {
    ...mapGetters([
      "showAlert",
      "editingStatus",
      "getPosition",
      "getCompany",
      "getJobLocation",
      "getJobType",
      "getStatus",
      "getJobId",
    ]),
  },
  methods: {
    ...mapActions(["createJob", "getAllJobs", "editJob", "stopEditJob"]),
    handleSubmit() {
      if (this.editingStatus) {
        const formData = new FormData(document.forms.editJobForm);
        const payload = {
          position: formData.get("position"),
          company: formData.get("company"),
          jobLocation: formData.get("location"),
          jobType: formData.get("type"),
          status: formData.get("status"),
        };
        this.editJob(payload);
        return;
      }
      this.createJob(this.jobData);
      this.handleClear();
    },
    handleClear() {
      if (this.editingStatus) {
        this.stopEditJob();
        return;
      }
      this.jobData.company = "";
      this.jobData.position = "";
      this.jobData.jobLocation = "";
      this.jobData.jobType = "full-time";
      this.jobData.status = "pending";
    },
  },
};
</script>

<style scoped>
.private-container {
  border-radius: 0.25rem;
  width: 100%;
  background: #fff;
  padding: 3rem 2rem 4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
h3 {
  margin-top: 0;
}
.form {
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  max-width: 100%;
  width: 100%;
}
.form-row {
  margin-bottom: 0;
}
.form-center {
  display: grid;
  row-gap: 0.5rem;
}
.form-center button {
  align-self: end;
  height: 35px;
  margin-top: 1rem;
}
.btn-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  align-self: flex-end;
  margin-top: 0.5rem;
}

.btn-container button {
  height: 35px;
}
.clear-btn {
  background: #627d98;
}
.clear-btn:hover {
  background: #222;
}
@media (min-width: 992px) {
  .form-center {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 1rem;
  }
  .btn-container {
    margin-top: 0;
  }
}
@media (min-width: 1120px) {
  .form-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .form-center button {
    margin-top: 0;
  }
}
</style>
