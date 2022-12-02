import Landing from "./pages/Landing.vue";
import Register from "./pages/Register.vue";
import Error from "./pages/Error.vue";
import Shared from "./pages/dashboard/Shared.vue";
import AllJobs from "./pages/dashboard/AllJobs.vue";
import AddJob from "./pages/dashboard/AddJob.vue";
import Profile from "./pages/dashboard/Profile.vue";

export const routes = [
  {
    path: "/",
    component: Shared,
    children: [
      { path: "", component: Profile },
      { path: "alljobs", component: AllJobs },
      { path: "addjob", component: AddJob },
    ],
  },
  { path: "/landing", component: Landing },
  { path: "/register", component: Register },
  { path: "*", component: Error },
];
