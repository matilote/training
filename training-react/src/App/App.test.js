import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { getItem } from '../content'

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
const expect = chai.expect

const app = mount(<App />)

it('Section `about` contains text', () => {
  const items = {
    about: {
      id: 1,
      result: getItem(1),
    },
    interests: {
      id: 5,
      result: getItem(5)
    }
  }

  expect(app.find('section.about')).to.contain(<p>{items.about.result.text}</p>)
  expect(app.find('section.interests')).to.contain(<p>{items.interests.result.text}</p>)
  // eslint-disable-next-line no-unused-expressions
  expect(app.find(`section.interests[rel=${items.interests.id}]`)).to.exist
  // eslint-disable-next-line no-unused-expressions
  expect(app.find(`section.about[rel=${items.about.id}]`)).to.exist 
})
