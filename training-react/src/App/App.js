import React, { Component } from 'react'
import './App.css'
import { Grid } from 'semantic-ui-react'
import content from '../content'

class App extends Component {
  
  // id=1
  // id=5
  // id=7

  render() {
    const id = 1
    const container = content.filter(el => el.id === id)[0]
    return (
      <div className="App">
        <Grid textAlign='center' columns={3}>
          <Grid.Row>
            <Grid.Column>
              <section className="about" rel={container.id}>
                O mnie
                <p>{container.text}</p>
              </section>
            </Grid.Column>
            <Grid.Column>
              <section>
                Zainteresowania
                <p>Text</p>
              </section>
            </Grid.Column>
            <Grid.Column>
              <section>
                Kontakt
                <p>Text</p>
              </section>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App
