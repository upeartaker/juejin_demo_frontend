// vue3中创建store实例对象的方法createStore()按需引入
import { createStore } from 'vuex'

export default createStore({
  state: {
    // 登录状态
    login: false,
    // 登录用户名
    userName: 'xxxxssx'
  },
  mutations: {
    changeLoginState(state, status) {
      state.login = status
    },
    changeUserNameInfo(state, newName) {
      state.userName = newName
    }
  },
  actions: {
    asyncChangeLoginState(context, status) {
      setTimeout(() => {
        context.commit('changeLoginState', status)
      })
    },
    asyncChangeUserNameInfo(context, newName) {
      setTimeout(() => {
        context.commit('changeUserNameInfo', newName)
      })
    }
  },
  getters: {
    getLoginState(state) {
      return state.login
    },
    getUserName(state) {
      return state.userName
    }
  },
  modules: {}
})
