const { Validator } = require('./Validator.js');

class Schema {
  constructor(schemaDefinition) {
    this.schemaDefinition = schemaDefinition;
    this.validators = Object.entries(schemaDefinition).map(([key, configuration]) => new Validator(key, configuration));
  }
  
  validateSchemaMethod(obj) {
    const newObject = {};
    this.validators.forEach(validator => {
      newObject[validator.key] = validator.validateMethod(obj);
    });
    return newObject;
  }
}

module.exports = {
  Schema
};

