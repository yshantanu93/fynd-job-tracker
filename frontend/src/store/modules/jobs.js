import axios from "axios";

const state = {
  isEditing: false,
  jobs: [],
  totalJobs: 0,
  editJobId: "",
  jobLocation: "",
  position: "",
  company: "",
  status: "pending",
  jobType: "full-time",
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  declined: 0,
  interview: 0,
  pending: 0,
};

const getters = {
  editingStatus: (state) => {
    return state.isEditing;
  },
  getTotalJobs: (state) => {
    return state.totalJobs;
  },
  getJobs: (state) => {
    return state.jobs;
  },
  getJobLocation: (state) => {
    return state.jobLocation;
  },
  getPosition: (state) => {
    return state.position;
  },
  getCompany: (state) => {
    return state.company;
  },
  getStatus: (state) => {
    return state.status;
  },
  getJobType: (state) => {
    return state.jobType;
  },
  getJobId: (state) => {
    return state.editJobId;
  },
  getDeclined: (state) => {
    return state.declined;
  },
  getInterview: (state) => {
    return state.interview;
  },
  getPending: (state) => {
    return state.pending;
  },
};
const mutations = {
  GET_JOB(state, payload) {
    state.jobs = payload.jobs;
    state.totalJobs = payload.totalJobs;
    state.numOfPages = payload.numOfPages;
  },
  EDIT_JOB(state, payload) {
    const job = state.jobs.find((job) => job._id === payload);
    state.isEditing = true;
    state.editJobId = job._id;
    state.position = job.position;
    state.company = job.company;
    state.jobLocation = job.jobLocation;
    state.jobType = job.jobType;
    state.status = job.status;
  },
  EDIT_OFF(state) {
    state.isEditing = false;
    state.editJobId = "";
    state.position = "";
    state.company = "";
    state.jobLocation = "";
    state.jobType = "full-time";
    state.status = "pending";
  },
  SEARCH_JOB(state, payload) {
    state.search = payload.search;
    state.searchStatus = payload.status;
    state.searchType = payload.type;
    state.sort = payload.sort;
  },
  UPDATE_STATS(state, { declined, interview, pending }) {
    state.declined = declined;
    state.interview = interview;
    state.pending = pending;
  },
};
const actions = {
  async createJob({ dispatch, rootState }, payload) {
    const authFetch = axios.create({
      baseURL: "/api/v1",
      headers: {
        Authorization: `Bearer ${rootState.register.token}`,
      },
    });
    dispatch("loadingOn");
    try {
      await authFetch.post("/jobs", payload);
      dispatch("displayAlert", {
        showAlert: true,
        alertType: "success",
        alertText: "Job Added Successfully!",
      });
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
  updateState({ commit }, payload) {
    commit("SEARCH_JOB", payload);
  },

  async getAllJobs({ dispatch, commit, rootState, state }) {
    const { search, searchStatus, searchType, sort } = state;
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    const authFetch = axios.create({
      baseURL: "/api/v1",
      headers: {
        Authorization: `Bearer ${rootState.register.token}`,
      },
    });
    dispatch("loadingOn");
    try {
      const { data } = await authFetch(url);
      const { jobs, totalJobs, numOfPages } = data;
      commit("GET_JOB", { jobs, totalJobs, numOfPages });
    } catch (error) {
      console.log(error);
    }
    dispatch("loadingOff");
  },

  startEditJob(context, payload) {
    context.commit("EDIT_JOB", payload);
  },
  async editJob({ dispatch, rootState, state }, payload) {
    const authFetch = axios.create({
      baseURL: "/api/v1",
      headers: {
        Authorization: `Bearer ${rootState.register.token}`,
      },
    });
    dispatch("loadingOn");

    try {
      await authFetch.patch(`/jobs/${state.editJobId}`, payload);
      dispatch("displayAlert", {
        showAlert: true,
        alertType: "success",
        alertText: "Job Edited Successfully!",
      });
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
  async deleteJob({ dispatch, rootState, state, commit }, payload) {
    commit("EDIT_JOB", payload);
    const authFetch = axios.create({
      baseURL: "/api/v1",
      headers: {
        Authorization: `Bearer ${rootState.register.token}`,
      },
    });

    try {
      await authFetch.delete(`/jobs/${state.editJobId}`, payload);
    } catch (error) {
      //
    }
    dispatch("getAllJobs");
    dispatch("stopEditJob");
  },
  async getStats({ commit, rootState }) {
    const authFetch = axios.create({
      baseURL: "/api/v1",
      headers: {
        Authorization: `Bearer ${rootState.register.token}`,
      },
    });

    try {
      const { data } = await authFetch("/jobs/stats");
      const { declined, interview, pending } = data.defaultStats;
      commit("UPDATE_STATS", { declined, interview, pending });
    } catch (error) {
      console.log(error);
    }
  },
  stopEditJob({ commit }) {
    commit("EDIT_OFF");
  },
};

export default { state, getters, mutations, actions };
