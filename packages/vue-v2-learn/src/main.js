import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {text: 'xxxxxxxxxxxx1', done: false},
      {text: '1111111111111', done: false},
      {text: '222222222222', done: true},
      {text: '33333333333333', done: false},
      {text: '4444444444444', done: false},
    ]
  },
  mutations: {
    increment (state) {
      state.count+=1;
      state.todos[1].done = true;
    }
  },
  getters: {
    doneTodos:  state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    }
  },
  actions: {
    incrementAsync({commit}) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  }
})

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  store,
}).$mount('#app')
