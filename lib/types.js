const isNumber = val => typeof val === 'number';

// isString function
const isString = val => typeof val === 'string';

// isBoolean function
const isBoolean = val => typeof val === 'boolean';

// isArray function
// re-factored
const isArray = val => Array.isArray(val);

// isObject function
// re-factored
const isObject = val => typeof val === 'object' && !isArray(val);

// isFunction fuction
// re-factored
const isFunction = val => val instanceof Function;

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

// castToString function
// re-factored
const castToString = val => {
  if(isString(val)) return val;
  if(isNumber(val)) return val.toString();
  if(isBoolean(val)) return val.toString();
  if(isArray(val)) return val.toString();
  throw new CastError(String, val);
};

// castToBoolean function
// re-factored
const castToBoolean = val => {
  if(isBoolean(val)) return val;
  if(val === 1) return true;
  if(val === 0) return false;
  throw new CastError(Boolean, val);
};

// added castToArray function
const castToArray = caster => val => {
  try {
    return val.map(caster);
  } catch(e) {
    throw new CastError(Array, val);
  }
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
  String: castToString,
  Boolean: castToBoolean
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  castToNumber,
  castToString,
  castToBoolean,
  CastError,
  getCaster, 
  castToArray
};
