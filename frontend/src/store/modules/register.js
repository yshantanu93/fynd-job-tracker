import axios from "axios";
import { router } from "../../main";

const state = {
  userName: localStorage.getItem("userName"),
  user: localStorage.getItem("user"),
  token: localStorage.getItem("token"),
  userLocation: localStorage.getItem("location"),
  jobLocation: localStorage.getItem("location"),
};

const getters = {
  getUserName: (state) => {
    return state.userName;
  },
  getUser: (state) => {
    return state.user;
  },

  getToken: (state) => {
    return state.token;
  },
  getUserLocation: (state) => {
    return state.userLocation;
  },
};

const mutations = {
  REGISTER_USER(state, { userName, user, token, location }) {
    state.userName = userName;
    state.user = user;
    state.token = token;
    state.userLocation = location;
    state.jobLocation = location;
  },
  LOGOUT_USER(state) {
    state.userName = null;
    state.user = null;
    state.token = null;
    state.userLocation = null;
    state.jobLocation = null;
  },
  ADD_TO_LOCALSTORAGE(state, { userName, user, token, location }) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
    localStorage.setItem("userName", userName);
  },

  CLEAR_LOCALSTORAGE() {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("location");
  },
};

const actions = {
  async registerUser({ commit, dispatch }, payload) {
    dispatch("loadingOn");
    try {
      const response = await axios.post("api/v1/auth/register", payload);
      await commit("REGISTER_USER", response.data);
      dispatch("displayAlert", {
        showAlert: true,
        alertType: "success",
        alertText: "User Created, Redirecting...",
      });
      dispatch("redirect");

      commit("ADD_TO_LOCALSTORAGE", response.data);
    } catch (error) {
      dispatch("displayAlert", {
        showAlert: true,
        alertType: "danger",
        alertText: error.response.data.msg,
      });
    }
    dispatch("loadingOff");
    dispatch("clearAlert");
  },
  async loginUser(context, payload) {
    context.dispatch("loadingOn");
    try {
      const response = await axios.post("api/v1/auth/login", payload);
      await context.commit("REGISTER_USER", response.data);
      context.dispatch("displayAlert", {
        showAlert: true,
        alertType: "success",
        alertText: "Login Successful, Redirecting...",
      });
      context.dispatch("redirect");
      context.commit("ADD_TO_LOCALSTORAGE", response.data);
    } catch (error) {
      context.dispatch("displayAlert", {
        showAlert: true,
        alertType: "danger",
        alertText: error.response.data.msg,
      });
    }
    context.dispatch("loadingOff");
    context.dispatch("clearAlert");
  },
  redirect() {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  },
  logoutUser(context) {
    context.commit("LOGOUT_USER");
    context.commit("CLEAR_LOCALSTORAGE");
  },
  async updateUser({ commit, dispatch, state }, payload) {
    const authFetch = axios.create({
      baseURL: "/api/v1",
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });
    dispatch("loadingOn");
    try {
      const { data } = await authFetch.patch("/auth/updateUser", payload);
      const { userName, user, location, token } = data;
      commit("REGISTER_USER", { userName, user, token, location });
      commit("ADD_TO_LOCALSTORAGE", { userName, user, location, token });
      dispatch("displayAlert", {
        showAlert: true,
        alertType: "success",
        alertText: "User Profile Updated!",
      });
    } catch (error) {
      dispatch("displayAlert", {
        showAlert: true,
        alertType: "danger",
        alertText: error.response.data.msg,
      });
    }
    dispatch("clearAlert");
    dispatch("loadingOff");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
