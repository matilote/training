import React, { Component } from 'react'
import '../styles/Page.css'
import { Grid } from 'semantic-ui-react'
import { getItem } from '../content'
import Admin from './Admin'

class Page extends Component {

  render() {
    const items = {
      about: getItem(1),
      interests: getItem(5),
      contact: getItem(7)
    }

    return (
      <div className="Page">
        <Grid textAlign='center'>
          <Grid.Row>
            <Grid.Column columns={1}>
                <Admin />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <section className="about" rel={items.about.id}>
                O mnie
                <p>{items.about.text}</p>
              </section>
            </Grid.Column>
            <Grid.Column>
              <section className="interests" rel={items.interests.id}>
                Zainteresowania
                <p>{items.interests.text}</p>
              </section>
            </Grid.Column>
            <Grid.Column>
              <section className="contact" rel={items.contact.id}>
                Kontakt
                <p>{items.contact.text}</p>
              </section>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Page
