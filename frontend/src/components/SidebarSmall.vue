<template>
  <div class="private-container">
    <transition name="fade">
      <div class="sidebar-container" v-if="getSidebarStatus">
        <div class="content">
          <button class="close-btn" @click="toggleSidebar">
            <font-awesome-icon icon="times" />
          </button>
          <header>
            <logo />
          </header>
          <div class="nav-links">
            <sidebar-link to="/" @click.native="toggleSidebar">
              <span>
                <font-awesome-icon class="icon" icon="id-card" />
              </span>
              Profile
            </sidebar-link>
            <sidebar-link to="/alljobs" @click.native="toggleSidebar">
              <span>
                <font-awesome-icon class="icon" icon="table-list" />
              </span>
              All Jobs
            </sidebar-link>
            <sidebar-link to="/addjob" @click.native="toggleSidebar">
              <span>
                <font-awesome-icon class="icon" icon="file-pen" />
              </span>
              Add Job
            </sidebar-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Logo from "./Logo.vue";
import SidebarLink from "./SidebarLink.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    logo: Logo,
    sidebarLink: SidebarLink,
  },
  computed: {
    ...mapGetters(["getSidebarStatus"]),
  },
  methods: {
    ...mapActions(["toggleSidebar"]),
  },
};
</script>
<style scoped>
@media (min-width: 992px) {
  .private-container {
    display: none;
  }
}
.sidebar-container {
  position: fixed;
  z-index: 99;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out all;
}

.content {
  background: #fff;
  width: 90vw;
  height: 90vh;
  border-radius: 1rem;
  padding: 4rem 2rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.close-btn {
  position: absolute;
  top: 15px;
  left: 20px;
  background: transparent;
  border-color: transparent;
  font-size: 2rem;
  color: #bf2525;
  cursor: pointer;
}
.nav-links {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

.logo {
  width: 10rem;
  height: auto;
}

.icon {
  font-size: 2rem;
  display: grid;
  place-items: center;
  transition: 0.3s ease-in-out all;
}

.router-link-exact-active.icon {
  color: #9a46fa;
}
.router-link-exact-active.nav-link {
  color: #9a46fa;
}
.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin: 2rem;
  color: #797979;
  text-transform: capitalize;
  transition: 0.3s ease-in-out all;
  background-color: #ebebeb;
  padding: 0.75rem 1.3rem;
  border-radius: 0.5rem;
}
.nav-link:hover .icon {
  color: #9a46fa;
}
</style>
