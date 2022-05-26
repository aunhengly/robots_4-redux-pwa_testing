import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

import renderer from 'react-test-renderer';

//mount is for full dom mounting
//render is render react component under


// it('expect it to render Card', () => {
//    const test = renderer.create(<Card />);
//    expect(test).toMatchSnapshot();
// });

// it('expect it to render Card', () => {
//    expect(renderer.create(<Card />)).toMatchSnapshot();
// });

it('expect it to render Card', () => {
   expect(shallow(<Card />)).toMatchSnapshot();
});