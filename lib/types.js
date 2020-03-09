const isNumber = val => typeof val === 'number';

// isString function
const isString = val => typeof val === 'string';

// isBoolean function
const isBoolean = val => typeof val === 'boolean';

// isArray function
const isArray = val => {
  if(val.isArray([])) return true;
};

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  isArray,
  //   isObject,
  //   isFunction,
  castToNumber,
  //   castToString,
  //   castToBoolean,
  CastError,
  getCaster,
//   castToNumber,
};