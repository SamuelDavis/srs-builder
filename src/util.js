export function watchExpandingList (idProp, prototype) {
  return {
    deep: true,
    immediate: true,
    handler (value) {
      const length = value.length
      if (length < 1 || value[length - 1][idProp]) {
        value.push({ ...prototype })
      }
    }
  }
}
