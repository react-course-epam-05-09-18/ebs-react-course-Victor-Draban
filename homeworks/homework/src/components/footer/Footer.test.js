import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('>>> Footer --- Shallow Render REACT COMPONENTS', () => {
        it('should render a Footer', () => {
                const wrapper = shallow(
                        <Footer />
                );
                expect(wrapper.length).toEqual(1);
        });
});