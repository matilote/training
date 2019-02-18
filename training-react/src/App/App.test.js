import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import content from '../content'

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
const expect = chai.expect

const app = mount(<App />)

it('Section `about` contains text', () => {
  const id = 1
  const containers = content.filter(el => el.id === id)
  const item = containers[0]
  expect(app.find('section.about')).to.contain(<p>{item.text}</p>)
  // eslint-disable-next-line no-unused-expressions
  expect(app.find(`section.about[rel=${item.id}]`)).to.exist 
})

