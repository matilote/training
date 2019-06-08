import 'jsdom-global/register'
import React from 'react'
import App from '../App'
import Page from '../components/Page'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

Object.defineProperty(window, 'localStorage', { value: global.localStorage,configurable:true,enumerable:true,writable:true });

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
const expect = chai.expect

const app = mount(<App />)

it('It renders Page component', () => {
  expect(app.find(Page)).to.have.length(1)
})
