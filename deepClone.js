function deepClone(obj, hash = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  if (obj === null || obj !== 'object') {
    return obj
  }
  let t = new obj.constructor()
  hash.set(obj, t)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      t[key] = this.deepClone(obj[key], hash)
    }
  }
  return t
}
