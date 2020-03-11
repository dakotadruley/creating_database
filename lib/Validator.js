const { getCaster } = require('./types.js');

class Validator {
  constructor(key, configuration) {
    this.key = key;
    this.configuration = configuration;
    // Ryan's example destructures (configuration - [type, required])
    // also added the caster up here
  }
  // the object we want to run through validation
  validateMethod(obj) {
    if(this.configuration.required && !(this.key in obj)) {
      // the 'in' prop is a boolean (true/false)
      throw new Error(`Missing required field >>${this.key}<<`);
    }

    if(!this.configuration.required && !(this.key in obj)) {
      return null;
    }

    const caster = getCaster(this.configuration.type);
    
    return caster(obj[this.key]);

  }}

module.exports = {
  Validator
};



