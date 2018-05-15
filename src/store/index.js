import Vue from 'vue'
import Vuex from 'vuex'
import { plugins } from './plugins'
import { search } from './modules/search'
import { connection } from './modules/connection'
import { theme } from './modules/theme'
import { snackbar } from './modules/snackbar'
import { query } from './modules/query'
import { indices } from './modules/indices'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: plugins,
  modules: {
    search,
    connection,
    theme,
    snackbar,
    query,
    indices
  }
})
