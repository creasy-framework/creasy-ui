import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormPage from '../FormPage';

describe('FormPage', () => {
  const Header = () => <>Header</>;
  const Content = () => <>Content</>;
  const Footer = () => <>Footer</>;

  it('should render properly', () => {
    const wrapper = shallow(
      <FormPage pageHeader={<Header/>} pageFooter={<Footer/>}>
        <Content/>
      </FormPage>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
