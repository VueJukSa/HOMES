import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "@/views/Layout/DashboardLayout.vue";
import AuthLayout from "@/views/Pages/AuthLayout.vue";

import NotFound from "@/views/NotFoundPage.vue";

import Board from "@/views/RegularTables.vue";
import BoardList from "@/views/Tables/RegularTables/LightTable.vue";
import BoardWrite from "@/views/Tables/RegularTables/BoardWrite.vue";
import BoardDetail from "@/views/Tables/RegularTables/BoardDetail.vue";
import BoardUpdate from "@/views/Tables/RegularTables/BoardUpdate.vue";
import store from "@/store/index.js";

Vue.use(VueRouter);

const onlyAuthUser = async (to, from, next) => {
  // console.log(store);
  const checkUserInfo = store.getters["memberStore/checkUserInfo"];
  const getUserInfo = store._actions["memberStore/getUserInfo"];
  let token = sessionStorage.getItem("access-token");
  if (checkUserInfo == null && token) {
    await getUserInfo(token);
  }
  if (checkUserInfo === null) {
    next({ name: "login" });
    // router.push({ name: "login" });
  } else {
    next();
  }
};
const routes = [
  {
    path: "/",
    redirect: "dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Dashboard.vue"),
      },
      {
        path: "/icons",
        name: "icons",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Icons.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        beforeEnter: onlyAuthUser,
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/Pages/UserProfile.vue"
          ),
      },
      {
        path: "/maps",
        name: "maps",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/KakaoMaps.vue"),
      },
      {
        path: "/editProfileForm",
        name: "editProfileForm",
        beforeEnter: onlyAuthUser,
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/Pages/UserProfile/EditProfileForm.vue"
          ),
      },
      {
        path: "/board",
        name: "board",
        component: Board,
        redirect: "/board/list",
        children: [
          {
            path: "list",
            name: "BoardList",
            component: BoardList,
          },
          {
            path: "write",
            name: "BoardWrite",
            beforeEnter: onlyAuthUser,
            component: BoardWrite,
          },
          {
            path: "detail/:articleno",
            name: "BoardDetail",
            beforeEnter: onlyAuthUser,
            component: BoardDetail,
          },
          {
            path: "update/:articleno",
            name: "BoardUpdate",
            beforeEnter: onlyAuthUser,
            component: BoardUpdate,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Pages/Login.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Pages/Register.vue"),
      },
      { path: "*", component: NotFound },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default routes;
