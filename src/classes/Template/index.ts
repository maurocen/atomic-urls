import TemplateInterface from "ts/interfaces/TemplateInterface";
import { replaceTemplateAtom } from "../../helpers/replacers";

const Template = function(template = '') : TemplateInterface {
  this.template = template;
  this.atoms = {};
  this.value = template;

  return this;
}

Template.prototype.setAtomValue = function(atomName : string, value : TemplateInterface | string) {
  const rawAtomName = atomName.replace(/^\{\{[^}]+\}\}/gi, '$1');
  const asTemplate = value as TemplateInterface;

  this.value = replaceTemplateAtom(
    this.value,
    atomName,
    asTemplate.getValue ? asTemplate.getValue() : value,
  );
  this.atoms[rawAtomName] = value;
  return this;
}

Template.prototype.getTemplate = function() : TemplateInterface {
  return this.template;
}

Template.prototype.getValue = function() : string {
  return this.value;
}

export default Template;
