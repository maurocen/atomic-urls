export const replaceTemplateAtom = (
  template : string,
  atomName : string,
  value: string
) : string => {
  const atomRegex = /\{\{[^}]+\}\}/;
  const atomToReplace = atomRegex.test(atomName) ? atomName : `{{${atomName}}}`;
  const replaceRegex = new RegExp(atomToReplace, 'gi');
  return template.replace(replaceRegex, value);
}

export default {
  replaceTemplateAtom,
}
