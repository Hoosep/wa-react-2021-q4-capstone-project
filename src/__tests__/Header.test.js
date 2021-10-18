import React from 'react';
import { create } from 'react-test-renderer';

// Component
import Header from 'Layouts/Header';

const logoName = 'logo.png';

let component;
let componentInstance;

describe('<Header />', () => {
  beforeEach(() => {
    component = create(<Header />);
    componentInstance = component.root;
  });

  it('Render correctly', () => {
    console.log(component.toJSON());
  });

  it('Logo is render', () => {
    const image = componentInstance.findByType('img');
    const { props } = image;
    const { className, src } = props;
    expect(className).toEqual('logo');
    expect(src).toEqual(logoName);
  });
});
