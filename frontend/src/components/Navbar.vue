<template>
  <div class="private-container">
    <div class="nav-center">
      <button class="toggle-btn" @click.prevent="toggleSidebar">
        <font-awesome-icon icon="bars" />
      </button>

      <div>
        <logo />
        <h3 class="logo-text">dashboard</h3>
      </div>

      <div class="btn-container">
        <button class="btn" @click.prevent="toggleDropdown">
          <font-awesome-icon icon="circle-user" />
          {{ getUserName }}
          <font-awesome-icon icon="caret-down" />
        </button>
        <template v-if="isDropdown">
          <div class="dropdown">
            <button class="dropdown-btn" @click.prevent="logoutUser">
              logout
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isDropdown: false,
    };
  },
  components: {
    logo: Logo,
  },
  computed: {
    ...mapGetters(["getUserName"]),
  },
  methods: {
    ...mapActions(["toggleSidebar", "logoutUser"]),
    toggleDropdown() {
      this.isDropdown = !this.isDropdown;
    },
  },
};
</script>

<style scoped>
.private-container {
  position: sticky;
  top: 0;
  background: #fff;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
}
.logo {
  display: flex;
  align-items: center;
  width: 10rem;
}
.nav-center {
  display: flex;
  width: 90vw;
  align-items: center;
  justify-content: space-between;
}
.toggle-btn {
  background: transparent;
  border-color: transparent;
  font-size: 2rem;
  color: #9a46fa;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.btn-container {
  position: relative;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.dropdown {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background: #f3e4ff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
}
.dropdown-btn {
  background: transparent;
  border-color: transparent;
  color: #9a46fa;
  letter-spacing: 1px;
  text-transform: capitalize;
  cursor: pointer;
}
.logo-text {
  display: none;
  margin: 0;
}
@media (min-width: 992px) {
  .nav-center {
    width: 90%;
  }
  .logo {
    display: none;
  }
  .logo-text {
    display: block;
  }
}
</style>
