const state = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const getters = {
  isLoading: (state) => {
    return state.isLoading;
  },
  showAlert: (state) => {
    return state.showAlert;
  },
  alertText: (state) => {
    return state.alertText;
  },
  alertType: (state) => {
    return state.alertType;
  },
};

const mutations = {
  LOADING_ON(state) {
    state.isLoading = true;
  },
  LOADING_OFF(state) {
    state.isLoading = false;
  },

  DISPLAY_ALERT(state, { showAlert, alertText, alertType }) {
    state.showAlert = showAlert;
    state.alertText = alertText;
    state.alertType = alertType;
  },
  CLEAR_ALERT(state) {
    state.showAlert = false;
    state.alertText = "";
    state.alertType = "";
  },
};

const actions = {
  displayAlert(context, alertData) {
    context.commit("DISPLAY_ALERT", alertData);
  },

  clearAlert(context) {
    setTimeout(() => context.commit("CLEAR_ALERT"), 3000);
  },

  loadingOn(context) {
    context.commit("LOADING_ON");
  },

  loadingOff(context) {
    context.commit("LOADING_OFF");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
