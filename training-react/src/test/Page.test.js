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

const sel = {
  admin: 'header.admin',
  toggleAdminButton: 'button.toggleAdmin'
}

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

  expect(page.find(`section.interests[rel=${items.interests.id}]`)).to.exist  
  expect(page.find(`section.about[rel=${items.about.id}]`)).to.exist   
  expect(page.find(`section.contact[rel=${items.contact.id}]`)).to.exist   
})

it('hides admin section by default', () => { 
  expect(f(sel.admin)).not.to.exist  
  expect(f(sel.admin, sel.toggleAdminButton)).not.to.exist
})

it('state contains admin section switch', () => {
  expect(page.state('showAdmin')).to.equal(false)
})

it('toggles admin section upon button click', () => {  
  expect(f(sel.toggleAdminButton)).to.exist
  
  f(sel.toggleAdminButton).simulate('click')
  expect(page.state('showAdmin')).to.equal(true)
  
  expect(f(sel.admin)).to.exist
  
  expect(f(sel.toggleAdminButton)).not.to.exist
  // Sprawdzic czy komponent jest widoczny
})
