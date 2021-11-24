import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import smoothscroll from 'smoothscroll-polyfill';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
]


smoothscroll.polyfill()

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    }

    const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
            new Promise((resolve) => {
                if (x > 50) {
                    return resolve();
                }
                setTimeout(() => {
                    resolve(findEl(hash, ++x || 1));
                }, 100);
            });
    }

    if (to.hash) {
        const el = await findEl(to.hash);

        return window.scrollTo({top: el.offsetTop, behavior: 'smooth'});
    }

    return {x: 0, y: 0};
},
  routes,
})

export default router
