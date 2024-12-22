const  HelloWorld = () => import('./pages/HelloWorld.vue')
const  Home = () => import('./pages/Home.vue')
const VuexTest = () => import('./pages/VuexTest.vue')
const NotFound = () => import('./pages/404.vue');

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'vuexTest',
    path: '/vuexTest', 
    component: VuexTest,
  },
  {
    name: 'hello',
    path: '/hello/:id', 
    component: HelloWorld,
  },
  { 
    path: '/index', 
    redirect: { name: 'home' }
  },
  {
    name: '404',
    path: '*',
    component: NotFound,
  },
]

export default routes;