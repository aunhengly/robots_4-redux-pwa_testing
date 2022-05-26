import { configure } from 'enzyme';

//React 18
// import Adapter from '@cfaester/enzyme-adapter-react-18';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });