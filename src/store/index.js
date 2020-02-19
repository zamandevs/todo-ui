import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        user: JSON.parse(localStorage.getItem('user')) || ''
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        removeToken(state) {
            localStorage.removeItem('token')
            state.token = ''
        },
        setUser(state, user) {
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))
            this.commit('setToken', user.api_token)
        },
        removeUser(state) {
            localStorage.removeItem('user')
            state.user = ''
            this.commit('removeToken')
        }
    }
})