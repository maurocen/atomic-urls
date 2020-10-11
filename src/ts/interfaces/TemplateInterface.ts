export default interface TemplateInterface {
  setAtomValue(atomName : string, value : string | TemplateInterface) : TemplateInterface,
  getInterface() : TemplateInterface,
  getValue() : string,
}
