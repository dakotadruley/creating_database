const { Schema } = require('./Schema.js');

//  updated
describe('Schema', () => {
  it('check the object to see if a correct schema', () => {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };

    const schema = new Schema({
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
    });

    expect(schema.validate(dog)).toEqual({
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    });
  });
  
});

it('throws an error when validating an object does not fallow the given schema', () => {
  const dog = {
    name: 456,
    age: 'bad',
    weight: 15,
  };

  const schema = new Schema({
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
  });

  expect(() => schema.validate(dog)).toThrowErrorMatchingSnapshot();
});


  

