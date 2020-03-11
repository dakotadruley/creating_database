const { Validator } = require('./Validator.js');

class Schema {
  constructor(schemaDefinition) {
    this.schemaDefinition = schemaDefinition;
    this.validators = Object.entries(schemaDefinition).map(([key, configuration]) => new Validator(key, configuration));
    // create a bunch of validators and iterate over each property(name, age)
  }
  
  validateSchemaMethod(obj) {
    const newObject = {};
    // iterate through validators and try to call the validateMethod
    // checks the name field and returns a stringified/ casted name if meets criteria
    // same for age field
    this.validators.forEach(validator => {
      newObject[validator.key] = validator.validateMethod(obj);
    });
    return newObject;
  }
}

module.exports = { Schema };

