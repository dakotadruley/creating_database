const {
  Validator,
} = require('./Validator.js');

// const nameValidator = new Validator('name', {
//   type: String,
//   required: true
// });
// const ageValidator = new Validator('age', {
//   type: Number,
//   required: true
// });
// const colorValidator = new Validator('color', {
//   type: String,
//   required: true
// });
const dog = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};

// Tests
describe('Validator', () => {
  it('has a property and configuration property', () => {
    const nameValidator = new Validator('name', {
      type: String,
      required: true
    });

    expect(nameValidator.property).toEqual('name');
    expect(nameValidator.configuration).toEqual({
      type: String,
      required: true
    });
  });
});

it('can validate an object with the proper type', () => {
  const nameValidator = new Validator('name', {
    type: String,
    required: true
  });
  const dog = {
    name: 'spot',
    age: '5',
    weight: '20 lbs'
  };

  expect(nameValidator.validateMethod(dog)).toEqual('spot');
});
// describe('validator module', () => {
//   describe('basic validation', () => {
//     it('properly validates the name', () => {
//       expect(nameValidator.validateMethod(dog)).toEqual('spot');
//     });
//   });
// });
