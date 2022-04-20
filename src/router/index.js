import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/pages/Home";
import About from "@/views/pages/About";
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {
      path     : '/',
      name     : 'home',
      component: Home
    },
    {
      path     : '/about',
      name     : 'about',
      component: About
    },
  ]
})
/*
import {createRouter, createWebHistory} from "vue-router";
import Home from '@/views/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
});

export default router;*/
