const  HelloWorld = () => import('./pages/HelloWorld.vue')
const  Home = () => import('./pages/Home.vue')
const NotFound = () => import('./pages/404.vue');

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
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