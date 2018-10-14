import 'raf/polyfill';
import jestExtended from 'jest-extended'; // eslint-disable-line no-unused-vars
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


global.fetch = require('jest-fetch-mock')

