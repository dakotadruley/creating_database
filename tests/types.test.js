const {
  isNumber,
  isBoolean,
  isString,
  isArray,
  isObject,
  isFunction,
  castToNumber,
  castToString,
  castToBoolean,
  getCaster, 
  castToArray
} = require('../lib/types.js');
  
describe('types module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
  });

  //  isString test
  // updated
  it('tells if a value is a string', () => {
    expect(isString('this')).toEqual(true);
    expect(isString(5)).toEqual(false);
    expect(isString([])).toBeFalsy();
    expect(isString({})).toBeFalsy();
    expect(isString(() => {})).toBeFalsy();
    expect(isString(true)).toBeFalsy();
  });
  
  // isBoolean test
  //  updated
  it('tells if a value is a boolean', () => {
    expect(isBoolean(true)).toEqual(true);
    expect(isBoolean(false)).toEqual(true);
    expect(isBoolean('string')).toEqual(false);
    expect(isBoolean(5)).toEqual(false);
    expect(isBoolean([])).toBeFalsy();
    expect(isBoolean({})).toBeFalsy();
    expect(isBoolean(() => {})).toBeFalsy();
  });

  //   isArray test
  //  updated
  it('tells if it is an array', () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray({ example: 123 })).toBe(false);
    expect(isArray('string')).toBeFalsy();
    expect(isArray(true)).toBeFalsy();
    expect(isArray(5)).toBeFalsy();
    expect(isArray(() => {})).toBeFalsy();
  });

  //   isObject test
  //  updated
  it('tells if it is an object', () => {
    expect(isObject([1, 2, 3])).toEqual(false);
    expect(isObject({ example: 123 })).toEqual(true);
    expect(isObject('string')).toEqual(false);
    expect(isObject(5)).toEqual(false);
    expect(isObject(true)).toEqual(false);
    expect(isObject(() => {})).toEqual(false);
  });

  //   isFunction test
  //  updated
  it('tells if it is a function', () => {
    expect(isFunction([1, 2, 3])).toEqual(false);
    expect(isFunction({ example: 123 })).toEqual(false);
    expect(isFunction('string')).toEqual(false);
    expect(isFunction(true)).toEqual(false);
    expect(isFunction(() => {})).toEqual(true);
  });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });
  
    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });
  });
  
  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });
});

// castToString test

describe('casting to string', () => {
  it('can cast values to a string', () => {
    expect(castToString('this')).toEqual('this');
    expect(castToString(true)).toEqual('true');
    expect(castToString(false)).toEqual('false');
  });
  
  it('throws if value is not castable to string', () => {
    expect(() => castToString({})).toThrowErrorMatchingSnapshot();
    expect(() => castToString(() => {})).toThrowErrorMatchingSnapshot();
  });
});

// castToBoolean test
describe('casting to bool', () => {
  it('can cast values to a bool', () => {
    expect(castToBoolean(true)).toEqual(true);
    expect(castToBoolean(false)).toEqual(false);
    expect(castToBoolean(0)).toEqual(false);
    expect(castToBoolean(1)).toEqual(true);
  });
    
  it('throws if value is not castable to bool', () => {
    expect(() => castToBoolean([])).toThrowErrorMatchingSnapshot();
    expect(() => castToBoolean({})).toThrowErrorMatchingSnapshot();
    expect(() => castToBoolean(() => {})).toThrowErrorMatchingSnapshot();
    expect(() => castToBoolean('example')).toThrowErrorMatchingSnapshot();
    expect(() => castToBoolean(5)).toThrowErrorMatchingSnapshot();
  });
});
