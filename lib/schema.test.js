const { Schema } = require('./Schema.js');

describe('Schema', () => {
  it('correctly check the object to see if a correct schema', () => {
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


  

