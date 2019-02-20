import React from 'react'
import Page from '../components/Page'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { getItem } from '../content'

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
const expect = chai.expect

const app = mount(<Page />)

it('Sections contain content history', () => {
  const items = {
    about: {
      id: 1,
      result: getItem(1),
    },
    interests: {
      id: 5,
      result: getItem(5)
    },
    contact: {
      id: 7,
      result: getItem(7)
    }
  }

  expect(app.find('section.about')).to.contain(<p>{items.about.result.text}</p>)
  expect(app.find('section.interests')).to.contain(<p>{items.interests.result.text}</p>)
  expect(app.find('section.contact')).to.contain(<p>{items.contact.result.text}</p>)
  // eslint-disable-next-line no-unused-expressions
  expect(app.find(`section.interests[rel=${items.interests.id}]`)).to.exist
  // eslint-disable-next-line no-unused-expressions
  expect(app.find(`section.about[rel=${items.about.id}]`)).to.exist 
  // eslint-disable-next-line no-unused-expressions
  expect(app.find(`section.contact[rel=${items.contact.id}]`)).to.exist   
})

it('renders admin section', () => {
  // eslint-disable-next-line no-unused-expressions
  expect(app.find('.admin')).to.exist
})