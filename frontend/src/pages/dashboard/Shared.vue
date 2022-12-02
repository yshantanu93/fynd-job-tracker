<template>
  <main class="dashboard">
    <sidebar-small />
    <sidebar />
    <div>
      <navbar />
      <div class="dashboard-page">
        <template v-if="getUser">
          <router-view />
        </template>
        <template v-else>
          {{ redirect() }}
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import SidebarSmall from "../../components/SidebarSmall.vue";
import Sidebar from "../../components/Sidebar.vue";
import Navbar from "../../components/Navbar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    SidebarSmall,
    Sidebar,
    Navbar,
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    redirect() {
      this.$router.push("/landing");
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr;
}
.dashboard-page {
  width: 90vw;
  margin: 0 auto;
  padding: 2rem 0;
}
@media (min-width: 992px) {
  .dashboard {
    grid-template-columns: auto 1fr;
  }
  .dashboard-page {
    width: 90%;
  }
}
</style>
