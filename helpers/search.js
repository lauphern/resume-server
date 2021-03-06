module.exports = {
  educationSearch: ({ model, language, level, school_name }) => {
    if (school_name) {
      const myRegEx = new RegExp(school_name, "i");
      return model.find({
        "school.school_name": myRegEx,
        level: "certification",
        language,
      });
    }
    if (!level)
      return model.find({
        level: { $ne: "certification" },
        language,
      });
    else
      return model.find({
        level,
        language,
      });
  },
  jobSearch: ({ model, language, volunteer }) => {
    return model.find({ volunteer, language });
  },
  hardSkillSearch: ({ model, type }) => {
    if (!type) return model.find({});
    else return model.find({ type });
  },
  projectSearch: ({ model }) => {
    return model.find({}).populate("technologies");
  },
};
