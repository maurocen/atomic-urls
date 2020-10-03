const { replaceTemplateAtom } = require("../../helpers/replacers");

const Template = function(template = '') {
  this.template = template;
  this.atoms = {};
  this.value = template;

  return this;
}

Template.prototype.setAtomValue = function(atomName, value) {
  const rawAtomName = atomName.replace(/^\{\{[^}]+\}\}/gi, '$1');
  this.value = replaceTemplateAtom(
    this.value,
    atomName,
    value instanceof Template ? value.getValue() : value,
  );
  this.atoms[rawAtomName] = value;
  return this;
}

Template.prototype.getTemplate = function() {
  return this.template;
}

Template.prototype.getValue = function() {
  return this.value;
}

module.exports = Template;
