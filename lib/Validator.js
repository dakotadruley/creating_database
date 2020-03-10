const {
  getCaster
} = require('./types.js');

class Validator {
  constructor(property, configuration) {
    this.property = property;
    this.configuration = configuration;
  }
  // the object we want to run through validation
  validateMethod(obj) {
    if(this.configuration.required && !(this.property in obj)) {
      // the 'in' prop is a boolean (true/false)
      throw new Error(`Missing required field >>${this.property}<<`);
    }

    const caster = getCaster(this.configuration.type);
    return caster(obj[this.property]);

  }}


//   if(this.property === 'name' || this.property === 'weight') {
//     const possibleName = isString(obj[this.property) 
//       ? obj[this.property]
//       : castToString(obj[this.property);
//     return possibleName;
//   }
//   if(this.property === 'age') {
//     const possibleAge = isNumber(obj[this.property]) 
//       ? obj[this.property] 
//       : castToNumber(obj[this.property]);
//     return possibleAge;
//   }
// }

module.exports = {
  Validator
};
