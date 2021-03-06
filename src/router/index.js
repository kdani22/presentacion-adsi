import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Proveedores from "../views/Proveedores.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/admin-proveedores",
    name: "AdministrarProveedores",
    component: Proveedores
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
