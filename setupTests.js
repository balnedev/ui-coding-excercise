import 'raf/polyfill';
import jestExtended from 'jest-extended'; // eslint-disable-line no-unused-vars
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * @name toBeNumberOrNull
 * @description To test type tobe number or null
 */

expect.extend({
  toBeNumberOrNull(received) {
    const pass = received === null || (typeof received === 'number' || received instanceof Number);
    if (pass) {
      return {
        message: () => `expected ${received} to be Number or null`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} not to be Number or null`,
        pass: false
      };
    }
  }
});

/**
 * @name toBeStringOrNull
 * @description To test type tobe number or null
 */

expect.extend({
  toBeStringOrNull(received) {
    const pass = received === null || (typeof received === 'string' || received instanceof String);
    if (pass) {
      return {
        message: () => `expected ${received} to be String or null`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} not to be String or null`,
        pass: false
      };
    }
  }
});

global.fetch = require('jest-fetch-mock')

/**
 * @name toBeArrayOrNull
 * @description To test type tobe Array or null
 */

expect.extend({
  toBeArrayOrNull(received) {
    const pass = received === null || Array.isArray(received);
    if (pass) {
      return {
        message: () => `expected ${received} to be Array or null`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} not to be Array or null`,
        pass: false
      };
    }
  }
});
