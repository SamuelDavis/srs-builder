export function watchExpandingList (idProp, prototype) {
  const handler = (idProp && prototype)
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
  return {
    deep: true,
    immediate: true,
    handler
  }
}
