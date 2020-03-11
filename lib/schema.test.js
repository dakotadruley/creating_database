const { Schema } = require('./Schema2.js');

describe('Schema', () => {
  it('check the object to see if a correct schema', () => {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };

    const schema = {
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String
      }
    };

    const objectSchema = new Schema(schema);

    expect(objectSchema.validateSchemaMethod(dog)).toEqual(dog);

  });
  
});

it('throws an error when validating an object does not fallow the given schema', () => {
  const dog = {
    name: 456,
    age: 'bad',
    weight: 15,
  };

  const schema = {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    weight: {
      type: String
    }
  };

  const badDog = new Schema(schema);

  expect(() => badDog.validateSchemaMethod(dog)).toThrowErrorMatchingSnapshot();
});


  

