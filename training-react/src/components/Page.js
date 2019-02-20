import React, { Component } from 'react'
import '../styles/Page.css'
import { Grid, Button } from 'semantic-ui-react'
import { getItem } from '../content'
import Admin from './Admin'

class Page extends Component {


  state = {
    forgotten: 'Zapomniano',
    showAdmin: false
  }

  handleToggleAdminClicked = (event, data, x) => {
    console.log(x)    
    this.setState({
      ...this.state,
      showAdmin: !this.state.showAdmin
    })
  }

  renderToggleAdminButton = () => {
    const x = 1
    return (
        <Button
          className="toggleAdmin"
          onClick={(event, data) => this.handleToggleAdminClicked(event, data, x)}
        >
          Włącz admin
        </Button>
    )
  }

  render() {
    const items = {
      about: getItem(1),
      interests: getItem(5),
      contact: getItem(7)
    }

    return (
      <div className="Page">
        <Grid textAlign='center'>
          {
            this.state.showAdmin
              ? <Admin />
              : this.renderToggleAdminButton()
          }
          <Grid.Row columns={3}>
            <Grid.Column>
              <section className="about" rel={items.about.id}>
                <h2>{this.state.forgotten} O mnie</h2>
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
