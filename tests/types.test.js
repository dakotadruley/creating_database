const {
  isNumber,
  isBoolean,
  isString,
  isArray,
  castToNumber,
  getCaster
} = require('../lib/types.js');
  
describe('validator module', () => {
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

  //   isString test
  describe('returns true if a string', () => {
    it('tells if a value is a string', () => {
      expect(isString('this')).toEqual(true);
      expect(isString(5)).toEqual(false);
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(() => {})).toBeFalsy();
    });
  });
  
  // isBoolean test
  describe('returns true if a boolean', () => {
    it('tells if a value is a boolean', () => {
      expect(isBoolean(true)).toEqual(true);
      expect(isBoolean(false)).toEqual(true);
      expect(isBoolean('string')).toEqual(false);
      expect(isBoolean(5)).toEqual(false);
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(() => {})).toBeFalsy();
    });
  });

  //   isArray test
  describe('returns true if an array', () => {
    it('tells if it is an array', (Array) => {
      expect(isArray([1, 2, 3])).toBeTruthy();
      Array.isArray({ example: 123 }).toBeFalsy();
      Array.isArray('string').toBeFalsy();
      Array.isArray(true).toBeFalsy();
    });
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