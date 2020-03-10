const isNumber = val => typeof val === 'number';

// isString function
const isString = val => typeof val === 'string';

// isBoolean function
const isBoolean = val => typeof val === 'boolean';

// isArray function
const isArray = val => {
  return Array.isArray(val);
};

// isObject function
const isObject = val => {
  if(isArray(val)) 
    return false;
  else if(typeof val === 'object' && val !== null) {
    return true;
  } else return false;
};

// isFunction fuction
const isFunction = val => typeof val === 'function';

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

// castToString function
const castToString = val => {
  if(isString(val)) return val;
  if(isObject(val)) throw new CastError(val);
  if(isFunction(val)) throw new CastError(val);
  if(isArray(val)) throw new CastError(val);
  const makeString = String(val);
  if(!isString(makeString)) throw new CastError(val);
  return makeString;
};

// castToBoolean function
const castToBoolean = val => {
  if(isBoolean(val)) return val;
  if(isObject(val)) throw new CastError(val);
  if(isFunction(val)) throw new CastError(val);
  if(isArray(val)) throw new CastError(val);
  if(isString(val)) throw new CastError(val);
  if(isNumber(val) && val !== 0 && val !== 1) throw new CastError(val);

  const makeBool = Boolean(val);

  if(!isBoolean(makeBool)) throw new CastError(val);
  return makeBool;
  
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
  getCaster
};
