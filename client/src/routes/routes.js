import DashboardLayout from "@/views/Layout/DashboardLayout.vue";
import AuthLayout from "@/views/Pages/AuthLayout.vue";

import NotFound from "@/views/NotFoundPage.vue";

import Board from "@/views/RegularTables.vue";
import BoardList from "@/views/Tables/RegularTables/LightTable.vue";
import BoardWrite from "@/views/Tables/RegularTables/BoardWrite.vue";
import BoardDetail from "@/views/Tables/RegularTables/BoardDetail.vue";
import BoardUpdate from "@/views/Tables/RegularTables/BoardUpdate.vue";

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
            // beforeEnter: onlyAuthUser,
            component: BoardWrite,
          },
          {
            path: "detail/:articleno",
            name: "BoardDetail",
            // beforeEnter: onlyAuthUser,
            component: BoardDetail,
          },
          {
            path: "update/:articleno",
            name: "BoardUpdate",
            // beforeEnter: onlyAuthUser,
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

export default routes;
