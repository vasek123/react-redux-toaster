import React from 'react';
import { shallow } from 'enzyme';
import Toast from '../Toast';

describe('Toast component', () => {
  it('should render a text message', () => {
    const text = "Hello";
    const toast = shallow(<Toast id={1} text={text} />);
    expect(toast.find('span').text()).toEqual(text);
  })
})
