<template>
  <div class="full-page main">
    <form class="form">
      <logo />

      <h3 v-if="userData.isMember">Login</h3>
      <h3 v-else>Register</h3>

      <app-alert />
      <div class="form-row" v-if="!userData.isMember">
        <label for="name" class="form-label">name</label>
        <input type="text" v-model="userData.name" class="form-input" />
      </div>
      <div class="form-row">
        <label for="email" class="form-label">email</label>
        <input type="text" v-model="userData.email" class="form-input" />
      </div>
      <div class="form-row">
        <label for="password" class="form-label">password</label>
        <input type="password" v-model="userData.password" class="form-input" />
      </div>
      <button
        type="submit"
        class="btn btn-block"
        @click.prevent="submitHandler"
        :disabled="isLoading"
      >
        submit
      </button>
      <p>
        <template v-if="userData.isMember"> Not a member yet? </template>
        <template v-else> Already a member? </template>
        <button
          type="button"
          @click.prevent="userData.isMember = !userData.isMember"
          class="member-btn"
        >
          <template v-if="userData.isMember"> Register </template>
          <template v-else> Login </template>
        </button>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Alert from "../components/Alert.vue";
import Logo from "../components/Logo.vue";
export default {
  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: "",
        isMember: true,
      },
    };
  },
  components: {
    appAlert: Alert,
    logo: Logo,
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
  methods: {
    ...mapActions(["displayAlert", "clearAlert", "registerUser", "loginUser"]),
    submitHandler() {
      if (
        !this.userData.email ||
        !this.userData.password ||
        (!this.userData.isMember && !this.userData.name)
      ) {
        const alertData = {
          showAlert: true,
          alertText: "Please Provide All Details",
          alertType: "danger",
        };
        this.displayAlert(alertData);
        this.clearAlert();
      }
      const currentUser = {
        name: this.userData.name,
        email: this.userData.email,
        password: this.userData.password,
      };
      if (this.userData.isMember) {
        this.loginUser(currentUser);
      } else {
        this.registerUser(currentUser);
      }
    },
  },
};
</script>

<style scoped>
.main {
  display: grid;
  align-items: center;
}
.logo {
  display: block;
  margin: 0 auto;
  margin-bottom: 1.38rem;
  width: 12rem;
  height: auto;
}
.form {
  max-width: 400px;
  border-top: 5px solid #2cb1bc;
}

h3 {
  text-align: center;
}
p {
  margin: 0;
  margin-top: 1rem;
  text-align: center;
}
.btn {
  margin-top: 1rem;
}
.member-btn {
  background: transparent;
  border: transparent;
  color: #2cb1bc;
  cursor: pointer;
  letter-spacing: 1px;
}
</style>
