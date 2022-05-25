import Enzyme, { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

// Enzyme.configure({ adapter: new Adapter() });

configure({ adapter: new Adapter() });