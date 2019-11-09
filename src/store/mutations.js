export default {
  setProp (state, { name, value }) {
    name = name.split('.')
    const last = name.pop()
    return name.reduce((obj, key) => obj[key], state)[last] = value
  },
}
