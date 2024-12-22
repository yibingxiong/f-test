import loadable from '@loadable/component'
// import PageA from './page/PageA'

const PageA = loadable(() => import('./page/PageA'));


const routes = [
  {
    path: '/abcdef',
    component: PageA
  }
]

export default routes;