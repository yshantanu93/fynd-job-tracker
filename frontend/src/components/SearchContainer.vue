<template>
  <form class="form">
    <h4>search form</h4>
    <div class="form-center">
      <div class="form-row">
        <label for="search" class="form-label">Search</label>
        <input
          name="search"
          type="text"
          class="form-input"
          v-model="searchParams.search"
        />
      </div>

      <div class="form-row">
        <label for="status" class="form-label">status</label>
        <select name="status" class="form-input" v-model="searchParams.status">
          <option v-for="status in status">{{ status }}</option>
        </select>
      </div>
      <div class="form-row">
        <label for="type" class="form-label">Type</label>
        <select name="type" class="form-input" v-model="searchParams.type">
          <option v-for="type in type">{{ type }}</option>
        </select>
      </div>
      <div class="form-row">
        <label for="sort" class="form-label">Sort</label>
        <select name="sort" class="form-input" v-model="searchParams.sort">
          <option v-for="sort in sort">{{ sort }}</option>
        </select>
      </div>
      <div class="btn-container">
        <button class="btn btn-block submit-btn" @click.prevent="handleSubmit">
          submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      searchParams: {
        search: "",
        status: "all",
        type: "all",
        sort: "oldest",
      },
      status: ["all", "pending", "interview", "declined"],
      type: ["all", "full-time", "part-time", "remote", "internship"],
      sort: ["oldest", "latest", "a-z", "z-a"],
    };
  },
  methods: {
    ...mapActions(["getAllJobs", "updateState"]),
    handleSubmit() {
      this.updateState(this.searchParams);
      this.getAllJobs();
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
  max-width: 100%;
}
.form-input,
.form-select,
.btn-block {
  height: 35px;
}
.form-row {
  margin-bottom: 0;
}
.form-center {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;
  row-gap: 0.5rem;
}
h5 {
  font-weight: 700;
}
.btn-block {
  align-self: end;
  margin-top: 1rem;
}
@media (min-width: 768px) {
  .form-center {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 992px) {
  .form-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .btn-block {
    margin-top: 2.25rem;
  }
}
</style>
