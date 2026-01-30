// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../view/home.vue'
import Hw from '../view/hw.vue'
import Op from '../view/op.vue'
import Xm from '../view/xm.vue'

Vue.use(Router);

const routes = [
    // 👇 【新增】加这一段！让它打开首页自动跳到小米页面
  {
    path: '/',
    redirect: '/Xiaomi'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Huawei',
    name: 'Hw',
    component: Hw
  },
  {
    path: '/Oppo',
    name: 'Op',
    component: Op
  },
  {
    path: '/Xiaomi',
    name: 'Xm',
    component: Xm
  },
];

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
