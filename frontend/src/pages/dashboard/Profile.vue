<template>
  <div class="private-container">
    <stats-container />
    <div class="profile-container">
      <form class="form">
        <h3>update profile</h3>
        <alert v-if="showAlert" />
        <div class="form-center">
          <div class="form-row">
            <label for="name" class="form-label">first name</label>
            <input type="text" v-model="formData.name" class="form-input" />
          </div>
          <div class="form-row">
            <label for="name" class="form-label">last name</label>
            <input type="text" v-model="formData.lastName" class="form-input" />
          </div>
          <div class="form-row">
            <label for="name" class="form-label">email</label>
            <input type="text" v-model="formData.email" class="form-input" />
          </div>
          <div class="form-row">
            <label for="name" class="form-label">location</label>
            <input type="text" v-model="formData.location" class="form-input" />
          </div>
          <button
            class="btn btn-block"
            @click.prevent="handleSubmit"
            :disabled="isLoading"
          >
            {{ isLoading ? "Please Wait..." : "Save Changes" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Alert from "../../components/Alert.vue";
import StatsContainer from "../../components/StatsContainer.vue";
export default {
  data() {
    return {
      formData: {
        name: "",
        lastName: "",
        email: "",
        location: "",
      },
    };
  },
  components: {
    alert: Alert,
    statsContainer: StatsContainer,
  },
  computed: {
    ...mapGetters(["showAlert", "isLoading"]),
  },
  methods: {
    ...mapActions(["updateUser"]),
    handleSubmit() {
      this.updateUser(this.formData);
      Object.keys(this.formData).forEach(
        (value) => (this.formData[value] = "")
      );
    },
  },
};
</script>

<style scoped>
.profile-container {
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
