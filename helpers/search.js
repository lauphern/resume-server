module.exports = {
  educationSearch: ({model, language}) => {
    return model.find({
      level: { $ne: "certification" },
      language,
    })
  }
}