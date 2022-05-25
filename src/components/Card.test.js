import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

//mount is for full dom mounting
//render is render react component under
import React from 'react';
import Card from './Card';

it('expect it to render Card', () => {
   expect(shallow(<Card/>)).toMatchSnapshot();
})