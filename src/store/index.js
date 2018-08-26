import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as apiurl from '@/store/config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [],
    posts: []
  },
  mutations: {
    setPages (state, pagesObj) {
      state.pages = pagesObj
    },
    setPosts (state, postsObj) {
      state.posts = postsObj
    }
  },
  actions: {
    getPages (context, payLoad) {
      axios.get(apiurl.default.apiurl + 'pages?per_page=100')
        .then(function (response) {
          context.commit('setPages', response.data)
        })
        .catch(function (e) {
          this.errors.push(e)
          console.log(e)
        })
    },
    getPosts (context, payLoad) {
      axios.get(apiurl.default.apiurl + 'posts?per_page=100')
        .then(function (response) {
          context.commit('setPosts', response.data)
        })
        .catch(function (e) {
          this.errors.push(e)
          console.log(e)
        })
    }
  }
})
