import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SimplePage from '../SimplePage';

describe('SimplePage', () => {
  const Header = () => <>Header</>;
  const Content = () => <>Content</>;
  const Footer = () => <>Footer</>;

  it('should render properly', () => {
    const wrapper = shallow(
      <SimplePage pageHeader={<Header/>} pageFooter={<Footer/>}>
        <Content/>
      </SimplePage>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
