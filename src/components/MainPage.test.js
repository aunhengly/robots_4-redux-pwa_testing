import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
   const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
   }
   wrapper = shallow(<MainPage {...mockProps}/>)
})

it('render MainPage without crashing', () => {
   expect(wrapper).toMatchSnapshot();
})


it('filters robots correctly', () => {
   const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
         id: 3,
         name: 'Hengly',
         email:'hengly@gmail.com'
      }],
      searchField: 'hengly',
      isPending: false
   }
   const wrapper2 = shallow(<MainPage {...mockProps2}/>)
   expect(wrapper2.instance().filteredRobots()).toEqual([{
      id: 3,
      name: 'Hengly',
      email:'hengly@gmail.com'
   }]);

})

it('filters robots correctly2', () => {
   const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [{
         id: 3,
         name: 'Hengly',
         email:'hengly@gmail.com'
      }],
      searchField: 'b',
      isPending: false
   }
   const filteredRobots = []
   const wrapper3 = shallow(<MainPage {...mockProps3}/>)
   expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);

})

it('filters robots correctly4', () => {
   const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots: [{
         id: 3,
         name: 'Hengly',
         email:'hengly@gmail.com'
      }],
      searchField: 'b',
      isPending: true
   }
   const filteredRobots = []
   const wrapper4 = shallow(<MainPage {...mockProps4}/>)
   expect(wrapper4.instance().filteredRobots()).toEqual(filteredRobots);

})
