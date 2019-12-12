import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const API_URL = "http://localhost:8000/api/"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        }
    },
    actions: {
        async getUsers({ commit }) {
            await axios.get(API_URL + "get/users")
                .then((response) => {
                    commit('setUsers', response.data)
                })
                .catch((response) => {
                    console.warn(response)
                })
        }
    },
    modules: {}
})