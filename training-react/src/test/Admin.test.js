import React from 'react'
import Admin from '../components/Admin'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
const expect = chai.expect

const page = mount(<Admin />)

const f = (s, e) => page.find(e ? `${s} ${e}` : s)

const sel = {
  admin: 'header.admin',
}

it('It renders Admin component', () => {
  expect(page.find(Admin)).to.have.length(1)
})
