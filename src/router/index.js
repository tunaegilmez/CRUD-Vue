import Vue from "vue";
import VueRouter from "vue-router";

import TheTable from "../components/TheTable.vue";
import CreateUser from "../components/CreateUser.vue";
import UpdateUser from "../components/UpdateUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Table",
    component: TheTable,
  },
  {
    path: "/new",
    name: "New",
    component: CreateUser,
  },
  {
    path: "/update/:id",
    name: "Update",
    component: UpdateUser,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
