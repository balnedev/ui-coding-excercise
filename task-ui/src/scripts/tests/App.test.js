import App from '../App';
import {mount} from 'enzyme';
import React from 'react';

describe("App", () => {
  it("renders without fail", () => {
    const app = mount(<App />);
    expect(app).toBeDefined();
  });
});