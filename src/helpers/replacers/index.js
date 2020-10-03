const replaceTemplateAtom = (template, atomName, value) => {
  const atomRegex = /\{\{[^}]+\}\}/;
  const atomToReplace = atomRegex.test(atomName) ? atomName : `{{${atomName}}}`;
  const replaceRegex = new RegExp(atomToReplace, 'gi');
  return template.replace(replaceRegex, value);
}

module.exports = {
  replaceTemplateAtom,
};
