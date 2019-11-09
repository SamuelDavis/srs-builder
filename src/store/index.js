import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

function watchExpandingList (idProp, prototype) {
  return (idProp && prototype)
    ? (value) => {
      if (value.length < 1 || value[value.length - 1][idProp]) {
        value.push({ ...prototype })
      }
    }
    : (value) => {
      if (value.length < 1 || value[value.length - 1]) {
        value.push(null)
      }
    }
}

function storyWatcher (value) {
  if (value.length < 1 || value[value.length - 1].description) {
    value.push({ ...state.proto.story })
  }

  value.forEach((story) => {
    if (story.steps.length < 1 || story.steps[story.steps.length - 1]) {
      story.steps.push(null)
    }
  })
}

const store = new Vuex.Store({ state, getters, mutations })
const defaultWatchOptions = { deep: true, immediate: true }
store.watch((state) => state.doc.owners, watchExpandingList('name', state.proto.owner), defaultWatchOptions)
store.watch((state) => state.doc.functions, watchExpandingList('description', state.proto.function), defaultWatchOptions)
store.watch((state) => state.doc.users, watchExpandingList('classification', state.proto.user), defaultWatchOptions)
store.watch((state) => state.doc.designConstraints, watchExpandingList(), defaultWatchOptions)
store.watch((state) => state.doc.implementationConstraints, watchExpandingList(), defaultWatchOptions)
store.watch((state) => state.doc.assumptions, watchExpandingList(), defaultWatchOptions)
store.watch((state) => state.doc.dependencies, watchExpandingList('name', state.proto.dependency), defaultWatchOptions)
store.watch((state) => state.doc.stories, storyWatcher, defaultWatchOptions)

export default store

export function mapProp (name) {
  return {
    get () {
      return this.$store.getters[getters.getProp.name](name)
    },
    set (value) {
      this.$store.commit(mutations.setProp.name, { name, value })
    }
  }
}
