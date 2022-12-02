<template>
  <div class="private-container">
    <div :class="['sidebar-container', { 'show-sidebar': !getSidebarStatus }]">
      <div class="content">
        <header>
          <logo />
        </header>

        <div class="nav-links">
          <sidebar-link to="/">
            <span class="icon">
              <font-awesome-icon icon="id-card" />
            </span>
            Profile</sidebar-link
          >
          <sidebar-link to="/alljobs">
            <span class="icon">
              <font-awesome-icon icon="table-list" />
            </span>
            All Jobs</sidebar-link
          >
          <sidebar-link to="/addjob">
            <span class="icon">
              <font-awesome-icon icon="file-pen" />
            </span>
            Add Job</sidebar-link
          >
        </div>
      </div>
    </div>
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
.private-container {
  display: none;
}
@media (min-width: 992px) {
  .private-container {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  .sidebar-container {
    background: #fff;
    min-height: 100vh;
    height: 100%;
    width: 15rem;
    margin-left: -15rem;
    transition: 0.3s ease-in-out all;
  }

  .logo {
    width: 10rem;
  }
  .content {
    position: sticky;
    top: 0;
  }
  .show-sidebar {
    margin-left: 0;
  }
  header {
    height: 6rem;
    display: flex;
    align-items: center;
    padding-left: 2rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: #797979;
    padding: 3.5rem 0;
    padding-left: 2.5rem;
    text-transform: capitalize;
    transition: 0.3s ease-in-out all;
  }
  .router-link-exact-active {
    color: #9a46fa;
  }
  .nav-link:hover {
    background: #f3e4ff;
    padding-left: 3.5rem;
    color: #9a46fa;
  }
  .nav-link:hover .icon {
    color: #9a46fa;
    font-size: 2.7rem;
  }
  .icon {
    font-size: 2.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: 0.3s ease-in-out all;
  }
}
</style>
