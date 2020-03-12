const { Validator } = require('./Validator.js');

//  updated
class Schema {
  constructor(schemaDefinition) {
    this.schemaDefinition = schemaDefinition;
    this.validators = Object.entries(schemaDefinition).map(([field, options]) => new Validator(field, options));
    // create a bunch of validators and iterate over each property(name, age)
  }
  
  validate(obj) {
    const newObject = {};
    const errors = [];
    // iterate through validators and try to call validate
    // checks the name field and returns a stringified/ casted name if meets criteria
    // same for age field
    this.validators.forEach(validator => {
      try {
        newObject[validator.field] = validator.validate(obj);
      } catch(e) {
        errors.push(e);
      }
    });
    
    if(errors.length > 0) {
      throw new Error(`Invalid schema >> ${errors}`);
    }
    return newObject;
  }
}

module.exports = { Schema };

