import App from "../components/Props.js";
import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, cleanup} from 'react-testing-library';
afterEach(cleanup);

test('App test',()=>{
    const app = renderer.create(
        <App name={"xiabai"} url={"http://www.redhat.com"} nickname={"xiaofeng"} />
     );
     let tree = app.toJSON();
     expect(tree).toMatchSnapshot();
   
});

