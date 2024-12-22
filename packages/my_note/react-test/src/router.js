import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

///////////////页面路由配置////////////////

const Routers = {
    // 首页
    '/': Loadable({
        loader: () => import(/* webpackChunkName: "home" */'./pages/Home'),
        loading: Loading,
      }),
    // 首页
    '/home': Loadable({
        loader: () => import(/* webpackChunkName: "home" */'./pages/Home'),
        loading: Loading,
    }),
    // 关于
    '/about': Loadable({
        loader: () => import(/* webpackChunkName: "about" */'./pages/About'),
        loading: Loading,
    }),
}

export default Routers;