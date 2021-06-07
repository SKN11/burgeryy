import React from "react";
import {configure , shallow} from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'


configure({adapter:new Adapter()});   //use to create adapter

describe('<NavigationItems/>',()=>{

    it('should render twoNavigationItem if not authenticated',()=>{
        const wrapper = shallow(<NavigationItems/>);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);

    })
})