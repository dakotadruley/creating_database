const { Schema } = require('./Schema.js');

describe('Schema', () => {
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
});

const dog = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};
  

