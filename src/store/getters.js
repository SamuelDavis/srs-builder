export default {
  getProp (state) {
    return (name) => {
      return name.split('.').reduce((obj, key) => obj[key], state)
    }
  },
  proto (state) {
    return (name) => state.proto[name]
  },
  maxFunctionPriority (state) {
    return state.doc.functions.reduce((acc, { priority }) => {
      return acc === undefined ? priority : Math.max(acc, priority)
    }, undefined)
  },
  itDoesOpts (state) {
    return state.itDoesOpts
  },
  functionDescriptions (state) {
    return state.doc.functions.map((func) => func.description).filter(Boolean)
  },
  userClasses (state) {
    return state.doc.users.map((user) => user.classification).filter(Boolean)
  }
}
