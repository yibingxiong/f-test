import HelloWorld from './pages/HelloWorld.vue'
import Home from './pages/Home.vue'

const routes = [
  {
    path: '/',component: Home,
  },
  { path: '/hello', component: HelloWorld },
]

export default routes;