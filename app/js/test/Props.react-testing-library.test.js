import App from "../components/Props.js";
import React from 'react';

import {render, fireEvent, cleanup} from 'react-testing-library';

it('check text ',()=>{
    const {getByText} = render(
        <App name={"xiabai"} url={"http://www.redhat.com"} nickname={"xiaofeng"} />
    );
    console.log(getByText('name: xiaofeng').innerHTML)
    expect(getByText('name: xiaofeng')).toBeTruthy();
});