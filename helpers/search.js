module.exports = {
  educationSearch: ({model, language, level, school_name}) => {
    if(school_name) return model.find({
      "school.school_name": school_name,
      level: "certification",
      language,
    })
    if(!level) return model.find({
      level: { $ne: "certification" },
      language,
    })
    else return model.find({
      level,
      language,
    })
  },
  jobSearch: ({model, language, volunteer}) => {
    return model.find({ volunteer, language })
  },
  hardSkillSearch: ({model, language, type}) => {
    if(!type) return model.find({ language })
    else return model.find({ type, language })
  },
  projectSearch: ({model, language }) => {
    return model.find({ language })
  },
}