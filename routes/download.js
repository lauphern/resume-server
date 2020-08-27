const express = require("express");
const router = express.Router();
const fs = require("fs");
const PDFDocument = require("pdfkit");

const EducationItem = require("../models/EducationItem");
const Job = require("../models/Job");
const HardSkill = require("../models/HardSkill");
const Project = require("../models/Project");

const { educationSearch, jobSearch, hardSkillSearch, projectSearch } = require("../helpers/search");
const clean = require("../helpers/clean");

router.get("/download", (req, res) => {
  const { preferredLanguage: language } = req.app.locals;
  const data = req.app.locals.data[language || "en"];
  const iterable = [
    data.personalInfo,
    educationSearch({ model: EducationItem, language }),
    educationSearch({ model: EducationItem, language, level: "certification" }),
    jobSearch({ model: Job, language, volunteer: false }),
    jobSearch({ model: Job, language, volunteer: true }),
    hardSkillSearch({ model: HardSkill }),
    data.softSkills,
    projectSearch({ model: Project }),
    data.languages,
  ];
  Promise.all(iterable).then(result => {
    const cleanResult = clean(JSON.parse(JSON.stringify(result)));
    res.contentType("application/pdf");
    const doc = new PDFDocument({
      info: { Title: data.pdfTitle, Author: data.pdfAuthor },
      permissions: {
        copying: true,
        printing: "highResolution",
        modifying: false,
        contentAccessibility: true,
      },
    })
    .font('fonts/Source_Code_Pro/SourceCodePro-Regular.ttf')
    doc.fontSize(30).fillColor('#00BFFF').text(data.pdfHeaders[0], {paragraphGap: 20});
    doc.fontSize(12).fillColor('black').text(JSON.stringify(cleanResult[0], null, 5), {paragraphGap: 7, lineGap: 3});
    doc.fontSize(30).fillColor('#00BFFF').text(data.pdfHeaders[1], {paragraphGap: 20});
    doc.fontSize(12).fillColor('black').text(JSON.stringify(cleanResult[1], null, 5), {paragraphGap: 7, lineGap: 3});
    doc.fontSize(30).fillColor('#00BFFF').text(data.pdfHeaders[2], {paragraphGap: 20});
    doc.fontSize(12).fillColor('black').text(JSON.stringify(cleanResult[2], null, 5), {paragraphGap: 7, lineGap: 3});
    doc.fontSize(30).fillColor('#00BFFF').text(data.pdfHeaders[3], {paragraphGap: 20});
    doc.fontSize(12).fillColor('black').text(JSON.stringify(cleanResult[3], null, 5), {paragraphGap: 7, lineGap: 3});
    doc.fontSize(30).fillColor('#00BFFF').text(data.pdfHeaders[4], {paragraphGap: 20});
    doc.fontSize(12).fillColor('black').text(JSON.stringify(cleanResult[4], null, 5), {paragraphGap: 7, lineGap: 3});
    doc.fontSize(30).fillColor('#00BFFF').text(data.pdfHeaders[5], {paragraphGap: 20});
    doc.fontSize(12).fillColor('black').text(JSON.stringify(cleanResult[5], null, 5), {paragraphGap: 7, lineGap: 3});
    doc.fontSize(30).fillColor('#00BFFF').text(data.pdfHeaders[6], {paragraphGap: 20});
    doc.fontSize(12).fillColor('black').text(JSON.stringify(cleanResult[6], null, 5), {paragraphGap: 7, lineGap: 3});
    doc.fontSize(30).fillColor('#00BFFF').text(data.pdfHeaders[7], {paragraphGap: 20});
    doc.fontSize(12).fillColor('black').text(JSON.stringify(cleanResult[7], null, 5), {paragraphGap: 7, lineGap: 3});
    doc.fontSize(30).fillColor('#00BFFF').text(data.pdfHeaders[8], {paragraphGap: 20});
    doc.fontSize(12).fillColor('black').text(JSON.stringify(cleanResult[8], null, 5), {paragraphGap: 7, lineGap: 3});
    doc.pipe(fs.createWriteStream("out.pdf"));
    doc.pipe(res);
    doc.end();
  });
});

module.exports = router;
