import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect it to render CardList', () => {
   const mockRobots = [
      {
         id: 1,
         name: 'John',
         username: 'JohnJohn',
         email: 'john@gmail.com',
      }
   ]
   expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});