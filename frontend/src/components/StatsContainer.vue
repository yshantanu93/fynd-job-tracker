<template>
  <div class="private-container">
    <div class="stat-container interview">
      <header>
        <span class="count interview">{{ getInterview || 0 }}</span>
        <font-awesome-icon class="icon interview" icon="calendar-check" />
      </header>
      <h5 class="title">interviews scheduled</h5>
    </div>
    <div class="stat-container pending">
      <header>
        <span class="count pending">{{ getPending || 0 }}</span>
        <font-awesome-icon class="icon pending" icon="hourglass-half" />
      </header>
      <h5 class="title">pending applications</h5>
    </div>
    <div class="stat-container declined">
      <header>
        <span class="count declined">{{ getDeclined || 0 }}</span>
        <font-awesome-icon class="icon declined" icon="ban" />
      </header>
      <h5 class="title">jobs declined</h5>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["getStats"]),
  },
  computed: {
    ...mapGetters(["getDeclined", "getInterview", "getPending"]),
  },
  created() {
    this.getStats();
  },
};
</script>

<style scoped>
.private-container {
  margin-bottom: 5rem;
  display: grid;
  row-gap: 1.5rem;
}
@media (min-width: 768px) {
  .private-container {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
}
@media (min-width: 1120px) {
  .private-container {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
}
.stat-container {
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
}

.stat-container.pending {
  border-bottom: 1rem solid #ffbd1e;
}
.stat-container.interview {
  border-bottom: 1rem solid #009732;
}
.stat-container.declined {
  border-bottom: 1rem solid #bf2525;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.count {
  display: block;
  font-weight: 700;
  font-size: 50px;
}

.count.pending {
  color: #ffbd1e;
}
.count.interview {
  color: #009732;
}
.count.declined {
  color: #bf2525;
}
.title {
  margin: 0;
  text-transform: capitalize;
  letter-spacing: 1px;
  text-align: left;
  margin-top: 0.5rem;
}
.icon {
  height: 2rem;
  width: 2rem;
  border-radius: 0.25rem;
  padding: 0.6rem 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
}
.icon.interview {
  color: #009732;
  background-color: #ddfee8;
}
.icon.pending {
  color: #ffbd1e;
  background-color: #fff8e7;
}
.icon.declined {
  color: #bf2525;
  background-color: #ffe9e9;
}
</style>
