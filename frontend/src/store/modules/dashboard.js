const state = {
  showSidebar: false,
};

const getters = {
  getSidebarStatus: (state) => {
    return state.showSidebar;
  },
};

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.showSidebar = !state.showSidebar;
  },
  SHOW_SIDEBAR(state) {
    state.showSidebar = true;
  },
  HIDE_SIDEBAR(state) {
    state.showSidebar = false;
  },
};

const actions = {
  toggleSidebar(context) {
    context.commit("TOGGLE_SIDEBAR");
  },
  showSidebar(context) {
    context.commit("SHOW_SIDEBAR");
  },
  hideSidebar(context) {
    context.commit("HIDE_SIDEBAR");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
