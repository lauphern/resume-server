const clean = (el) => {
  if(Array.isArray(el)) {
    //Deal with arrays here
    for(let i = 0; i < el.length; i++) {
      clean(el[i])
    }
  } else {
    //Deal with objects here
    for(key in el) {
      if(key === "_id" || key === "language") {
        delete el[key]
        return el
      }
      if(typeof el[key] === "object") {
        clean(el[key])
      }
    }
    return el
  }
  return el
}

module.exports = clean;