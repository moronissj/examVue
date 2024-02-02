import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  //la ruta base
  {
    path: "/",
    redirect: "/inicio",
  },
  //rutas asociadas a los componentes
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    //los componentes que se renderizan en router vue
    children: [
      {
        path: "/inicio",
        name: "inicio",
        component: () => import("../components/Inicio.vue"),
      },
      {
        path: "/main",
        name: "main",
        component: () => import("../components/Main.vue"),
      },
      
      {
        path: "/pagination",
        name: "pagination",
        component: () => import("../components/Paginacion.vue"),
      },
    ],
  },
];

const router = new VueRouter({ routes });
export default router;
