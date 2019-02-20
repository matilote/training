import React from 'react'
import Page from '../components/Page'
import Admin from '../components/Admin'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { getItem } from '../content'

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
const expect = chai.expect

const page = mount(<Page />)
const f = (s, e) => page.find(e ? `${s} ${e}` : s)
const admin = 'header.admin'

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

  expect(page.find('section.about')).to.contain(<p>{items.about.result.text}</p>)
  expect(page.find('section.interests')).to.contain(<p>{items.interests.result.text}</p>)
  expect(page.find('section.contact')).to.contain(<p>{items.contact.result.text}</p>)
  // eslint-disable-next-line no-unused-expressions
  expect(page.find(`section.interests[rel=${items.interests.id}]`)).to.exist
  // eslint-disable-next-line no-unused-expressions
  expect(page.find(`section.about[rel=${items.about.id}]`)).to.exist 
  // eslint-disable-next-line no-unused-expressions
  expect(page.find(`section.contact[rel=${items.contact.id}]`)).to.exist   
})

it('hides admin section by default', () => {
  // eslint-disable-next-line no-unused-expressions
  expect(f(admin)).not.to.exist
})

it('state contains admin section switch', () => {
  expect(page.state('showAdmin')).to.equal(false)
})

it('toggles admin section upon button click', () => {
  // expect(f(admin, 'h1')).to.exist
  // eslint-disable-next-line no-unused-expressions

  // Symulacja klikniecia
  // Uzyc enzyme do symulacji

  // Sprawdzic czy komponent jest widoczny
})
