const { getCaster } = require('./types.js');

// updated
class Validator {
  constructor(field, { type, required }) {
    this.field = field;
    this.type = type;
    this.required = required;
    this.caster = getCaster(type);
  }
  // the object we want to run through validation
  validate(obj) {
    const val = obj[this.field];
    if(this.required && !val) throw new Error(`${this.field} is required`);
    if(!this.required && !val) return null;

    return this.caster(val);
  }
}

module.exports = {
  Validator
};



