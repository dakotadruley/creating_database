const { Validator } = require('./Validator.js');

// Tests
describe('Validator', () => {
  let nameValidator;
  // when you have repeated code in tests you can put into a before Each
  beforeEach(() => {
    nameValidator = new Validator('name', {
      type: String,
      required: true
    });
  });

  it('has a field and configuration property', () => {

    expect(nameValidator.key).toEqual('name');
    expect(nameValidator.configuration).toEqual({
      type: String,
      required: true
    });
  });

  it('can validate an object with the proper type', () => {
    const dog = {
      name: 'spot',
      age: '5',
      weight: '20 lbs'
    };

    expect(nameValidator.validateMethod(dog)).toEqual('spot');
  });

  it('throws an error when validating an object with the wrong type and not castable', () => {
    const dog = {
      name: {},
      age: 5,
      weight: '20 lbs'
    };

    expect(() => nameValidator.validateMethod(dog)).toThrowError('Cannot cast >>[object Object]<< to String');
  });

  it('throws an error when validating an object with a missing required field', () => {
    const nameValidator = new Validator('name', {
      type: String,
      required: false
    });

    const dog = {
      age: 5,
      weight: '20 lbs'
    };

    expect(nameValidator.validateMethod(dog)).toEqual(null);
  });
});


