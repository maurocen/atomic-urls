const { Template } = require('../../classes')

let Custom;

const CustomUrlBuilder = function() {
}

CustomUrlBuilder.prototype._buildCustomUrl = function (template, atoms = {}) {
  if (typeof atoms !== 'object') {
    throw new Error('atoms should be an object');
  }

  return Object.entries(atoms).reduce(
    (prev, [atomName, value]) => prev.setAtomValue(atomName, value),
    new Template(template)
  );
};

CustomUrlBuilder.prototype.getCustomUrl = function (template, atoms) {
  return this._buildCustomUrl(template, atoms).getValue();
}

CustomUrlBuilder.getInstance = function() {
  if (Custom) {
    return Custom;
  } else {
    Custom = new CustomUrlBuilder();
    return Custom;
  }
};

module.exports = CustomUrlBuilder.getInstance();
